import cv2
import csv
from cvzone.HandTrackingModule import HandDetector
import cvzone
import time
from flask import Flask, render_template, Response
from camera import VideoCamera



# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.js')
    
# def gen(camera):
#     while True:
#         frame = camera.get_frame()
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
               
# @app.route('/video_feed')
# def video_feed():
#     return Response(gen(VideoCamera()),
#                     mimetype='multipart/x-mixed-replace; boundary=frame')

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=3000, threaded=True, use_reloader=False)

cap = cv2.VideoCapture(0)
# cap.set(3, 2080)

detector = HandDetector(detectionCon=0.8)



   

class questions():
    def __init__(self, data):
        self.question = data[0]
        self.choice1 = data[1]
        self.choice2 = data[2]
        self.choice3 = data[3]
        self.choice4 = data[4]
        self.answer = int(data[5])
        self.userAns = None
    def update(self, cursor, bboxs):
        for i, bbox in enumerate(bboxs):
            x1, y1, x2, y2 = bbox
            if x1<cursor[0]<x2 and y1<cursor[1]<y2:
                self.userAns = i + 1

                if question.userAns == question.answer:
                    cv2.rectangle(img, (x1,y1), (x2,y2), (0,255,0), cv2.FILLED)
                else:
                    cv2.rectangle(img, (x1, y1), (x2, y2), (0, 0, 255), cv2.FILLED)


pathcsv = "questions.csv"
with open(pathcsv, newline='\n') as f:
    reader = csv.reader(f)
    dataAll = list(reader)[1:]


qNo = 0
qTotal = len(dataAll)

questionsList = []
for q in dataAll:
    questionsList.append(questions(q))

print(len(questionsList))


while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)
    hands, img = detector.findHands(img, flipType=False)
    if qNo < qTotal:
        question = questionsList[qNo]
        img, bbox = cvzone.putTextRect(img, question.question, [100, 100], 1, 2, offset=20)
        img, bbox1 = cvzone.putTextRect(img, question.choice1, [100, 200], 1, 2, offset=20)
        img, bbox2 = cvzone.putTextRect(img, question.choice2, [400, 200], 1, 2, offset=20)
        img, bbox3 = cvzone.putTextRect(img, question.choice3, [100, 300], 1, 2, offset=20)
        img, bbox4 = cvzone.putTextRect(img, question.choice4, [400, 300], 1, 2, offset=20)


        if hands:
            lmList = hands[0]['lmList']
            cursor = lmList[8]
            length, info = detector.findDistance(lmList[8], lmList[12])
            if length < 20:
                question.update(cursor, [bbox1, bbox2, bbox3, bbox4])
                print(question.userAns)
            if question.userAns is not None:
                time.sleep(0.5)
                qNo += 1
    else:
        score = 0
        for question in questionsList:
            if question.answer == question.userAns:
                score += 1
        score = round((score / qTotal) * 100, 2)
        img, _ = cvzone.putTextRect(img, "Quiz Completed", [100, 200], 1, 2, offset=20)
        img, _ = cvzone.putTextRect(img, f'Your score : {score}%', [350, 200], 1, 2, offset=20)

        barValue = 50 + (450 // qTotal)*qNo
        cv2.rectangle(img, (50, 400), (barValue, 450), (0, 255, 0), cv2.FILLED)
        cv2.rectangle(img, (50, 400), (500, 450), (255, 0, 255), 5)
        img, _ = cvzone.putTextRect(img, f'{round((qNo / qTotal) * 100)}%', [530, 435], 2, 2, offset=16)

    cv2.imshow("Img", img)
    cv2.waitKey(1)
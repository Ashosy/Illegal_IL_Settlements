import cv2
import csv
from cvzone.HandTrackingModule import HandDetector
import cvzone
import time
from flask import Flask, render_template, Response
from camera import VideoCamera


class VideoCamera(object):
    def __init__(self):
      self.video = cv2.VideoCapture(0)
      detector = HandDetector(detectionCon=0.8)

    def __del__(self):
      self.video.release()

    def get_frame(self):
        ret, frame = self.video.read()
        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()
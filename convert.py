import cv2
import base64
from io import BytesIO
from PIL import Image
img=cv2.imread('islab.png')
retval, buffer_img= cv2.imencode('.jpg', img)
encode = base64.b64encode(buffer_img)
with open('encode.txt', 'w', encoding='utf-8') as f:
    f.write(str(encode))
#image_data = bytes(encode, encoding="ascii")
im = Image.open(BytesIO(base64.b64decode(encode)))
im.save('image.jpg')


from os import read
import os
from PIL import Image
 
i1 = Image.open(os.path.join(r'f:/EthicalHat/ImageComparision/output.png'))
i2 = Image.open(os.path.join(r'f:/EthicalHat/ImageComparision/output1.png'))
print(i1.mode)
print(i2.mode)
print(i1.size)
print(i2.size)
if(i1.mode != i2.mode):
    print("Different kinds of images.")

if(i1.size != i2.size):
    print("Different sizes")

pairs = zip(i1.getdata(), i2.getdata())
if len(i1.getbands()) == 1:
    dif = sum(abs(p1-p2) for p1,p2 in pairs)
else:
    dif = sum(abs(c1-c2) for p1,p2 in pairs for c1,c2 in zip(p1,p2))
 
ncomponents = i1.size[0] * i1.size[1] * 3
print ("Difference (percentage):", (dif / 255.0 * 100) / ncomponents)
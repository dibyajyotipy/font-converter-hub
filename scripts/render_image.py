import os
import json
from PIL import Image, ImageDraw, ImageFont

# Resolve project path relative to script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.dirname(script_dir)

# Load texts
with open(os.path.join(project_dir, 'output_texts.json'), 'r', encoding='utf-8') as f:
    data = json.load(f)

# Image config
width, height = 1000, 300
bg_color = (255, 255, 255)
text_color = (30, 41, 59) # slate-800

# Fonts
try:
    font = ImageFont.truetype(os.path.join(project_dir, "Chanakya.ttf"), 36)
except IOError:
    print("Error: Chanakya.ttf not found.")
    exit(1)

# Function to render image
def render(text, filename, title):
    img = Image.new('RGB', (width, height), color=bg_color)
    d = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        title_font = ImageFont.load_default()
        
    d.text((20, 20), title, font=title_font, fill=(15, 23, 42)) # slate-900
    
    lines = []
    line = ""
    words = text.split(" ")
    for word in words:
        if len(line) + len(word) > 50:
            lines.append(line)
            line = word + " "
        else:
            line += word + " "
    lines.append(line)
    
    y = 80
    for l in lines:
        d.text((20, y), l, font=font, fill=text_color)
        y += 50
        
    output_path = os.path.join(project_dir, filename)
    img.save(output_path)
    print(f"Saved {output_path}")

render(data['chanakya_from_kd'], 'chanakya_from_kd_clean.png', 'KrutiDev -> Chanakya (Clean-room):')
render(data['chanakya_from_uni'], 'chanakya_from_uni_clean.png', 'Unicode -> Chanakya (Clean-room):')

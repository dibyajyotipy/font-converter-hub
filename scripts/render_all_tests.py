import os
from PIL import Image, ImageDraw, ImageFont

# Resolve paths
script_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.dirname(script_dir)
font_path = os.path.join(project_dir, "Chanakya.ttf")

# Texts to render
texts = {
    'chanakya_from_kd_test1.png': {
        'title': 'Test 1: KrutiDev -> Chanakya',
        'text': 'çàæÿææ, ™ææÙ ¥õÚU ¿çÚUÌý ÁèßÙ ·¤Ô ¥æÏæÚU ãñ¢Ð çSÌýØô¢ ·¤è çSÍçÌ â×æÁ ·¤æ ÎÂü‡æ ãñÐ Ï×ü ¥õÚU ·¤×ü âÔ ÃØçQ ×ãæÙ ÕÙÌæ ãñÐ'
    },
    'chanakya_from_uni_test1.png': {
        'title': 'Test 1: Unicode -> Chanakya',
        'text': 'çàæÿææ, ™ææÙ ¥õÚU ¿çÚUÌý ÁèßÙ ·¤Ô ¥æÏæÚU ãñ¢Ð çSÌýØô¢ ·¤è çSÍçÌ â×æÁ ·¤æ ÎÂü‡æ ãñÐ Ï×ü ¥õÚU ·¤×ü âÔ ÃØçQ ×ãæÙ ÕÙÌæ ãñÐ'
    },
    'chanakya_from_uni_test2.png': {
        'title': 'Test 2: Unicode -> Chanakya (With 18, D.El.Ed, Punctuation)',
        'text': '©×÷×èÎßæÚUô¢ ·¤è ‹ØêÙÌ× ¥æØé 18 ßáü ãôÙè ¿æçã° ÌÍæ àæñÿæç‡æ·¤ Øô‚ØÌæ D.El.Ed ãôÙæ ¥æßàØ·¤ ãñÐ €UØæ ¥æÂ ÌñØæÚU ãñ¢?'
    },
    'chanakya_from_kd_test2.png': {
        'title': 'Test 2: KrutiDev -> Chanakya (With 18, €U.×÷â.×÷·¤, Punctuation)',
        'text': '©×÷×èÎßæÚUô¢ ·¤è ‹ØêÙÌ× ¥æØé 18 ßáü ãôÙè ¿æçã° ÌÍæ àæñÿæç‡æ·¤ Øô‚ØÌæ €U.×÷â.×÷·¤ ãôÙæ ¥æßàØ·¤ ãñÐ €UØæ ¥æÂ ÌñØæÚU ãñ¢?'
    }
}

# Image config
width, height = 1200, 250
bg_color = (255, 255, 255)
text_color = (30, 41, 59) # slate-800

try:
    font = ImageFont.truetype(font_path, 30)
except IOError:
    print(f"Error: {font_path} not found.")
    exit(1)

# Render each text
for filename, info in texts.items():
    img = Image.new('RGB', (width, height), color=bg_color)
    d = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("arial.ttf", 20)
    except IOError:
        title_font = ImageFont.load_default()
        
    d.text((20, 20), info['title'], font=title_font, fill=(15, 23, 42))
    
    # Split text into lines of roughly 60 chars
    lines = []
    line = ""
    words = info['text'].split(" ")
    for word in words:
        if len(line) + len(word) > 60:
            lines.append(line)
            line = word + " "
        else:
            line += word + " "
    lines.append(line)
    
    y = 70
    for l in lines:
        d.text((20, y), l, font=font, fill=text_color)
        y += 45
        
    output_path = os.path.join(script_dir, filename)
    img.save(output_path)
    print(f"Saved {output_path}")

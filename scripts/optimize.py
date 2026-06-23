import os
from PIL import Image

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    
    src_path = os.path.join(project_dir, 'public', 'krutidev-keboard-layout.png')
    dest_dir = os.path.join(project_dir, 'src', 'assets')
    os.makedirs(dest_dir, exist_ok=True)
    
    dest_path_webp = os.path.join(dest_dir, 'krutidev-keyboard-layout.webp')
    
    if not os.path.exists(src_path):
        print(f"Error: Source image not found at {src_path}")
        return
        
    # Open image
    img = Image.open(src_path)
    original_size = os.path.getsize(src_path)
    print(f"Original dimensions: {img.size[0]}x{img.size[1]}")
    print(f"Original file size: {original_size / 1024:.2f} KB")
    
    # Target width is 800px (since the container max-width is 800px, and rendered width is max 720px)
    # We will use 900px to ensure it looks crisp on high-DPI displays.
    target_width = 900
    aspect_ratio = img.size[1] / img.size[0]
    target_height = int(target_width * aspect_ratio)
    
    # Resize image
    resized_img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Save as WebP
    resized_img.save(dest_path_webp, 'WEBP', quality=85)
    webp_size = os.path.getsize(dest_path_webp)
    print(f"Optimized WebP dimensions: {target_width}x{target_height}")
    print(f"Optimized WebP file size: {webp_size / 1024:.2f} KB")
    print(f"Saved to: {dest_path_webp}")

if __name__ == '__main__':
    main()

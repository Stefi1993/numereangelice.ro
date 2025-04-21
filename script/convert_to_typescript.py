import os
import re
from pathlib import Path

def convert_to_typescript(js_content: str, number: int) -> str:
    # Add type annotations
    ts_content = js_content.replace(
        "const AngelNumber", 
        "import { FC } from 'react';\n\nconst AngelNumber"
    )
    
    # Add type for the component
    ts_content = ts_content.replace(
        f"const AngelNumber{number} = () => {{",
        f"const AngelNumber{number}: FC = () => {{"
    )
    
    # Add types for state variables
    ts_content = ts_content.replace(
        "useState('')",
        "useState<string>('')"
    )
    ts_content = ts_content.replace(
        "useState(true)",
        "useState<boolean>(true)"
    )
    
    # Add type for the event handler
    ts_content = ts_content.replace(
        "const handleSearch = (e) =>",
        "const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>"
    )
    ts_content = ts_content.replace(
        "(e) => setSearchQuery",
        "(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery"
    )
    
    return ts_content

def process_files():
    # Create output directory if it doesn't exist
    output_dir = Path("src/pages_generated")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Process all JavaScript files
    input_dir = Path("src/pages")
    for js_file in input_dir.glob("AngelNumber*.js"):
        # Extract number from filename
        match = re.search(r'AngelNumber(\d+)\.js', js_file.name)
        if not match:
            continue
            
        number = int(match.group(1))
        
        # Read JavaScript content
        js_content = js_file.read_text(encoding='utf-8')
        
        # Convert to TypeScript
        ts_content = convert_to_typescript(js_content, number)
        
        # Save TypeScript file
        output_file = output_dir / f"AngelNumber{number}.tsx"
        output_file.write_text(ts_content, encoding='utf-8')
        print(f"Converted {js_file.name} to {output_file.name}")

if __name__ == "__main__":
    process_files() 
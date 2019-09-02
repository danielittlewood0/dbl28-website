IMPORT_TAG_REGEX = /\A\s*<import\s+src="([^"]+)">\s*\Z/

def build(source_file, build_file)
  source_file.each do |line|
    match = line.match(IMPORT_TAG_REGEX)
    if match.nil?
      compiled_file.write(line)
    else
      src = match[1]
      `pwd`
      File.open("#{source_dir}/#{src}", "r").each do |line_to_import| 
        compiled_file.write(line_to_import)
      end
    end
  end
end

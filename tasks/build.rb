IMPORT_TAG_REGEX = /\A\s*<import\s+src="([^"]+)">\s*\Z/

def build(source_fname, build_fname)
  source_file = File.open(source_fname,"r")
  build_file = File.open(build_fname,"w")
  source_file.each do |line|
    match = line.match(IMPORT_TAG_REGEX)
    if match.nil?
      build_file.write(line)
    else
      src = match[1]
      source_dir = File.dirname(source_fname)
      File.open("#{source_dir}/#{src}", "r").each do |line_to_import| 
        build_file.write(line_to_import)
      end
    end
  end
end

SOURCE_DIR = "public/no_js/source" # assumes rake is executed at root
BUILD_DIR = "public/no_js/build" # assumes rake is executed at root
require './tasks/build.rb'
import './tasks/clean.rake'

task :clean do
  clean(BUILD_DIR)
end

task :build do
  files = Dir.glob("#{SOURCE_DIR}/*")
  files.each do |source_fname|
    fname = File.basename(source_fname)
    puts "building #{fname}"
    source_file = File.open("./#{SOURCE_DIR}/#{fname}","r")
    build_file = File.open("./#{BUILD_DIR}/#{fname}","w")
    build(source_file, build_file)
  end
  puts "Build complete!"
end

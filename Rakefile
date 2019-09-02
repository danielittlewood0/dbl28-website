SOURCE_DIR = "public/no_js/source" # assumes rake is executed at root
BUILD_DIR = "public/no_js/build" # assumes rake is executed at root
require './tasks/build.rb'
import './tasks/clean.rake'

task :clean do
  clean(BUILD_DIR)
end

task :build do
  files = Dir.glob("#{SOURCE_DIR}/*")
  puts "Building in #{BUILD_DIR}..."
  files.each do |source_fname|
    fname = File.basename(source_fname)
    build_fname = "#{BUILD_DIR}/#{fname}"
    puts "building #{fname}"
    build(source_fname, build_fname)
  end
  puts "Build complete!"
end

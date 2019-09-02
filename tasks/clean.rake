def clean(build_dir)
  puts `git clean -fx #{build_dir}`
end

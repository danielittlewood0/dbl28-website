def clean(build_dir)
  `git clean -fx #{build_dir}`
end

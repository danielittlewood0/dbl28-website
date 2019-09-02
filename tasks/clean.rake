def clean(build_dir)
  dry_run = `git clean -nx #{build_dir}`
  if dry_run == ""
    puts "Nothing to delete!"
    return
  else
    puts dry_run
    puts "Does that sound OK? [Y/n]"
  end
  response = STDIN.gets
  unless response[0].downcase == 'n'
    puts "Deleting..."
    `git clean -fx #{build_dir}`
    puts "Done!"
  else
    puts "Aborted - no files removed."
  end
end

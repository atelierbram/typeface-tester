#!/bin/bash -x

# write to file
write_to_file()
{

  curl "http://localhost/~bram/github.com/atelierbram/typeface-tester/src/index.php" > "../build/html/index.html"

}

# execute it
write_to_file


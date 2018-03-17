# bash

for filename in ./*.gif; do
  if [[ $filename != *"_small"* ]]; then
    echo $filename
    convert $filename -coalesce -scale 150 -layers Optimize  "${filename%.gif}_small.gif"
  fi
done

for filename in ./*.png; do
  if [[ $filename != *"_small"* ]]; then
    echo $filename
    convert $filename -scale 150   "${filename%.png}_small.png"
  fi
done

for filename in ./*.jpg; do
  if [[ $filename != *"_small"* ]]; then
    echo $filename
    convert $filename -scale 150   "${filename%.jpg}_small.jpg"
  fi
done
194.times do |i|
  zi = sprintf("%0.3d", i)
  `convert -size 52x52 xc:transparent -fill black -stroke black -draw "roundrectangle 12,19 38,33 5,5" -blur 2x2 -fill yellow -stroke red -draw "roundrectangle 12,18 38,32 5,5" -fill red -stroke none -pointsize 12 -font "Arial" -gravity center -draw "text 0,0 '#{zi}'" ui/main/atlas/icon_atlas/img/strategic_icons/icon_si_icon_#{zi}.png`
end

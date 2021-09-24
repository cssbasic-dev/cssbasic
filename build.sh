lessc src/css/full.less output/cssbasic-full.css
cleancss -o output/cssbasic-full.min.css output/cssbasic-full.css

lessc src/css/main.less output/cssbasic.css
cleancss -o output/cssbasic.min.css output/cssbasic.css

lessc src/css/colors.less output/cssbasic-colors.css
cleancss -o output/cssbasic-colors.min.css output/cssbasic-colors.css
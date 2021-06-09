# Social Media

Demo -> https://alameenboss.github.io/angular-social-media/home

## To deploye in gh-phage

Install npm package -> 
```
npm install -g angular-cli-ghpages
```


1. Modify the file in image url with angular-social-media/assets/images (find and replace)
2. Save whole Folder
3. build using : 
```
ng build --prod --base-href https://alameenboss.github.io/angular-social-media
```
4. Modify the dist/index.html (js & css) with /angular-social-media/ 
5. Save dist/index.html
6. To publish -> 
```
ngh -S
```
7. Revert the images url 
8. Save Project

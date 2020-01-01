const fs = require('fs');
files=fs.readdirSync("./post/");
for(var i=0; i<files.length; i++){
  document.write(files[i]+"<br>");
}

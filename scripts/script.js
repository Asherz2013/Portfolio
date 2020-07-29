
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
}
else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        var mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    switch (mode) {
        case 'light':
            document.getElementById('theme-style').href = 'css/default.css'
            break;
    
        case 'blue':
            document.getElementById('theme-style').href = 'css/blue.css'
            break;

        case 'green':
            document.getElementById('theme-style').href = 'css/green.css'
            break;

        case 'purple':
            document.getElementById('theme-style').href = 'css/purple.css'
            break;

        default:
            document.getElementById('theme-style').href = 'css/default.css'
            break;
    }

    localStorage.setItem('theme', mode);
}
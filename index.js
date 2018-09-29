var current = ProgrammingIcon;
var timeout;

document.getElementById("textbox").className = 'fade1';
document.getElementById("background").className = 'fade1';
timeout = window.setTimeout(function() {
    document.getElementById("textbox").innerHTML = document.getElementById("Programming").innerHTML;
    document.getElementById("textbox").className = 'fade2';
    document.getElementById("background").className = 'fade2';
}, 500);

ProgrammingIcon.onclick = function() {
    if (current != ProgrammingIcon) {
        current = ProgrammingIcon;
        window.clearTimeout(timeout);
        document.getElementById("selector").style.top = '35%';
        document.getElementById("textbox").className = 'fade1';
        timeout = window.setTimeout(function() {
            document.getElementById("textbox").innerHTML = document.getElementById("Programming").innerHTML;
            document.getElementById("textbox").className = 'fade2';
        }, 500);
    }
};

DrumsIcon.onclick = function() {
    if (current != DrumsIcon) {
        current = DrumsIcon;
        window.clearTimeout(timeout);
        document.getElementById("selector").style.top = '50%';
        document.getElementById("textbox").className = 'fade1';
        timeout = window.setTimeout(function() {
            document.getElementById("textbox").innerHTML = document.getElementById("Drums").innerHTML;
            document.getElementById("textbox").className = 'fade2';
        }, 500);
    }
};


EducationIcon.onclick = function() {
    if (current != EducationIcon) {
        current = EducationIcon;
        window.clearTimeout(timeout);
        document.getElementById("selector").style.top = '65%';
        document.getElementById("textbox").className = 'fade1';
        timeout = window.setTimeout(function() {
            document.getElementById("textbox").innerHTML = document.getElementById("Education").innerHTML;
            document.getElementById("textbox").className = 'fade2';
        }, 500);
    }
};

function aboutme() {
    let firstSection = document.getElementById('firstSection');
    let footer = document.getElementById('footer');
    let aboutme = document.getElementById('about-me');
    let skills = document.getElementById('skills');
    let work = document.getElementById('work');
    let references = document.getElementById('thirdSection');

    firstSection.style.border = "none";
    aboutme.style.display = "block";
    aboutme.style.transform = "scale(1.3) translate(15%, 20%)";
    aboutme.style.width = "70%";
    skills.style.display = "none";
    work.style.display = "none";
    references.style.display = "none";
    footer.style.display = "none";
}

function skills() {
    let firstSection = document.getElementById('firstSection');
    let footer = document.getElementById('footer');
    let aboutme = document.getElementById('about-me');
    let skills = document.getElementById('skills');
    let work = document.getElementById('work');
    let references = document.getElementById('thirdSection');

    footer.style.display = "none";
    firstSection.style.border = "none";
    skills.style.display = "block";
    skills.style.transform = "scale(1.3) translate(0, 20%)";
    skills.style.width = "70%";
    aboutme.style.display = "none";
    work.style.display = "none";
    references.style.display = "none";
}

function workDone() {
    let firstSection = document.getElementById('firstSection');
    let footer = document.getElementById('footer');
    let aboutme = document.getElementById('about-me');
    let skills = document.getElementById('skills');
    let work = document.getElementById('work');
    let references = document.getElementById('thirdSection');

    footer.style.display = "none";
    firstSection.style.border = "none";
    work.style.display = "flex";
    work.style.transform = "scale(1.3) translate(15%, 20%)";
    work.style.width = "70%";
    aboutme.style.display = "none";
    skills.style.display = "none";
    references.style.display = "none";
}

function thirdSection() {
    let firstSection = document.getElementById('firstSection');
    let footer = document.getElementById('footer');
    let aboutme = document.getElementById('about-me');
    let skills = document.getElementById('skills');
    let work = document.getElementById('work');
    let references = document.getElementById('thirdSection');

    footer.style.display = "none";
    firstSection.style.border = "none";
    firstSection.style.display = "none";
    work.style.display = "none";
    references.style.display = "block";
    //references.style.transform = "scale(1.3) translate(10%, 0)";
    //references.style.width = "70%";
    
}
const currentYear = new Date().getFullYear();

const copyrightElement = document.getElementById("copyright");

copyrightElement.innerHTML = `© ${currentYear} Copyright by Ivan`;

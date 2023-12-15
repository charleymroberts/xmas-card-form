// extract encoded parameters from the URL hash (not including the leading # character)
const encodedParams = window.location.hash.substring(1);
// reverse the base64 encoding and parse
const params = new URLSearchParams(atob(encodedParams));
// insert the values into the HTML (to display the message to the recipient)
for(let field of ["r", "g", "s"]) {
    document.getElementById(`card-${field}`).textContent = params.get(field);
}


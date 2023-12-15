const cardForm = document.getElementById("cardForm");

// update the message preview as the sender enters their text
cardForm.addEventListener("input", function(e) {
    const editedFieldName = e.target.name;
    const previewTarget = document.getElementById(`card-${editedFieldName}`);
    if(previewTarget) {
        // put the typed value into the relevant slot on the card preview
        previewTarget.textContent = e.target.value;
    }
});

// generate URL when form is submitted
cardForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // base URL to display (rather than design) this card
    // replace this URL with the location of the webpage displaying the graphic
    const cardUrl = new URL("receive-message.html", window.location.href);
    // turn the form fields into a query string
    const values = new URLSearchParams(new FormData(cardForm));

    // add the query string as the URL hash, so it can be retrieved by the 'receive message' page
    // btoa() encodes the query string so that the user's data is not shown directly in the URL
    cardUrl.hash = btoa(values.toString());
    // TODO Explore URL-shortening options

    // display the URL in a read-only text field so the user can copy and share it
    const urlField = document.getElementById("cardUrl");
    urlField.value = cardUrl.toString();

});
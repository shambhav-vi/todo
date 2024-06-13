document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the Gmail icon
    document.getElementById('sendEmail').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of opening the link
        console.log("Gmail icon clicked!");

        // Define email parameters
        var email = 'shambhavi10011@gmail.com';
        var subject = 'Sending';
        var body = 'Content';

        // Construct mailto link
        var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        // Open mail client or display error message if unable to open
        if (navigator && navigator.msLaunchUri) {
            // For Microsoft Edge and Internet Explorer
            navigator.msLaunchUri(mailtoLink, null, function() {});
        } else {
            // For other browsers
            window.location.href = mailtoLink;
        }
    });
});

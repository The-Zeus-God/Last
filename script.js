// Handle file upload
function handleFileUpload() {
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Navigate to the next page after upload
            window.location.href = "image-preview.html"; // Redirect to image preview page
            localStorage.setItem("uploadedImage", e.target.result); // Store the uploaded image in localStorage
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please choose a file to upload.");
    }
}

// Display the uploaded image on the preview page
window.onload = function() {
    if (window.location.pathname.includes("image-preview.html")) {
        var uploadedImage = localStorage.getItem("uploadedImage");
        if (uploadedImage) {
            document.getElementById("uploadedImage").src = uploadedImage;
        }
    }

    if (window.location.pathname.includes("results.html")) {
        // For results page, we can retrieve the uploaded image from localStorage
        var uploadedImage = localStorage.getItem("uploadedImage");
        if (uploadedImage) {
            document.getElementById("finalImage").src = uploadedImage;
        }
    }
}

// Move to the next page after the image preview
function moveToNextPage() {
    window.location.href = "results.html"; // Navigate to the results page
}
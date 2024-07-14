
     document.getElementById('imageUpload').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('profileImage').setAttribute('src', event.target.result);
            }
            reader.readAsDataURL(file);
        }
    });
    document.getElementById('editName').addEventListener('click', function() {
        document.getElementById('name').readOnly = false;
    });
        // Enable editing for the phone number field
document.getElementById('editEmail').addEventListener('click', function() {
    document.getElementById('email').readOnly = false;
});
    // Enable editing for the phone number field
document.getElementById('editPhone').addEventListener('click', function() {
    document.getElementById('phone').readOnly = false;
});

// Enable editing for the date of birth field
document.getElementById('editDob').addEventListener('click', function() {
    document.getElementById('dob').readOnly = false;
});

    function saveChanges() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        console.log('Saved Information:', { name, email, phone, dob });
        alert('Your changes have been saved.');
    }

    function cancelChanges() {
        // Reload the page to cancel the changes
        location.reload();
    }

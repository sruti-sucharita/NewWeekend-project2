
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
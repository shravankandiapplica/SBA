import { LightningElement, track } from 'lwc';

export default class ButtonComponent extends LightningElement {
    @track isModalOpen = true;
    @track firstname = '';
    @track lastname =  '';
    @track email = '';
    @track phone = '';

    handleFNameChange(event) {
        this.firstname = event.target.value;
    }
    handleLNameChange(event) {
        this.lastname = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleCancel() {
        this.isModalOpen = false;
        // Reset input values when closing the modal
        this.firstname = '';
        this.phone = '';
        this.lastname= '';
        this.email = '';
        // Reset other input values if needed

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact', // Replace 'Account' with your specific object API name
                actionName: 'new'
            }
        });
    }


    handleSave() {
        // Perform actions on save (e.g., send input values to server)
        // Here, you can access this.input1, this.input2, etc. to access the input values
        // Reset input values or perform any additional actions after saving

        // For example, log input values to console
        console.log('FirstName: ', this.firstname);
        console.log('Phone: ', this.phone);
        console.log('LastName: ', this.lastname);
        console.log('Email: ', this.email);

        this.handleCancel(); // Close the modal after saving
    }
}
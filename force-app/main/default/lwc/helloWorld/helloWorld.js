import { LightningElement,track } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
    @track isModalOpen = false;
    @track inputValue1 = '';
    @track inputValue2 = '';
    // Define more @track variables for additional inputs if needed

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
        // Reset input values when closing the modal
        this.inputValue1 = '';
        this.inputValue2 = '';
        // Reset other input values as needed
    }

    handleInputChange1(event) {
        this.inputValue1 = event.target.value;
    }

    handleInputChange2(event) {
        this.inputValue2 = event.target.value;
    }

    handleSave() {
        // Perform actions with input values on Save button click
        console.log('Input Value 1:', this.inputValue1);
        console.log('Input Value 2:', this.inputValue2);
        // Perform other operations or pass values to Apex as required

        // Close the modal after saving
        this.closeModal();
    }
}
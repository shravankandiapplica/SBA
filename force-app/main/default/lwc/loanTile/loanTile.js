import { LightningElement, api } from 'lwc';
import loanModal from 'c/loanModal';

export default class loanTile extends LightningElement {

    status = 'Approved';
    LoanName  = '7(a)Small';
    
    async tileClick() {
        const result = await loanModal.open({
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            name : 'Marcia Smith',
            uname: 'msmith65',
            phone:'789-987-8769'
        });
        console.log(result);   
    }
}
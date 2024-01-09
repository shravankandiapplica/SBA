import {api} from 'lwc';
import LightningModal from 'lightning/modal';


export default class LoanModal extends LightningModal {
    @api name;
    @api uname;
    @api phone;

    handleOkay() {
        this.close('okay');
    }
}
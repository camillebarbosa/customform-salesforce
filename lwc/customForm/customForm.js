import { LightningElement, track, api } from 'lwc';
import saveRecord from '@salesforce/apex/CustomService.saveRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class CustomForm extends LightningElement {
    @api recordId; // Id do Case
    @track customerPriority;
    @track showForm = true;
    @track showResult = false;
    @track isSuccess = false;



    priorityOptions = [
        { label: 'Alta', value: 'High' },
        { label: 'Média', value: 'Medium' },
        { label: 'Baixa', value: 'Low' }
    ];

handleChange(event) {
    this.customerPriority = event.detail.value;
}


    handleChange(event) {
        this.customerPriority = event.target.value;
    }

    handleSave() {
    if (!this.recordId) {
        console.error('recordId não definido');
        return;
    }

    saveRecord({
        record: {
            Id: this.recordId,
            Priority: this.customerPriority
        }
    })
    .then(() => {
        this.isSuccess = true;
        this.showForm = false;
        this.showResult = true;

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Sucesso',
                message: 'Customer Priority atualizado com sucesso!',
                variant: 'success'
            })
        );
    })
    .catch(error => {
        this.isSuccess = false;
        this.showForm = false;
        this.showResult = true;

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Erro ao salvar',
                message: error.body ? error.body.message : error.message,
                variant: 'error'
            })
        );
        console.error(error);
    });
}

}
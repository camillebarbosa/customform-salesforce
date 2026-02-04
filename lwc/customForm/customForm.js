import { LightningElement, track, api } from 'lwc';
import saveRecord from '@salesforce/apex/CustomService.saveRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class CustomForm extends LightningElement {
    @api recordId; // Id do Case
    @track customerPriority;

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
            // Mensagem de sucesso
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Sucesso',
                    message: 'Customer Priority atualizado com sucesso!',
                    variant: 'success'
                })
            );

            // Fecha a aba/popup se estiver em quick action/modal
            this.dispatchEvent(new CloseActionScreenEvent());
        })
        .catch(error => {
            // Mensagem de erro
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

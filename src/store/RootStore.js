import ContactStore from './ContactStore';

export default class RootStore {
    constructor(){
        this.ContactStore = new ContactStore(this)
    }
}
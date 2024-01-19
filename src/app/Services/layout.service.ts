import { Injectable,EventEmitter } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    sideBarToggle = new EventEmitter();

    triggerSideBarToggle(){
        return this.sideBarToggle.next('');
    }
}
import {Component}      from '@angular/core';

import {TopicComponent}         from './topics/topic.component';
import {ForumComponent}         from './forums/forum.component';
import {ForumHeaderComponent}   from './forum-header/forum-header.component';


@Component({
    selector: 'my-app',
    directives: [ForumHeaderComponent, ForumComponent, TopicComponent],
    template: `
        <forum-header></forum-header>
        `
})
export class AppComponent {
    
    constructor(){
        
    }
    
    
    
    private getForums():void{
        
    }
 }

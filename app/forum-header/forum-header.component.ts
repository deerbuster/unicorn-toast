import {Component}      from '@angular/core';
import {Title}          from '@angular/platform-browser';
import {Config}         from '../config/config';

@Component({
    selector: 'forum-header',
    templateUrl: '/app/forum-header/forum-header.component.html'
})
export class ForumHeaderComponent {
    config:Config = new Config();
    
    constructor(){
        let title = new Title();
        title.setTitle(this.config.forumMainTitle + ' - Index');
    }
 }

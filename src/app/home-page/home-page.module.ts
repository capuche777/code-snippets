import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageConrollerComponent} from './home-page-conroller/home-page-conroller.component';
import {LanguageBarComponent} from './language-bar/language-bar.component';
import {SnippetAdderComponent} from './snippet-adder/snippet-adder.component';
import {SnippetCardComponent} from './snippet-card/snippet-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        HomePageConrollerComponent,
        LanguageBarComponent,
        SnippetAdderComponent,
        SnippetCardComponent
    ],
    exports: [
        HomePageConrollerComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class HomePageModule {
}

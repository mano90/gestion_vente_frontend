import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { FormatMoneyModule } from '../../pipes/format-money.module';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule, FormsModule, FormatMoneyModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}

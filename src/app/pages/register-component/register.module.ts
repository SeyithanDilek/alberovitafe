import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register-component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RegisterRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class RegisterModule {}

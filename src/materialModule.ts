import { NgModule } from '@angular/core';

// All Angular Material Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';



const materialModules = [
  FlexLayoutModule,
  MatIconModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatStepperModule,
  MatTooltipModule,
  MatListModule,
  MatSnackBarModule,
  MatDividerModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatMenuModule,
  MatTableModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule
];

@NgModule({
  exports: materialModules
})
export class MaterialModule {}

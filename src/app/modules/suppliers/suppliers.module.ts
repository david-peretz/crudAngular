import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EntitiesComponent } from "./components/entities/entities.component";
import { EntityDetailComponent } from "./components/entity-detail/entity-detail.component";
import { SuppliersService } from "./services/suppliers.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { CrudFormComponent } from "./components/entity-detail/crud-form.component";
import { SearchComponent } from "./components/search/search.component";
import { AttributesService } from "./services/attributes.service";
import { SuppliersComponent } from "./components/supplier/suppliers.component";

const routes: Routes = [
  { path: "", component: SuppliersComponent },
  { path: ":id", component: EntityDetailComponent }
];
@NgModule({
  declarations: [
    EntitiesComponent,
    EntityDetailComponent,
    CrudFormComponent,
    FilterPipe,
    SearchComponent,
    SuppliersComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [SuppliersService, AttributesService]
})
export class SuppliersModule {}

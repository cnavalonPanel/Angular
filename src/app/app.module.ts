import { routing } from './cmp-rutas/app.routing';
import { TareasService } from './lista-tareas/tareas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemsService } from './cmp-servicios/items.service';

import { AppComponent } from './app.component';
import { MiCmpComponent } from './mi-cmp/mi-cmp.component';
import { OtroCmpComponent } from './otro-cmp.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { OcultarPipe } from './cmp-pipes/ocultar.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { PowerModeDirective } from './cmp-directivas/power-mode.directive';
import { UnlessDirective } from './cmp-directivas/unless.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { LogService } from './cmp-servicios/log.service';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { CmpRutasComponent } from './cmp-rutas/cmp-rutas.component';
import { InicioComponent } from './cmp-rutas/inicio/inicio.component';
import { UsuarioComponent } from './cmp-rutas/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    MiCmpComponent,
    OtroCmpComponent,
    CmpDataBindingComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    OcultarPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    PowerModeDirective,
    UnlessDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    ListaTareasComponent,
    CmpRutasComponent,
    InicioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    LogService,
    ItemsService,
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

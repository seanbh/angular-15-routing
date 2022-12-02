import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {
    path: 'first', component: FirstComponentComponent, title: 'The First',
    children: [{ path: 'child-a', component: ChildAComponent, title: 'Child A' }, {path: 'child-b', component: ChildBComponent, title: 'Child B'}]
  },
  { path: 'second', component: SecondComponentComponent, title: 'The Second' },
  { path: '**', component:FirstComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

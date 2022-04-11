import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        RouterModule.forChild({
            
        })
    ]
})

export class CourseModule {

}
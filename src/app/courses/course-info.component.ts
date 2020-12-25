import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: 'course-info.components.html'
})
export class CourseInfoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService:CourseService){ }

    ngOnInit(): void{
        let id: any = this.activatedRoute.snapshot.paramMap.get('id');
            this.courseService.retrieveById(id).subscribe({
                next: course => this.course = course,
                error: err => console.log('Error', err)
            });
    }
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }
}
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss'],
})
export class CoachComponent {
  videoForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.videoForm = this.fb.group({
      classVideo: ['', Validators.required],
      title: ['', Validators.required],
      exercises: this.fb.array([]) // Usando FormArray para exercícios dinâmicos
    });
  }

  get exercises() {
    return this.videoForm.get('exercises') as FormArray;
  }

  addExerciseField() {
    this.exercises.push(this.fb.group({
      exercise: ['', Validators.required],
      answer: ['', Validators.required]
    }));
  }

  onSubmit() {
    if (this.videoForm.valid) {
      const formData = this.videoForm.value;
      this.dataService.saveData('videoForm.json', formData); 
      console.log('Form saved:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}

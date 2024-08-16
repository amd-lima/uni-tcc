import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pages',
  template: ''
})

export class PagesComponent implements OnInit {
  savedFormData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadSavedData();
  }

  loadSavedData() {
    this.savedFormData = this.dataService.loadData('videoForm.json');
    console.log('Loaded data:', this.savedFormData);
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  videos: any[] = [];

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    const filename = 'videoForm.json';
    const data = this.dataService.loadData(filename);
    if (data) {
      this.videos = [data];
      this.videos.forEach(video => {
        if (video.exercises) {
          video.exercises.forEach((exercise: any) => {
            exercise.showAnswer = false;
          });
        }
      });
    }
  }

  getVideoUrl(url: string): SafeResourceUrl {
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  title: string;
  data: any;
  constructor(private resumeData: ResumeDataService) {
    this.title = 'Résumé';
    this.data = ResumeDataService.length;
  }

  ngOnInit() {
  }
}

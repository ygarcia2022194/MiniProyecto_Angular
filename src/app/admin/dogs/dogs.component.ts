import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit{
  dogImageUrl: string | undefined;
  textAreaContent: string = '';

  constructor(private dogsService: DogsService) {}

  ngOnInit(): void {
    this.fetchNewDogImage();
  }

  fetchNewDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(response => {
      this.dogImageUrl = response.message;
    });
  }
}

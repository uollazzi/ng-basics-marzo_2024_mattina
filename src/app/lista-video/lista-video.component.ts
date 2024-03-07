import { Component } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'app-lista-video',
  templateUrl: './lista-video.component.html',
  styleUrl: './lista-video.component.css'
})
export class ListaVideoComponent {
  videos: Video[] = [
    {
      titolo: "Dune",
      url: "https://youtu.be/U2Qp5pL3ovA?si=eYOmXBDXg7QM-7jW"
    },
    {
      titolo: "Batman",
      url: "https://www.youtube.com/watch?v=JKjSqs5czLA"
    },
    {
      titolo: "Top Gun",
      url: "https://www.youtube.com/watch?v=PqvPtrw3KEQ"
    }
  ];


}

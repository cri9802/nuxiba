import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AreasService } from '../../services/areas.service';
import { Area } from '../../interfaces/area';

@Component({
  selector: 'app-altaarea',
  templateUrl: './altaarea.component.html',
  styleUrls: ['./altaarea.component.css']
})
export class AltaareaComponent implements OnInit {
  area: Area = { 
				 
    nombre: null,
    
  };

  constructor(private areasService: AreasService) { }

  ngOnInit() {
  }
  salvarArea() { 
    //console.log(this.local);
    this.areasService.save(this.area).subscribe(
        (data)=>{
          alert('Area: Alta correcta.');
          console.log(data);
        },
        (error)=>{
          console.log(error);
          alert('Error: Alta!!!');
        });
    }

}

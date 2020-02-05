import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "entities",
  templateUrl: "./entities.component.html"
})
export class EntitiesComponent implements OnInit {
  @Input() model: any;
  @Input() searchText: String;
  constructor() {}

  ngOnInit() {}
}

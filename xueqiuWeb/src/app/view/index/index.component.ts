import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor() {
    this.getDate()
  }

  ngOnInit(): void {
  }

  async getDate() {
    const httpUrl = 'http://localhost:8080/api/index/quote'
    let result = await axios.get(httpUrl)
  }

}

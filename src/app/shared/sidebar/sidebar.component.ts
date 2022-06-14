import { Component, OnInit, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  @Input() navigation_data: any;
  TREE_DATA: any = [
    {
      name: 'Fruit',
      children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
        },
      ],
    },
  ];
  content: any;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.data = this.navigation_data;
    debugger;
  }

}

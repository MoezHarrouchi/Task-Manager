import { ExpressionStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:string;
  UserName:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;

  Clients:string[];
  Projects:string[];
  Years:number[]=[];
  TeamMemberSumary=[];
  TeamMembers=[];

  CurrentExpenditure: number;
  AvailableFunds:number;

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.UserName="John Smith";
    this.NoOfTeamMembers=10;
    this.TotalCostOfAllProjects=300;
    this.PendingTasks=2;
    this.ProjectCost=300;
    this.UpComingProjects=2;
    this.CurrentExpenditure=200;
    this.AvailableFunds=100;
    
    this.Clients=["Google","Facebook","Yahoo"];
    this.Projects=["A","B","C","D"];
    for(let i=2020; i>=2010;i--){
      this.Years.push(i);
    }
    this.TeamMemberSumary=[
      {
        Region:"South",
        TeamMemberCount:4,
        TemporarilyUnavailableMembers:34

      },
      {
        Region:"Est",
        TeamMemberCount:7,
        TemporarilyUnavailableMembers:36

      },
      {
        Region:"North",
        TeamMemberCount:9,
        TemporarilyUnavailableMembers:33

      },
    ];
    this.TeamMembers=[
      {
        Region:"Est",
        Members:[
          {
            Name:"John",
            ID:1,
            Status:"Busy"
          },
          {
            Name:"Fred",
            ID:2,
            Status:"Available"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          }
        ]
      },
      {
        Region:"North",
        Members:[
          {
            Name:"Alex",
            ID:1,
            Status:"Busy"
          },
          {
            Name:"Fred",
            ID:2,
            Status:"Available"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          }
        ]
      },
      {
        Region:"West",
        Members:[
          {
            Name:"Mohamed",
            ID:1,
            Status:"Available"
          },
          {
            Name:"Fred",
            ID:2,
            Status:"Available"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          }
        ]
      },
      {
        Region:"South",
        Members:[
          {
            Name:"Mohamed",
            ID:1,
            Status:"Available"
          },
          {
            Name:"Fred",
            ID:2,
            Status:"Available"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          },
          {
            Name:"John",
            ID:1,
            Status:"Beasy"
          }
        ]
      }
    ];

  }
  onProjectChange(event){
    if(event.target.innerHTML=="A"){
      this.ProjectCost=10;
      this.CurrentExpenditure=5;
      this.AvailableFunds=5
    }
    console.log(event.target.innerHTML)
  }


}

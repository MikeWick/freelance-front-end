import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(4, 'Abc Company', 'http://portfolio.mikewickert.com', 'Ruby on Rails', 
  150, 120, 15, 'mike@gmail.com')
  proposalTwo: Proposal = new Proposal(8, 'XYZ Company', 'http://portfolio.mikewickert.com', 'Ruby on Rails', 
  150, 120, 15, 'mike@gmail.com')
  proposalThree: Proposal = new Proposal(32, 'Some Company', 'http://portfolio.mikewickert.com', 'Ruby on Rails', 
  150, 120, 15, 'mike@gmail.com')
  
  proposals: Proposal[] = [
  this.proposalOne, 
  this.proposalTwo, 
  this.proposalThree
  ]
}
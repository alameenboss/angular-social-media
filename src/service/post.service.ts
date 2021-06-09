import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  GetPost() {
    return [
      {
        ImageUrl: 'assets/images/resources/us-pic.png',
        Name: 'John Doe',
        PostedTime: '3 min ago',
        Designation: 'Senior Wordpress Developer',
        JobType: 'Full Time',
        Rate: '$30 / hr',
        PostText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
        Technology: ['HTML', 'PHP', 'CSS', 'Javascript', 'Wordpress'],
        Tags: [{ icon: 'assets/images/icon8.png', desc: 'Epic Coder' }, { icon: 'assets/images/icon9.png', desc: 'IndiaBid' }],
        comments: [
          {
            username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago',
            comments: [{ username: 'John Doe', comment: 'Hi John', commenttime: '3 min ago' }]
          },
          { username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago' }
        ]
      },
      {
        ImageUrl: 'assets/images/resources/us-pic.png',
        Name: 'Alameen',
        PostedTime: '3 min ago',
        Designation: 'Senior Wordpress Developer',
        JobType: 'Full Time',
        Rate: '$30 / hr',
        PostText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
        Technology: ['HTML', 'PHP', 'CSS', 'Javascript', 'Wordpress'],
        Tags: [{ icon: 'assets/images/icon8.png', desc: 'Epic Coder' }, { icon: 'assets/images/icon9.png', desc: 'IndiaBid' }],
        comments: [
          {
            username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago',
            comments: [{ username: 'John Doe', comment: 'Hi John', commenttime: '3 min ago' }]
          },
          { username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago' }
        ]
      },
      {
        ImageUrl: 'assets/images/resources/us-pic.png',
        Name: 'Fazur',
        PostedTime: '3 min ago',
        Designation: 'Senior Wordpress Developer',
        JobType: 'Full Time',
        Rate: '$30 / hr',
        PostText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
        Technology: ['HTML', 'PHP', 'CSS', 'Javascript', 'Wordpress'],
        Tags: [{ icon: 'assets/images/icon8.png', desc: 'Epic Coder' }, { icon: 'assets/images/icon9.png', desc: 'IndiaBid' }],
        comments: [
          {
            username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago',
            comments: [{ username: 'John Doe', comment: 'Hi John', commenttime: '3 min ago' }]
          },
          { username: 'John Doe', comment: 'Lorem ipsum dolor sit amet', commenttime: '3 min ago' }
        ]
      }
    ]
  }

}

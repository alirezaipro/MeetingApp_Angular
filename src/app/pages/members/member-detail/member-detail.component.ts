import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberDTO } from 'src/app/dtos/member/MemberDTO';
import { MemberService } from 'src/app/services/member.service';

@Component({
    selector: 'app-member-detail',
    templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.css'],
    standalone: false
})

export class MemberDetailComponent implements OnInit {

  member: MemberDTO;
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();

    // this.galleryOptions = [{
    //   width: '500px',
    //   height: '500px',
    //   imagePercent: 100,
    //   thumbnailsColumns: 4,
    //   imageAnimation: NgxGalleryAnimation.Slide,
    //   preview: false
    // }];

  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }

    return imageUrls;
  }


  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      // this.galleryImages = this.getImages();
    })
  }

}

// export class Quote {
//     id!: number;
//   name!: string;
//   author!: string;
// }
export class Quote {
  public showAuthor: boolean;
  constructor(public id: number,public name: string,public author: string,  public completeDate: Date){
    this.showAuthor=false;
  }
}

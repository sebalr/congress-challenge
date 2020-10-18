import { ICongressMember } from 'src/app/shared/interfaces/congress-member.interface';

export class CongressMemberModel {

  public id: string;
  public title: string;
  public short_title: string;
  public api_uri: string;
  public first_name: string;
  public middle_name: string;
  public last_name: string;
  public suffix: string;
  public date_of_birth: string;
  public gender: string;
  public party: string;
  public leadership_role: string;
  public twitter_account: string;
  public facebook_account: string;
  public youtube_account: string;
  public govtrack_id: string;
  public cspan_id: string;
  public votesmart_id: string;
  public icpsr_id: string;
  public crp_id: string;
  public google_entity_id: string;
  public fec_candidate_id: string;
  public url: string;
  public rss_url: string;
  public contact_form: string;
  public in_office: boolean;
  public cook_pvi?: any;
  public dw_nominate?: number;
  public ideal_point?: any;
  public seniority: string;
  public next_election: string;
  public total_votes: number;
  public missed_votes: number;
  public total_present: number;
  public last_updated: string;
  public ocd_id: string;
  public office: string;
  public phone: string;
  public fax: string;
  public state: string;
  public senate_class: string;
  public state_rank: string;
  public lis_id: string;
  public missed_votes_pct: number;
  public votes_with_party_pct: number;
  public votes_against_party_pct: number;

  constructor() { }

  public init(data: ICongressMember) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        this[key] = value;
      }
    }
  }

  public toString(): string {
    return Object.getOwnPropertyNames(this)
      .map(x => this[x])
      .reduce((acc, prop) => `${acc}${prop}`, '')
      .toLowerCase();
  }

  public fullName(): string {
    return `${this.first_name}${this.middle_name}${this.last_name}`.toLowerCase();
  }
}

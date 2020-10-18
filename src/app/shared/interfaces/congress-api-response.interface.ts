import { ICongressMember } from './congress-member.interface';

export interface ICongressMembersResponse {
  status: string;
  copyright: string;
  results: ICongressMembersResult[];
}

export interface ICongressMembersResult {
  congress: string;
  chamber: string;
  num_results: number;
  offset: number;
  members: ICongressMember[];
}

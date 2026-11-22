type Comparators =
  | 'LessThan'
  | 'LessThanOrEqualTo'
  | 'EqualTo'
  | 'GreaterThanOrEqualTo'
  | 'GreaterThan'
type PartyVoteResultViewModel = {
  partyName?: (string | null) | undefined
  voteCount?: number | undefined
}
type DivisionGroupByPartyViewModel = {
  content?: (PartyVoteResultViewModel[] | null) | undefined
  contentCount?: number | undefined
  date?: string | undefined
  divisionId?: number | undefined
  notContent?: (PartyVoteResultViewModel[] | null) | undefined
  notContentCount?: number | undefined
  number?: number | undefined
  title?: (string | null) | undefined
}
type MemberViewModel = {
  listAs?: (string | null) | undefined
  memberFrom?: (string | null) | undefined
  memberId?: number | undefined
  name?: (string | null) | undefined
  party?: (string | null) | undefined
  partyAbbreviation?: (string | null) | undefined
  partyColour?: (string | null) | undefined
  partyIsMainParty?: boolean | undefined
}
type DivisionViewModel = {
  amendmentMotionNotes?: (string | null) | undefined
  authoritativeContentCount?: number | undefined
  authoritativeNotContentCount?: number | undefined
  contentTellers?: (MemberViewModel[] | null) | undefined
  contents?: (MemberViewModel[] | null) | undefined
  date?: string | undefined
  divisionHadTellers?: boolean | undefined
  divisionId?: number | undefined
  divisionWasExclusivelyRemote?: boolean | undefined
  isGovernmentContent?: boolean | undefined
  isGovernmentWin?: (boolean | null) | undefined
  isHouse?: (boolean | null) | undefined
  isWhipped?: boolean | undefined
  memberContentCount?: number | undefined
  memberNotContentCount?: number | undefined
  notContentTellers?: (MemberViewModel[] | null) | undefined
  notContents?: (MemberViewModel[] | null) | undefined
  notes?: (string | null) | undefined
  number?: number | undefined
  remoteVotingEnd?: (string | null) | undefined
  remoteVotingStart?: (string | null) | undefined
  sponsoringMemberId?: (number | null) | undefined
  tellerContentCount?: number | undefined
  tellerNotContentCount?: number | undefined
  title?: (string | null) | undefined
}
type MemberVotingRecordViewModel = {
  memberId?: number | undefined
  memberWasContent?: boolean | undefined
  memberWasTeller?: boolean | undefined
  publishedDivision?: DivisionViewModel | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data/Divisions/groupedbyparty': {
      $get:
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: DivisionGroupByPartyViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: DivisionGroupByPartyViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: DivisionGroupByPartyViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/data/Divisions/membervoting': {
      $get:
        | {
            input: {
              query: {
                MemberId: number
                SearchTerm?: (string | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberVotingRecordViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                MemberId: number
                SearchTerm?: (string | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberVotingRecordViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MemberId: number
                SearchTerm?: (string | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberVotingRecordViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MemberId: number
                SearchTerm?: (string | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                MemberId: number
                SearchTerm?: (string | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/data/Divisions/search': {
      $get:
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: DivisionViewModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: DivisionViewModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: DivisionViewModel[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/data/Divisions/searchTotalResults': {
      $get:
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: (string | null) | undefined
                MemberId?: (number | null) | undefined
                IncludeWhenMemberWasTeller?: (boolean | null) | undefined
                StartDate?: (string | null) | undefined
                EndDate?: (string | null) | undefined
                DivisionNumber?: (number | null) | undefined
                'TotalVotesCast.Comparator'?: Comparators | undefined
                'TotalVotesCast.ValueToCompare'?: number | undefined
                'Majority.Comparator'?: Comparators | undefined
                'Majority.ValueToCompare'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/data/Divisions/:divisionId': {
      $get:
        | {
            input: { param: { divisionId: number } }
            output: DivisionViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { divisionId: number } }
            output: DivisionViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { divisionId: number } }
            output: DivisionViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { divisionId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { divisionId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { divisionId: number } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes

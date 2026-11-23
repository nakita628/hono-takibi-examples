type LocationType = 0 | 1 | 2 | 3
type Link = {
  href?: (string | null) | undefined
  method?: (string | null) | undefined
  rel?: (string | null) | undefined
}
type LocationContext = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: LocationType | undefined
  typeName?: (string | null) | undefined
}
type GovernmentType = 0 | 1 | 2 | 3
type Party = {
  abbreviation?: (string | null) | undefined
  backgroundColour?: (string | null) | undefined
  foregroundColour?: (string | null) | undefined
  governmentType?: GovernmentType | undefined
  id?: number | undefined
  isIndependentParty?: boolean | undefined
  isLordsMainParty?: boolean | undefined
  isLordsSpiritualParty?: boolean | undefined
  name?: (string | null) | undefined
}
type PartySeatCount = {
  female?: (number | null) | undefined
  male?: (number | null) | undefined
  nonBinary?: (number | null) | undefined
  party?: Party | undefined
  total?: number | undefined
}
type Location = {
  childContexts?: (LocationContext[] | null) | undefined
  context?: LocationContext | undefined
  parentContext?: LocationContext | undefined
  stateOfTheParties?: (PartySeatCount[] | null) | undefined
}
type LocationItem = { links?: (Link[] | null) | undefined; value?: Location | undefined }
type House = 1 | 2
type MemberStatus = 0 | 1 | 2 | 3
type HouseMembershipStatus = {
  status?: MemberStatus | undefined
  statusDescription?: (string | null) | undefined
  statusId?: (number | null) | undefined
  statusIsActive?: boolean | undefined
  statusNotes?: (string | null) | undefined
  statusStartDate?: (string | null) | undefined
}
type HouseMembership = {
  house?: House | undefined
  membershipEndDate?: (string | null) | undefined
  membershipEndReason?: (string | null) | undefined
  membershipEndReasonId?: (number | null) | undefined
  membershipEndReasonNotes?: (string | null) | undefined
  membershipFrom?: (string | null) | undefined
  membershipFromId?: (number | null) | undefined
  membershipStartDate?: (string | null) | undefined
  membershipStatus?: HouseMembershipStatus | undefined
}
type Member = {
  gender?: (string | null) | undefined
  id?: number | undefined
  latestHouseMembership?: HouseMembership | undefined
  latestParty?: Party | undefined
  nameAddressAs?: (string | null) | undefined
  nameDisplayAs?: (string | null) | undefined
  nameFullTitle?: (string | null) | undefined
  nameListAs?: (string | null) | undefined
  thumbnailUrl?: (string | null) | undefined
}
type MemberItem = { links?: (Link[] | null) | undefined; value?: Member | undefined }
type ConstituencyRepresentation = {
  member?: MemberItem | undefined
  representation?: HouseMembership | undefined
}
type Constituency = {
  currentRepresentation?: ConstituencyRepresentation | undefined
  endDate?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  startDate?: string | undefined
}
type ConstituencyItem = { links?: (Link[] | null) | undefined; value?: Constituency | undefined }
type ConstituencyMembersServiceSearchResult = {
  items?: (ConstituencyItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type ElectionCandidate = {
  memberId?: (number | null) | undefined
  name?: (string | null) | undefined
  party?: Party | undefined
  rankOrder?: (number | null) | undefined
  resultChange?: (string | null) | undefined
  voteShare?: (number | null) | undefined
  votes?: number | undefined
}
type ElectionResult = {
  candidates?: (ElectionCandidate[] | null) | undefined
  constituencyName?: (string | null) | undefined
  electionDate?: string | undefined
  electionId?: number | undefined
  electionTitle?: (string | null) | undefined
  electorate?: number | undefined
  isGeneralElection?: boolean | undefined
  isNotional?: boolean | undefined
  majority?: number | undefined
  result?: (string | null) | undefined
  turnout?: number | undefined
  winningParty?: Party | undefined
}
type ElectionResultItem = {
  links?: (Link[] | null) | undefined
  value?: ElectionResult | undefined
}
type ElectionResultListItem = {
  links?: (Link[] | null) | undefined
  value?: (ElectionResult[] | null) | undefined
}
type StringItem = { links?: (Link[] | null) | undefined; value?: (string | null) | undefined }
type ConstituencyRepresentationListItem = {
  links?: (Link[] | null) | undefined
  value?: (ConstituencyRepresentation[] | null) | undefined
}
type RegisteredInterest = {
  childInterests?: (RegisteredInterest[] | null) | undefined
  createdWhen?: (string | null) | undefined
  deletedWhen?: (string | null) | undefined
  id?: number | undefined
  interest?: (string | null) | undefined
  isCorrection?: boolean | undefined
  lastAmendedWhen?: (string | null) | undefined
}
type RegisteredInterestCategory = {
  id?: number | undefined
  interests?: (RegisteredInterest[] | null) | undefined
  name?: (string | null) | undefined
  sortOrder?: number | undefined
}
type MembersInterests = {
  interestCategories?: (RegisteredInterestCategory[] | null) | undefined
  member?: Member | undefined
}
type MembersInterestsItem = {
  links?: (Link[] | null) | undefined
  value?: MembersInterests | undefined
}
type MembersInterestsMembersServiceSearchResult = {
  items?: (MembersInterestsItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type Staff = {
  details?: (string | null) | undefined
  forename?: (string | null) | undefined
  surname?: (string | null) | undefined
  title?: (string | null) | undefined
}
type MembersStaff = { member?: Member | undefined; staff?: (Staff[] | null) | undefined }
type MembersStaffItem = { links?: (Link[] | null) | undefined; value?: MembersStaff | undefined }
type MembersStaffMembersServiceSearchResult = {
  items?: (MembersStaffItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type MemberName = {
  endDate?: (string | null) | undefined
  nameAddressAs?: (string | null) | undefined
  nameDisplayAs?: (string | null) | undefined
  nameFullTitle?: (string | null) | undefined
  nameListAs?: (string | null) | undefined
  startDate?: string | undefined
}
type MemberParty = {
  endDate?: (string | null) | undefined
  party?: Party | undefined
  startDate?: string | undefined
}
type MemberHistory = {
  houseMembershipHistory?: (HouseMembership[] | null) | undefined
  id?: number | undefined
  nameHistory?: (MemberName[] | null) | undefined
  partyHistory?: (MemberParty[] | null) | undefined
  thumbnailUrl?: (string | null) | undefined
}
type MemberHistoryItem = { links?: (Link[] | null) | undefined; value?: MemberHistory | undefined }
type MemberMembersServiceSearchResult = {
  items?: (MemberItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type BiographyItem = {
  additionalInfo?: (string | null) | undefined
  additionalInfoLink?: (string | null) | undefined
  endDate?: (string | null) | undefined
  house?: House | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  startDate?: string | undefined
}
type MemberBiography = {
  committeeMemberships?: (BiographyItem[] | null) | undefined
  electionsContested?: (BiographyItem[] | null) | undefined
  governmentPosts?: (BiographyItem[] | null) | undefined
  houseMemberships?: (BiographyItem[] | null) | undefined
  oppositionPosts?: (BiographyItem[] | null) | undefined
  otherPosts?: (BiographyItem[] | null) | undefined
  partyAffiliations?: (BiographyItem[] | null) | undefined
  representations?: (BiographyItem[] | null) | undefined
}
type MemberBiographyItem = {
  links?: (Link[] | null) | undefined
  value?: MemberBiography | undefined
}
type ContactInformation = {
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  isPreferred?: boolean | undefined
  isWebAddress?: boolean | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  line5?: (string | null) | undefined
  notes?: (string | null) | undefined
  phone?: (string | null) | undefined
  postcode?: (string | null) | undefined
  type?: (string | null) | undefined
  typeDescription?: (string | null) | undefined
  typeId?: number | undefined
}
type ContactInformationListItem = {
  links?: (Link[] | null) | undefined
  value?: (ContactInformation[] | null) | undefined
}
type DebateContribution = {
  answerCount?: number | undefined
  debateId?: number | undefined
  debateTitle?: (string | null) | undefined
  debateWebsiteId?: (string | null) | undefined
  firstTimecode?: (string | null) | undefined
  house?: (string | null) | undefined
  interventionCount?: number | undefined
  pointsOfOrderCount?: number | undefined
  questionCount?: number | undefined
  section?: (string | null) | undefined
  sittingDate?: string | undefined
  speechCount?: number | undefined
  statementsCount?: number | undefined
  supplementaryQuestionCount?: number | undefined
  totalContributions?: number | undefined
}
type DebateContributionItem = {
  links?: (Link[] | null) | undefined
  value?: DebateContribution | undefined
}
type DebateContributionMembersServiceSearchResult = {
  items?: (DebateContributionItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type EarlyDayMotion = {
  dateTabled?: string | undefined
  id?: number | undefined
  isAmendment?: boolean | undefined
  isPrayer?: boolean | undefined
  number?: (string | null) | undefined
  sponsorsCount?: number | undefined
  title?: (string | null) | undefined
}
type EarlyDayMotionItem = {
  links?: (Link[] | null) | undefined
  value?: EarlyDayMotion | undefined
}
type EarlyDayMotionMembersServiceSearchResult = {
  items?: (EarlyDayMotionItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type BiographyExperience = {
  endMonth?: (number | null) | undefined
  endYear?: (number | null) | undefined
  id?: number | undefined
  organisation?: (string | null) | undefined
  startMonth?: (number | null) | undefined
  startYear?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
  typeId?: number | undefined
}
type BiographyExperienceListItem = {
  links?: (Link[] | null) | undefined
  value?: (BiographyExperience[] | null) | undefined
}
type MemberFocus = { category?: (string | null) | undefined; focus?: (string[] | null) | undefined }
type MemberFocusListItem = {
  links?: (Link[] | null) | undefined
  value?: (MemberFocus[] | null) | undefined
}
type PortraitCropEnum = 0 | 1 | 2 | 3
type RegisteredInterestCategoryListItem = {
  links?: (Link[] | null) | undefined
  value?: (RegisteredInterestCategory[] | null) | undefined
}
type StaffListItem = { links?: (Link[] | null) | undefined; value?: (Staff[] | null) | undefined }
type Vote = {
  actedAsTeller?: boolean | undefined
  date?: string | undefined
  divisionNumber?: number | undefined
  house?: House | undefined
  id?: number | undefined
  inAffirmativeLobby?: boolean | undefined
  numberAgainst?: number | undefined
  numberInFavour?: number | undefined
  title?: (string | null) | undefined
}
type VoteItem = { links?: (Link[] | null) | undefined; value?: Vote | undefined }
type VoteMembersServiceSearchResult = {
  items?: (VoteItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type GovernmentDepartment = {
  id?: number | undefined
  imageUrl?: (string | null) | undefined
  name?: (string | null) | undefined
  url?: (string | null) | undefined
}
type AnsweringBody = {
  department?: GovernmentDepartment | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  shortName?: (string | null) | undefined
  target?: (string | null) | undefined
}
type GroupedQuestion = {
  dateTabled?: string | undefined
  questionUin?: (string | null) | undefined
}
type WrittenQuestion = {
  answerIsCorrection?: (boolean | null) | undefined
  answerIsHolding?: (boolean | null) | undefined
  answerText?: (string | null) | undefined
  answeringBody?: AnsweringBody | undefined
  answeringBodyId?: number | undefined
  answeringMember?: Member | undefined
  answeringMemberId?: (number | null) | undefined
  askingMemberId?: number | undefined
  attachmentCount?: number | undefined
  correctingMember?: Member | undefined
  correctingMemberId?: (number | null) | undefined
  dateAnswered?: (string | null) | undefined
  dateForAnswer?: string | undefined
  dateTabled?: string | undefined
  groupedQuestions?: (string[] | null) | undefined
  groupedQuestionsDates?: (GroupedQuestion[] | null) | undefined
  heading?: (string | null) | undefined
  house?: House | undefined
  id?: number | undefined
  isNamedDay?: boolean | undefined
  isWithdrawn?: boolean | undefined
  memberHasInterest?: boolean | undefined
  questionText?: (string | null) | undefined
  uin?: (string | null) | undefined
}
type WrittenQuestionItem = {
  links?: (Link[] | null) | undefined
  value?: WrittenQuestion | undefined
}
type WrittenQuestionMembersServiceSearchResult = {
  items?: (WrittenQuestionItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type PartyItem = { links?: (Link[] | null) | undefined; value?: Party | undefined }
type PartyMembersServiceSearchResult = {
  items?: (PartyItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type LordsByType = {
  bishop?: number | undefined
  hereditary?: number | undefined
  life?: number | undefined
  party?: Party | undefined
  total?: number | undefined
}
type LordsByTypeItem = { links?: (Link[] | null) | undefined; value?: LordsByType | undefined }
type LordsByTypeMembersServiceSearchResult = {
  items?: (LordsByTypeItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type PartySeatCountItem = {
  links?: (Link[] | null) | undefined
  value?: PartySeatCount | undefined
}
type PartySeatCountMembersServiceSearchResult = {
  items?: (PartySeatCountItem[] | null) | undefined
  links?: (Link[] | null) | undefined
  resultContext?: (string | null) | undefined
  skip?: number | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type PostType = 0 | 1 | 2
type GovernmentOppositionPostHolder = {
  endDate?: (string | null) | undefined
  isPaid?: boolean | undefined
  layingMinisterName?: (string | null) | undefined
  member?: MemberItem | undefined
  startDate?: string | undefined
}
type GovernmentOppositionPost = {
  createdWhen?: string | undefined
  governmentDepartments?: (GovernmentDepartment[] | null) | undefined
  hansardName?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  postHolders?: (GovernmentOppositionPostHolder[] | null) | undefined
  type?: PostType | undefined
}
type GovernmentOppositionPostItem = {
  links?: (Link[] | null) | undefined
  value?: GovernmentOppositionPost | undefined
}
type GenericReferenceData = { description?: (string | null) | undefined; id?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Location/Browse/:locationType/:locationName': {
      $get:
        | {
            input: { param: { locationType: LocationType; locationName: string } }
            output: LocationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { locationType: LocationType; locationName: string } }
            output: LocationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { locationType: LocationType; locationName: string } }
            output: LocationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { locationType: LocationType; locationName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { locationType: LocationType; locationName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Location/Constituency/Search': {
      $get:
        | {
            input: {
              query: {
                searchText?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ConstituencyMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ConstituencyMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ConstituencyMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Location/Constituency/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ConstituencyItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ConstituencyItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ConstituencyItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Location/Constituency/:id/ElectionResult/Latest': {
      $get:
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Location/Constituency/:id/ElectionResult/:electionId': {
      $get:
        | {
            input: { param: { id: number; electionId: number } }
            output: ElectionResultItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; electionId: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; electionId: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; electionId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; electionId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Location/Constituency/:id/ElectionResults': {
      $get:
        | {
            input: { param: { id: number } }
            output: ElectionResultListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Location/Constituency/:id/Geometry': {
      $get:
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Location/Constituency/:id/Representations': {
      $get:
        | {
            input: { param: { id: number } }
            output: ConstituencyRepresentationListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ConstituencyRepresentationListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ConstituencyRepresentationListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Location/Constituency/:id/Synopsis': {
      $get:
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/LordsInterests/Register': {
      $get:
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                page?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: MembersInterestsMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                page?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: MembersInterestsMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                page?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: MembersInterestsMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerm?: string | undefined
                page?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/LordsInterests/Staff': {
      $get:
        | {
            input: { query: { searchTerm?: string | undefined; page?: number | undefined } }
            output: MembersStaffMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { searchTerm?: string | undefined; page?: number | undefined } }
            output: MembersStaffMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { searchTerm?: string | undefined; page?: number | undefined } }
            output: MembersStaffMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { searchTerm?: string | undefined; page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Members/History': {
      $get:
        | {
            input: { query: { ids?: number[] | undefined } }
            output: MemberHistoryItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: number[] | undefined } }
            output: MemberHistoryItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ids?: number[] | undefined } }
            output: MemberHistoryItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ids?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { ids?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/Search': {
      $get:
        | {
            input: {
              query: {
                Name?: string | undefined
                Location?: string | undefined
                PostTitle?: string | undefined
                PartyId?: number | undefined
                House?: House | undefined
                ConstituencyId?: number | undefined
                NameStartsWith?: string | undefined
                Gender?: string | undefined
                MembershipStartedSince?: string | undefined
                'MembershipEnded.MembershipEndedSince'?: string | undefined
                'MembershipEnded.MembershipEndReasonIds'?: number[] | undefined
                'MembershipInDateRange.WasMemberOnOrAfter'?: string | undefined
                'MembershipInDateRange.WasMemberOnOrBefore'?: string | undefined
                'MembershipInDateRange.WasMemberOfHouse'?: House | undefined
                IsEligible?: boolean | undefined
                IsCurrentMember?: boolean | undefined
                PolicyInterestId?: number | undefined
                Experience?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                Location?: string | undefined
                PostTitle?: string | undefined
                PartyId?: number | undefined
                House?: House | undefined
                ConstituencyId?: number | undefined
                NameStartsWith?: string | undefined
                Gender?: string | undefined
                MembershipStartedSince?: string | undefined
                'MembershipEnded.MembershipEndedSince'?: string | undefined
                'MembershipEnded.MembershipEndReasonIds'?: number[] | undefined
                'MembershipInDateRange.WasMemberOnOrAfter'?: string | undefined
                'MembershipInDateRange.WasMemberOnOrBefore'?: string | undefined
                'MembershipInDateRange.WasMemberOfHouse'?: House | undefined
                IsEligible?: boolean | undefined
                IsCurrentMember?: boolean | undefined
                PolicyInterestId?: number | undefined
                Experience?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                Location?: string | undefined
                PostTitle?: string | undefined
                PartyId?: number | undefined
                House?: House | undefined
                ConstituencyId?: number | undefined
                NameStartsWith?: string | undefined
                Gender?: string | undefined
                MembershipStartedSince?: string | undefined
                'MembershipEnded.MembershipEndedSince'?: string | undefined
                'MembershipEnded.MembershipEndReasonIds'?: number[] | undefined
                'MembershipInDateRange.WasMemberOnOrAfter'?: string | undefined
                'MembershipInDateRange.WasMemberOnOrBefore'?: string | undefined
                'MembershipInDateRange.WasMemberOfHouse'?: House | undefined
                IsEligible?: boolean | undefined
                IsCurrentMember?: boolean | undefined
                PolicyInterestId?: number | undefined
                Experience?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                Location?: string | undefined
                PostTitle?: string | undefined
                PartyId?: number | undefined
                House?: House | undefined
                ConstituencyId?: number | undefined
                NameStartsWith?: string | undefined
                Gender?: string | undefined
                MembershipStartedSince?: string | undefined
                'MembershipEnded.MembershipEndedSince'?: string | undefined
                'MembershipEnded.MembershipEndReasonIds'?: number[] | undefined
                'MembershipInDateRange.WasMemberOnOrAfter'?: string | undefined
                'MembershipInDateRange.WasMemberOnOrBefore'?: string | undefined
                'MembershipInDateRange.WasMemberOfHouse'?: House | undefined
                IsEligible?: boolean | undefined
                IsCurrentMember?: boolean | undefined
                PolicyInterestId?: number | undefined
                Experience?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Members/SearchHistorical': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                dateToSearchFor?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                dateToSearchFor?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                dateToSearchFor?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: MemberMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                dateToSearchFor?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Members/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { detailsForDate?: string | undefined } }
            output: MemberItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { detailsForDate?: string | undefined } }
            output: MemberItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { detailsForDate?: string | undefined } }
            output: MemberItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { detailsForDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { detailsForDate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/Biography': {
      $get:
        | {
            input: { param: { id: number } }
            output: MemberBiographyItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MemberBiographyItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MemberBiographyItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Contact': {
      $get:
        | {
            input: { param: { id: number } }
            output: ContactInformationListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ContactInformationListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ContactInformationListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/ContributionSummary': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: DebateContributionMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: DebateContributionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: DebateContributionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/Edms': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: EarlyDayMotionMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: EarlyDayMotionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: EarlyDayMotionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/Experience': {
      $get:
        | {
            input: { param: { id: number } }
            output: BiographyExperienceListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BiographyExperienceListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BiographyExperienceListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Focus': {
      $get:
        | {
            input: { param: { id: number } }
            output: MemberFocusListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MemberFocusListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MemberFocusListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/LatestElectionResult': {
      $get:
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ElectionResultItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Portrait': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { cropType?: PortraitCropEnum | undefined; webVersion?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { cropType?: PortraitCropEnum | undefined; webVersion?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & {
              query: { cropType?: PortraitCropEnum | undefined; webVersion?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { cropType?: PortraitCropEnum | undefined; webVersion?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/PortraitUrl': {
      $get:
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/RegisteredInterests': {
      $get:
        | {
            input: { param: { id: number } } & { query: { house?: House | undefined } }
            output: RegisteredInterestCategoryListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { house?: House | undefined } }
            output: RegisteredInterestCategoryListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { house?: House | undefined } }
            output: RegisteredInterestCategoryListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { house?: House | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { house?: House | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/Staff': {
      $get:
        | {
            input: { param: { id: number } }
            output: StaffListItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StaffListItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StaffListItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Synopsis': {
      $get:
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Thumbnail': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/ThumbnailUrl': {
      $get:
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: StringItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Members/:id/Voting': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { house: House; page?: number | undefined }
            }
            output: VoteMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { house: House; page?: number | undefined }
            }
            output: VoteMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { house: House; page?: number | undefined }
            }
            output: VoteMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { house: House; page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { house: House; page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Members/:id/WrittenQuestions': {
      $get:
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: WrittenQuestionMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: WrittenQuestionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: WrittenQuestionMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Parties/GetActive/:house': {
      $get:
        | {
            input: { param: { house: House } }
            output: PartyMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { house: House } }
            output: PartyMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { house: House } }
            output: PartyMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { house: House } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/Parties/LordsByType/:forDate': {
      $get:
        | {
            input: { param: { forDate: string } }
            output: LordsByTypeMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { forDate: string } }
            output: LordsByTypeMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { forDate: string } }
            output: LordsByTypeMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { forDate: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/Parties/StateOfTheParties/:house/:forDate': {
      $get:
        | {
            input: { param: { house: House; forDate: string } }
            output: PartySeatCountMembersServiceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { house: House; forDate: string } }
            output: PartySeatCountMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { house: House; forDate: string } }
            output: PartySeatCountMembersServiceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { house: House; forDate: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Posts/Departments/:type': {
      $get:
        | {
            input: { param: { type: PostType } }
            output: GovernmentDepartment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: PostType } }
            output: GovernmentDepartment[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { type: PostType } }
            output: GovernmentDepartment[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { type: PostType } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Posts/GovernmentPosts': {
      $get:
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Posts/OppositionPosts': {
      $get:
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { departmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Posts/SpeakerAndDeputies/:forDate': {
      $get:
        | {
            input: { param: { forDate: string } }
            output: MemberItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { forDate: string } }
            output: MemberItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { forDate: string } }
            output: MemberItem[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { forDate: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { forDate: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Posts/Spokespersons': {
      $get:
        | {
            input: { query: { partyId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { partyId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { partyId?: number | undefined } }
            output: GovernmentOppositionPostItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { partyId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { partyId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Reference/AnsweringBodies': {
      $get:
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: AnsweringBody[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: AnsweringBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: AnsweringBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Reference/Departments': {
      $get:
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: GovernmentDepartment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: GovernmentDepartment[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: GovernmentDepartment[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id?: number | undefined; nameContains?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Reference/Departments/:id/Logo': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Reference/PolicyInterests': {
      $get:
        | { input: {}; output: GenericReferenceData[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GenericReferenceData[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: GenericReferenceData[]; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes

type Bill = {
  congress?: number | undefined
  latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  updateDateIncludingText?: string | undefined
  url?: string | undefined
}
type Sponsor = {
  bioguideId?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  fullName?: string | undefined
  isByRequest?: string | undefined
  middleName?: string | undefined
  party?: string | undefined
  state?: string | undefined
  url?: string | undefined
}
type BillDetail = {
  actions?: { count?: number | undefined; url?: string | undefined } | undefined
  committees?: { count?: number | undefined; url?: string | undefined } | undefined
  congress?: number | undefined
  introducedDate?: string | undefined
  latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  legislationUrl?: string | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  policyArea?: { name?: string | undefined } | undefined
  relatedBills?: string | undefined
  sponsors?: Sponsor[] | undefined
}
type Actions = {
  actionCode?: string | undefined
  actionDate?: string | undefined
  sourceSystem?: { code?: number | undefined; name?: string | undefined } | undefined
  text?: string | undefined
  type?: string | undefined
}
type Amendments = {
  congress?: number | undefined
  description?: string | undefined
  latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  number?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type Activity = { date?: string | undefined; name?: string | undefined }
type Committee = {
  activities?: Activity[] | undefined
  chamber?: string | undefined
  name?: string | undefined
  systemCode?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type CoSponsor = {
  bioguidId?: string | undefined
  district?: number | undefined
  firstName?: string | undefined
  fullName?: string | undefined
  isOriginalCosponsor?: boolean | undefined
  lastName?: string | undefined
  party?: string | undefined
  sponsorshipDate?: string | undefined
  state?: string | undefined
  url?: string | undefined
}
type RelationshipDetails = { identifiedBy?: string | undefined; type?: string | undefined }
type RelatedBills = {
  congress?: number | undefined
  lastestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  number?: number | undefined
  relationshipDetails?: RelationshipDetails[] | undefined
}
type LegislativeSubjects = { name?: string | undefined; updateDate?: string | undefined }
type PolicyArea = { name?: string | undefined }
type Subjects = {
  legislativeSubjects?: LegislativeSubjects[] | undefined
  policyArea?: PolicyArea | undefined
}
type BillSummariesArray = {
  actionDate?: string | undefined
  actionDesc?: string | undefined
  text?: string | undefined
  updateDate?: string | undefined
  versionCode?: string | undefined
}
type BillSummaries = BillSummariesArray[]
type Formats = { type?: string | undefined; url?: string | undefined }
type TextVersions = {
  date?: string | undefined
  formats?: Formats[] | undefined
  type?: string | undefined
}
type Text = TextVersions[]
type TitlesArray = {
  title?: string | undefined
  updateDate?: string | undefined
  titleType?: string | undefined
  titleTypeCode?: number | undefined
  billTextVersionCode?: string | undefined
  billTextVersionName?: string | undefined
}
type Titles = TitlesArray[]
type Laws = { number?: string | undefined; type?: string | undefined }
type Law = {
  congress?: number | undefined
  latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  laws?: Laws[] | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  updateDateIncludingText?: string | undefined
  url?: string | undefined
}
type CboCost = {
  description?: string | undefined
  pubDate?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type CommitteeReport = { citation?: string | undefined; url?: string | undefined }
type LawNumber = {
  actions?: { count?: number | undefined; url?: string | undefined } | undefined
  cboCostEstimates?: CboCost[] | undefined
  committeeReports?: CommitteeReport[] | undefined
  committees?: { count?: number | undefined; url?: string | undefined } | undefined
  congress?: number | undefined
  constitutionalAuthorityStatementText?: string | undefined
  cosponsors?: { count?: number | undefined; url?: string | undefined } | undefined
  introducedDate?: string | undefined
  latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
  laws?: Laws[] | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  policyArea?: { name?: string | undefined } | undefined
  sponsors?: Sponsor[] | undefined
  subjects?: { count?: number | undefined; url?: string | undefined } | undefined
  summaries?: { count?: number | undefined; url?: string | undefined } | undefined
  textVersions?: { count?: number | undefined; url?: string | undefined } | undefined
  title?: string | undefined
  titles?: { count?: number | undefined; url?: string | undefined } | undefined
  type?: string | undefined
  updateDate?: string | undefined
  updateDateIncludingText?: string | undefined
}
type Amendment = {
  congress?: number | undefined
  description?: string | undefined
  latestAction?:
    | {
        actionDate?: string | undefined
        actionTime?: string | undefined
        text?: string | undefined
      }
    | undefined
  number?: string | undefined
  purpose?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type AmendedBill = {
  congress?: number | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updateDateIncludingText?: string | undefined
  url?: string | undefined
}
type TextVersion = { count?: number | undefined; url?: string | undefined }
type AmendmentNumber = {
  actions?: { count?: number | undefined; url?: string | undefined } | undefined
  amendedBill?: AmendedBill | undefined
  chamber?: string | undefined
  congress?: number | undefined
  number?: string | undefined
  sponsors?: Sponsor[] | undefined
  submittedDate?: string | undefined
  textVersions?: TextVersion | undefined
  type?: string | undefined
  updateDate?: string | undefined
}
type RecordedVote = {
  chamber?: string | undefined
  congress?: number | undefined
  date?: string | undefined
  rollNumber?: number | undefined
  sessionNumber?: number | undefined
  url?: string | undefined
}
type SourceSystem = { code?: number | undefined; name?: string | undefined }
type AmendmentActions = {
  actionDate?: string | undefined
  recordedVotes?: RecordedVote[] | undefined
  sourceSystem?: SourceSystem | undefined
  text?: string | undefined
  type?: string | undefined
}
type AmendmentActions2 = AmendmentActions[]
type AmendmentCosponsors = CoSponsor[]
type AmendmentAmendments = Amendment[]
type AmendmentText = TextVersions[]
type SummaryBill = {
  congress?: number | undefined
  number?: string | undefined
  originChamber?: string | undefined
  originChamberCode?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updateDateIncludingText?: string | undefined
  url?: string | undefined
}
type SummariesArray = {
  actionDate?: string | undefined
  actionDesc?: string | undefined
  bill?: SummaryBill | undefined
  currentChamber?: string | undefined
  currentChamberCode?: string | undefined
  lastSummaryUpdateDate?: string | undefined
  text?: string | undefined
  updateDate?: string | undefined
  versionCode?: string | undefined
}
type Summaries = SummariesArray[]
type Sessions = {
  chamber?: string | undefined
  number?: number | undefined
  startDate?: string | undefined
  endDate?: string | undefined
}
type Congress = {
  endYear?: string | undefined
  name?: string | undefined
  sessions?: Sessions[] | undefined
  startYear?: string | undefined
}
type Congresses = Congress[]
type MemberTerms = { chamber?: string | undefined; startYear?: number | undefined }
type Members = {
  bioguideId?: string | undefined
  depiction?: { attribution?: string | undefined; imageUrl?: string | undefined } | undefined
  name?: string | undefined
  partyName?: string | undefined
  state?: string | undefined
  terms?: { item?: MemberTerms[] | undefined } | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type Leadership = { congress?: number | undefined; type?: string | undefined }
type PartyHistory = {
  partyAbbreviation?: string | undefined
  partyName?: string | undefined
  startYear?: number | undefined
}
type MemberDetailTerms = {
  chamber?: string | undefined
  congress?: number | undefined
  endYear?: number | undefined
  memberType?: string | undefined
  startYear?: number | undefined
  stateCode?: string | undefined
  stateName?: string | undefined
}
type Member = {
  bioguideId?: string | undefined
  birthYear?: string | undefined
  cosponsoredLegislation?: { count?: number | undefined; url?: string | undefined } | undefined
  depiction?: { attribution?: string | undefined; imageUrl?: string | undefined } | undefined
  directOrderName?: string | undefined
  firstName?: string | undefined
  honorificName?: string | undefined
  invertedOrderName?: string | undefined
  lastname?: string | undefined
  leadership?: Leadership[] | undefined
  partyHistory?: PartyHistory[] | undefined
  sponsoredLegislation?: { count?: number | undefined; url?: string | undefined } | undefined
  state?: string | undefined
  terms?: MemberDetailTerms[] | undefined
  updateDate?: string | undefined
}
type LatestAction = { actionDate?: string | undefined; text?: string | undefined }
type SponsoredLegislation = {
  congress?: number | undefined
  introducedDate?: string | undefined
  latestAction?: LatestAction | undefined
  number?: string | undefined
  policyArea?: PolicyArea | undefined
  title?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type MemberSponsoredLegislation = SponsoredLegislation[]
type HouseVote = {
  congress?: number | undefined
  identifier?: number | undefined
  legislationNumber?: string | undefined
  legislationType?: string | undefined
  legislationUrl?: string | undefined
  result?: string | undefined
  rollCallNumber?: number | undefined
  sessionNumber?: number | undefined
  sourceDataURL?: string | undefined
  startDate?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
  voteType?: string | undefined
}
type Party = { name?: string | undefined; type?: string | undefined }
type VoteParty = {
  nayTotal?: number | undefined
  notVotingTotal?: number | undefined
  presentTotal?: number | undefined
  voteParty?: string | undefined
  yeaTotal?: number | undefined
  party?: Party | undefined
}
type HouseVoteNumber = {
  congress?: number | undefined
  identifier?: number | undefined
  legislationNumber?: string | undefined
  legislationType?: string | undefined
  legislationUrl?: string | undefined
  result?: string | undefined
  rollCallNumber?: number | undefined
  sessionNumber?: number | undefined
  sourceDataURL?: string | undefined
  startDate?: string | undefined
  updateDate?: string | undefined
  voteType?: string | undefined
  votePartyTotal?: VoteParty[] | undefined
  voteQuestion?: string | undefined
}
type HouseVoteResults = {
  bioguideID?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  voteCast?: string | undefined
  voteParty?: string | undefined
  voteState?: string | undefined
}
type HouseVoteMembers = {
  congress?: number | undefined
  identifier?: number | undefined
  legislationNumber?: string | undefined
  legislationType?: string | undefined
  legislationUrl?: string | undefined
  result?: string | undefined
  rollCallNumber?: number | undefined
  sessionNumber?: number | undefined
  sourceDataURL?: string | undefined
  startDate?: string | undefined
  updateDate?: string | undefined
  voteType?: string | undefined
  results?: HouseVoteResults[] | undefined
  voteQuestion?: string | undefined
}
type Parentcommittee = {
  name?: string | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type Subcommittees = {
  name?: string | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type Committees = {
  chamber?: string | undefined
  committeeTypeCode?: string | undefined
  updateDate?: string | undefined
  name?: string | undefined
  parent?: Parentcommittee | undefined
  subcommittees?: Subcommittees[] | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type CommitteeHistory = {
  libraryOfCongressName?: string | undefined
  officialName?: string | undefined
  startDate?: string | undefined
  updateDate?: string | undefined
  endDate?: string | undefined
}
type CommitteeDetail = {
  bills?: { count?: number | undefined; url?: string | undefined } | undefined
  communications?: { count?: number | undefined; url?: string | undefined } | undefined
  history?: CommitteeHistory[] | undefined
  isCurrent?: boolean | undefined
  reports?: { count?: number | undefined; url?: string | undefined } | undefined
  subcommittees?: Subcommittees[] | undefined
  systemCode?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
}
type CommitteeBill = {
  actionDate?: string | undefined
  congress?: number | undefined
  number?: string | undefined
  relationshipType?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type CommitteeBills = {
  bills?: CommitteeBill[] | undefined
  count?: number | undefined
  url?: string | undefined
}
type CommitteeReports = {
  chamber?: string | undefined
  citation?: string | undefined
  congress?: number | undefined
  number?: number | undefined
  part?: number | undefined
  type?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type CommitteeReports2 = CommitteeReports[]
type NominationType = { isCivilian?: boolean | undefined; isMilitary?: boolean | undefined }
type CommitteeNominations = {
  citation?: string | undefined
  congress?: number | undefined
  description?: string | undefined
  latestAction?: LatestAction | undefined
  nominationType?: NominationType | undefined
  number?: number | undefined
  partNumber?: string | undefined
  receivedDate?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type CommitteeNominations2 = CommitteeNominations[]
type CommitteeHouseCommunication = {
  communicationType?: { code?: string | undefined; name?: string | undefined } | undefined
  congress?: number | undefined
  number?: number | undefined
  referralDate?: string | undefined
  updateDate?: string | undefined
  chamber?: string | undefined
  url?: string | undefined
}
type CommitteeSenateCommunication = {
  communicationType?: { code?: string | undefined; name?: string | undefined } | undefined
  congress?: number | undefined
  number?: number | undefined
  referralDate?: string | undefined
  updateDate?: string | undefined
  chamber?: string | undefined
  url?: string | undefined
}
type AssociatedBill = {
  congress?: number | undefined
  number?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type CommitteeReportsNumber = {
  chamber?: string | undefined
  citation?: string | undefined
  congress?: number | undefined
  number?: number | undefined
  part?: number | undefined
  type?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
  associatedBill?: AssociatedBill[] | undefined
  isConferenceReport?: boolean | undefined
  issueDate?: string | undefined
  reportType?: string | undefined
  sessionNumber?: number | undefined
  text?: { count?: number | undefined; url?: string | undefined } | undefined
  title?: string | undefined
}[]
type Committeereportsformats = {
  isErrata?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type CommitteeReportsText = Committeereportsformats[]
type CommitteePrints = {
  chamber?: string | undefined
  congress?: number | undefined
  jacketNumber?: number | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type CommitteePrint = CommitteePrints[]
type CommitteePrintCommittees = {
  name?: string | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type CommitteePrintDetail = {
  associatedBills?: AssociatedBill[] | undefined
  chamber?: string | undefined
  citation?: string | undefined
  committees?: CommitteePrintCommittees[] | undefined
  congress?: number | undefined
  jacketNumber?: number | undefined
  text?: { count?: number | undefined; url?: string | undefined } | undefined
  number?: string | undefined
  title?: string | undefined
  updateDate?: string | undefined
}
type CommitteePrintText = { type?: string | undefined; url?: string | undefined }
type CommitteePrintDetailText = CommitteePrintText[]
type CommitteeMeetings = {
  chamber?: string | undefined
  congress?: number | undefined
  eventid?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type CommitteeMeeting = CommitteeMeetings[]
type AssociatedHearingTranscript = { jacketNumber?: number | undefined; url?: string | undefined }
type Meetingdocument = {
  description?: string | undefined
  documentType?: string | undefined
  format?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type AssociatedNomination = {
  congress?: number | undefined
  number?: number | undefined
  part?: string | undefined
  url?: string | undefined
}
type AssociatedTreaty = {
  congress?: number | undefined
  number?: number | undefined
  url?: string | undefined
}
type RelatedItem = {
  bills?: AssociatedBill[] | undefined
  nominations?: AssociatedNomination[] | undefined
  treaties?: AssociatedTreaty[] | undefined
}
type Video = { name?: string | undefined; url?: string | undefined }
type WitnessDocument = {
  documentType?: string | undefined
  format?: string | undefined
  url?: string | undefined
}
type Witness = {
  name?: string | undefined
  organization?: string | undefined
  position?: string | undefined
}
type CommitteeMeetingDetail = {
  chamber?: string | undefined
  committees?: Subcommittees[] | undefined
  congress?: number | undefined
  date?: string | undefined
  eventid?: string | undefined
  hearingTranscript?: AssociatedHearingTranscript[] | undefined
  location?: { building?: string | undefined; room?: string | undefined } | undefined
  meetingDocuments?: Meetingdocument[] | undefined
  meetingStatus?: 'Canceled' | 'Draft' | 'Postponed' | 'Rescheduled' | 'Scheduled' | undefined
  relatedItems?: RelatedItem[] | undefined
  title?: string | undefined
  type?: string | undefined
  updateDate?: string | undefined
  videos?: Video[] | undefined
  witnessDocuments?: WitnessDocument[] | undefined
  witnesses?: Witness[] | undefined
}
type Hearing = {
  chamber?: string | undefined
  congress?: number | undefined
  jacketNumber?: number | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type Hearings = Hearing[]
type AssociatedMeeting = { eventId?: string | undefined; url?: string | undefined }
type HearingDetail = {
  associatedMeeting?: AssociatedMeeting | undefined
  chamber?: string | undefined
  citation?: string | undefined
  committees?: Subcommittees[] | undefined
  congress?: number | undefined
  dates?: string[] | undefined
  formats?: Formats[] | undefined
  jacketNumber?: number | undefined
  libraryOfCongressidentifier?: string | undefined
  title?: string | undefined
  updateDate?: string | undefined
}
type Issues = {
  Congress?: string | undefined
  Id?: number | undefined
  Issue?: string | undefined
  Links?:
    | {
        Digest?:
          | {
              Label?: string | undefined
              Ordinal?: number | undefined
              PDF?: { Part?: string | undefined; Url?: string | undefined }[] | undefined
            }
          | undefined
        FullRecord?:
          | {
              Label?: string | undefined
              Ordinal?: number | undefined
              PDF?: { Part?: string | undefined; Url?: string | undefined }[] | undefined
            }
          | undefined
        House?:
          | {
              Label?: string | undefined
              Ordinal?: number | undefined
              PDF?: { Part?: string | undefined; Url?: string | undefined }[] | undefined
            }
          | undefined
        Remarks?:
          | {
              Label?: string | undefined
              Ordinal?: number | undefined
              PDF?: { Part?: string | undefined; Url?: string | undefined }[] | undefined
            }
          | undefined
        Senate?:
          | {
              Label?: string | undefined
              Ordinal?: number | undefined
              PDF?: { Part?: string | undefined; Url?: string | undefined }[] | undefined
            }
          | undefined
      }
    | undefined
  PublishDate?: string | undefined
  Session?: string | undefined
  Volume?: string | undefined
}
type CongressionalRecord = { IndexStart?: number | undefined; Issues?: Issues[] | undefined }
type DailyCongressionalRecord = {
  congress?: string | undefined
  issueDate?: string | undefined
  issueNumber?: string | undefined
  sessionNumber?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
  volumeNumber?: string | undefined
}
type DailyCongressionalRecord2 = DailyCongressionalRecord[]
type FullIssue = {
  articles?: { count?: number | undefined; url?: string | undefined } | undefined
  entireIssue?:
    | { part?: string | undefined; type?: string | undefined; url?: string | undefined }[]
    | undefined
  sections?:
    | {
        endPage?: string | undefined
        name?: string | undefined
        startPage?: string | undefined
        text?: { type?: string | undefined; url?: string | undefined }[] | undefined
      }[]
    | undefined
}
type DailyCongressionalRecordIssue = {
  issue?:
    | {
        congress?: number | undefined
        fullIssue?: FullIssue | undefined
        issueDate?: string | undefined
        issueNumber?: string | undefined
        sessionNumber?: number | undefined
        updateDate?: string | undefined
        url?: string | undefined
        volumeNumber?: number | undefined
      }
    | undefined
}
type SectionArticle = {
  endPage?: string | undefined
  startPage?: string | undefined
  text?: { type?: string | undefined; url?: string | undefined }[] | undefined
  title?: string | undefined
}
type Article = { name?: string | undefined; sectionArticles?: SectionArticle[] | undefined }
type DailyCongressionalRecordArticles = { articles?: Article[] | undefined }
type BoundCongressionalRecord = {
  congress?: number | undefined
  date?: string | undefined
  sessionNumber?: number | undefined
  updateDate?: string | undefined
  url?: string | undefined
  volumeNumber?: number | undefined
}
type BoundCongressionalRecord2 = {
  boundCongressionalRecord?: BoundCongressionalRecord[] | undefined
}
type CommunicationType = { code?: string | undefined; name?: string | undefined }
type HouseCommunication = {
  chamber?: string | undefined
  communicationType?: CommunicationType | undefined
  congressNumber?: number | undefined
  number?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type HouseCommunications = { houseCommunications?: HouseCommunication[] | undefined }
type HouseCommunicationTypeNumber = {
  abstract?: string | undefined
  chamber?: string | undefined
  committees?:
    | {
        name?: string | undefined
        systemCode?: string | undefined
        url?: string | undefined
        referralDate?: string | undefined
      }[]
    | undefined
  communicationType?: CommunicationType | undefined
  congress?: number | undefined
  congressionalRecordDate?: string | undefined
  isRulemaking?: string | undefined
  legalAuthority?: string | undefined
  matchingRequirements?: { number?: number | undefined; url?: string | undefined }[] | undefined
  number?: number | undefined
  reportNature?: string | undefined
  sessionNumber?: number | undefined
  submittingAgency?: string | undefined
  submittingOfficial?: string | undefined
  updateDate?: string | undefined
}
type HouseRequirement = {
  number?: number | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type HouseRequirements = { houseRequirements?: HouseRequirement[] | undefined }
type MatchCommunication = { count?: number | undefined; url?: string | undefined }
type HouseRequirement2 = {
  houseRequirement?:
    | {
        activeRecord?: boolean | undefined
        frequency?: string | undefined
        legalAuthority?: string | undefined
        matchingCommunications?: MatchCommunication | undefined
        nature?: string | undefined
        number?: number | undefined
        parentAgency?: string | undefined
        submittingAgency?: string | undefined
        updateDate?: string | undefined
      }
    | undefined
}
type MatchCommunications = {
  chamber?: string | undefined
  communicationType?: CommunicationType | undefined
  congress?: number | undefined
  number?: number | undefined
  url?: string | undefined
}
type MatchCommunications2 = { matchCommunications?: MatchCommunications[] | undefined }
type SenateCommunication = {
  chamber?: string | undefined
  communicationType?: CommunicationType | undefined
  congress?: number | undefined
  number?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type SenateCommunications = { senateCommunications?: SenateCommunication[] | undefined }
type SenateCommunicationTypeNumber = {
  abstract?: string | undefined
  chamber?: string | undefined
  committees?:
    | {
        name?: string | undefined
        systemCode?: string | undefined
        url?: string | undefined
        referralDate?: string | undefined
      }[]
    | undefined
  congress?: number | undefined
  congressionalRecordDate?: string | undefined
  number?: number | undefined
  sessionNumber?: number | undefined
  updateDate?: string | undefined
}
type LatestNominationAction = { actionDate?: string | undefined; text?: string | undefined }
type Nomination = {
  citation?: string | undefined
  congress?: number | undefined
  description?: string | undefined
  latestAction?: LatestNominationAction | undefined
  nominationType?: NominationType | undefined
  number?: number | undefined
  organization?: string | undefined
  partNumber?: string | undefined
  receivedDate?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type Nominations = { nominations?: Nomination[] | undefined }
type Nominee = {
  nomineeCount?: number | undefined
  ordinal?: number | undefined
  organization?: string | undefined
  positionTitle?: string | undefined
  url?: string | undefined
}
type Nomination2 = {
  nomination?:
    | {
        actions?: { count?: number | undefined; url?: string | undefined } | undefined
        authorityDate?: string | undefined
        citation?: string | undefined
        committees?: { count?: number | undefined; url?: string | undefined } | undefined
        congress?: number | undefined
        description?: string | undefined
        hearings?: { count?: number | undefined; url?: string | undefined } | undefined
        latestAction?: { actionDate?: string | undefined; text?: string | undefined } | undefined
        nominationType?: NominationType | undefined
        nominees?: Nominee[] | undefined
        number?: number | undefined
        partNumber?: string | undefined
        receivedDate?: string | undefined
        updateDate?: string | undefined
      }
    | undefined
}
type NominationNominee = { nominees?: Nominee[] | undefined }
type Senatecommittee = {
  name?: string | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type NomineeAction = {
  actionCode?: string | undefined
  actionDate?: string | undefined
  committees?: Senatecommittee[] | undefined
  text?: string | undefined
  type?: string | undefined
}
type NominationActions = { actions?: NomineeAction[] | undefined }
type NominationCommittee = {
  activities?: Activity[] | undefined
  chamber?: string | undefined
  name?: string | undefined
  systemCode?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type NominationCommittees = { committees?: NominationCommittee[] | undefined }
type NominationHearing = {
  chamber?: string | undefined
  citation?: string | undefined
  date?: string | undefined
  jacketNumber?: number | undefined
  number?: number | undefined
}
type NominationHearing2 = { hearings?: NominationHearing[] | undefined }
type Crsreport = {
  contentType?: string | undefined
  id?: string | undefined
  publishDate?: string | undefined
  status?: string | undefined
  title?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
  version?: number | undefined
}
type CrsReport = { CRSReports?: Crsreport[] | undefined }
type Author = { author?: string | undefined }
type Format = { format?: string | undefined; url?: string | undefined }
type RelatedMaterial = {
  URL?: string | undefined
  congress?: number | undefined
  number?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type Topic = { topic?: string | undefined }
type CrsReportDetail = {
  authors?: Author[] | undefined
  contentType?: string | undefined
  formats?: Format[] | undefined
  id?: string | undefined
  publishDate?: string | undefined
  relatedMaterials?: RelatedMaterial[] | undefined
  status?: string | undefined
  summary?: string | undefined
  title?: string | undefined
  topics?: Topic[] | undefined
  updateDate?: string | undefined
  url?: string | undefined
  version?: number | undefined
}
type Treaty = {
  congressReceived?: number | undefined
  congressConsidered?: number | undefined
  number?: number | undefined
  parts?: { [x: string]: unknown } | undefined
  suffix?: string | undefined
  topic?: string | undefined
  transmittedDate?: string | undefined
  updateDate?: string | undefined
  url?: string | undefined
}
type Treaty2 = { treaties?: Treaty[] | undefined }
type TreatyDetail = {
  treaty?:
    | {
        actions?: { count?: number | undefined; url?: string | undefined } | undefined
        congressConsidered?: number | undefined
        congressReceived?: number | undefined
        countriesParties?: { name?: string | undefined }[] | undefined
        inForceDate?: string | undefined
        indexTerms?: { name?: string | undefined }[] | undefined
        number?: number | undefined
        oldNumber?: string | undefined
        oldNumberDisplayName?: string | undefined
        parts?: { [x: string]: unknown } | undefined
        relatedDocs?: { [x: string]: unknown }[] | undefined
        resolutionText?: string | undefined
        suffix?: string | undefined
        titles?: { title?: string | undefined; titleType?: string | undefined }[] | undefined
        topic?: string | undefined
        transmitted?: string | undefined
        updateDate?: string | undefined
      }
    | undefined
}
type TreatyAction = {
  actionCode?: string | undefined
  actionDate?: string | undefined
  committee?: Senatecommittee | undefined
  text?: string | undefined
  type?: string | undefined
}
type TreatyActions = { actions?: TreatyAction[] | undefined }
type TreatySubcommittee = {
  activities?: { date?: string | undefined; name?: string | undefined }[] | undefined
  name?: string | undefined
  systemCode?: string | undefined
  url?: string | undefined
}
type TreatyCommittee = {
  activities?: { date?: string | undefined; name?: string | undefined }[] | undefined
  chamber?: string | undefined
  name?: string | undefined
  subcommittees?: TreatySubcommittee[] | undefined
  systemCode?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type TreatyCommittees = { treatyCommittees?: TreatyCommittee[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bill': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/bill/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Bill
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: BillDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: BillDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/actions': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Actions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Actions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/amendments': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/committees': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Committee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Committee
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/cosponsors': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: CoSponsor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: CoSponsor
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/relatedbills': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RelatedBills
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RelatedBills
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/subjects': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Subjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Subjects
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/summaries': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BillSummaries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BillSummaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/text': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Text
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Text
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bill/:congress/:billType/:billNumber/titles': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Titles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Titles
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
                billNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/law/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Law
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Law
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/law/:congress/:lawType': {
      $get:
        | {
            input: { param: { congress: number; lawType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Law
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; lawType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Law
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; lawType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/law/:congress/:lawType/:lawNumber': {
      $get:
        | {
            input: { param: { congress: number; lawType: string; lawNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: LawNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; lawType: string; lawNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: LawNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; lawType: string; lawNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType': {
      $get:
        | {
            input: { param: { congress: number; amendmentType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; amendmentType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Amendment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; amendmentType: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType/:amendmentNumber': {
      $get:
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: AmendmentNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: AmendmentNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType/:amendmentNumber/actions': {
      $get:
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentActions2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentActions2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType/:amendmentNumber/cosponsors': {
      $get:
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentCosponsors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentCosponsors
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType/:amendmentNumber/amendments': {
      $get:
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentAmendments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentAmendments
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/amendment/:congress/:amendmentType/:amendmentNumber/text': {
      $get:
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentText
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: AmendmentText
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; amendmentType: string; amendmentNumber: string }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/summaries': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/summaries/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/summaries/:congress/:billType': {
      $get:
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: Summaries
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                billType: 'hr' | 's' | 'hjres' | 'sjres' | 'hconres' | 'sconres' | 'hres' | 'sres'
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/congress': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/congress/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/congress/current': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Congresses
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
                currentMember?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/:bioguideId': {
      $get:
        | {
            input: { param: { bioguideId: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: Member
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/:bioguideId/sponsored-legislation': {
      $get:
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MemberSponsoredLegislation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MemberSponsoredLegislation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/:bioguideId/cosponsored-legislation': {
      $get:
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MemberSponsoredLegislation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MemberSponsoredLegislation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bioguideId: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/congress/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/:stateCode': {
      $get:
        | {
            input: { param: { stateCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stateCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: Members
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stateCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                limit?: number | undefined
                currentMember?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/:stateCode/:district': {
      $get:
        | {
            input: { param: { stateCode: string; district: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stateCode: string; district: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: Members
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stateCode: string; district: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/member/congress/:congress/:stateCode/:district': {
      $get:
        | {
            input: { param: { stateCode: string; district: number; congress: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stateCode: string; district: number; congress: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: Members
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stateCode: string; district: number; congress: number } } & {
              query: { format?: 'xml' | 'json' | undefined; currentMember?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-vote': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-vote/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-vote/:congress/:session': {
      $get:
        | {
            input: { param: { congress: number; session: 1 | 2 } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2 } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVote
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2 } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-vote/:congress/:session/:voteNumber': {
      $get:
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVoteNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVoteNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-vote/:congress/:session/:voteNumber/members': {
      $get:
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVoteMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseVoteMembers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; session: 1 | 2; voteNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber': {
      $get:
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:congress/:chamber': {
      $get:
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Committees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode': {
      $get:
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: CommitteeDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: CommitteeDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:congress/:chamber/:committeeCode': {
      $get:
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                committeeCode: string
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                committeeCode: string
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                committeeCode: string
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode/bills': {
      $get:
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeBills
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeBills
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode/reports': {
      $get:
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode/nominations': {
      $get:
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeNominations2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeNominations2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: 'house' | 'senate' | 'joint'; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode/house-communication': {
      $get:
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeHouseCommunication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeHouseCommunication
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee/:chamber/:committeeCode/senate-communication': {
      $get:
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeSenateCommunication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeSenateCommunication
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chamber: string; committeeCode: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-report': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-report/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-report/:congress/:reportType': {
      $get:
        | {
            input: { param: { congress: number; reportType: 'hrpt' | 'srpt' | 'erpt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; reportType: 'hrpt' | 'srpt' | 'erpt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeReports2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; reportType: 'hrpt' | 'srpt' | 'erpt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                conference?: boolean | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-report/:congress/:reportType/:reportNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeReportsNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeReportsNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-report/:congress/:reportType/:reportNumber/text': {
      $get:
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeReportsText
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteeReportsText
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                reportType: 'hrpt' | 'srpt' | 'erpt'
                reportNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-print': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-print/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-print/:congress/:chamber': {
      $get:
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteePrint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-print/:congress/:chamber/:jacketNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteePrintDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteePrintDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-print/:congress/:chamber/:jacketNumber/text': {
      $get:
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteePrintDetailText
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: CommitteePrintDetailText
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-meeting': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-meeting/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-meeting/:congress/:chamber': {
      $get:
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CommitteeMeeting
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/committee-meeting/:congress/:chamber/:eventId': {
      $get:
        | {
            input: {
              param: { congress: number; chamber: 'house' | 'senate' | 'joint'; eventId: string }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeMeetingDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { congress: number; chamber: 'house' | 'senate' | 'joint'; eventId: string }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: CommitteeMeetingDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { congress: number; chamber: 'house' | 'senate' | 'joint'; eventId: string }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/hearing': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/hearing/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/hearing/:congress/:chamber': {
      $get:
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; chamber: 'house' | 'senate' | 'joint' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/hearing/:congress/:chamber/:jacketNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HearingDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HearingDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                chamber: 'house' | 'senate' | 'joint'
                jacketNumber: number
              }
            } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/congressional-record': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                y?: number | undefined
                m?: number | undefined
                d?: number | undefined
              }
            }
            output: CongressionalRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                y?: number | undefined
                m?: number | undefined
                d?: number | undefined
              }
            }
            output: CongressionalRecord
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                y?: number | undefined
                m?: number | undefined
                d?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/daily-congressional-record': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/daily-congressional-record/:volumeNumber': {
      $get:
        | {
            input: { param: { volumeNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/daily-congressional-record/:volumeNumber/:issueNumber': {
      $get:
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecordIssue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecordIssue
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/daily-congressional-record/:volumeNumber/:issueNumber/articles': {
      $get:
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecordArticles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: DailyCongressionalRecordArticles
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { volumeNumber: number; issueNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bound-congressional-record': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bound-congressional-record/:year': {
      $get:
        | {
            input: { param: { year: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bound-congressional-record/:year/:month': {
      $get:
        | {
            input: { param: { year: number; month: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; month: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number; month: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/bound-congressional-record/:year/:month/:day': {
      $get:
        | {
            input: { param: { year: number; month: number; day: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; month: number; day: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: BoundCongressionalRecord2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number; month: number; day: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-communication': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-communication/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-communication/:congress/:communicationType': {
      $get:
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'ml' | 'pm' | 'pt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'ml' | 'pm' | 'pt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'ml' | 'pm' | 'pt' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-communication/:congress/:communicationType/:communicationNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'ml' | 'pm' | 'pt'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: HouseCommunicationTypeNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'ml' | 'pm' | 'pt'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: HouseCommunicationTypeNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'ml' | 'pm' | 'pt'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-requirement': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseRequirements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: HouseRequirements
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-requirement/:requirementNumber': {
      $get:
        | {
            input: { param: { requirementNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: HouseRequirement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requirementNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: HouseRequirement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { requirementNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/house-requirement/:requirementNumber/matching-communications': {
      $get:
        | {
            input: { param: { requirementNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MatchCommunications2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requirementNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: MatchCommunications2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { requirementNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/senate-communication': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/senate-communication/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/senate-communication/:congress/:communicationType': {
      $get:
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'pm' | 'pom' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'pm' | 'pom' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: SenateCommunications
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; communicationType: 'ec' | 'pm' | 'pom' } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/senate-communication/:congress/:communicationType/:communicationNumber': {
      $get:
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'pm' | 'pom'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: SenateCommunicationTypeNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'pm' | 'pom'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: SenateCommunicationTypeNumber
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                congress: number
                communicationType: 'ec' | 'pm' | 'pom'
                communicationNumber: number
              }
            } & { query: { format?: 'xml' | 'json' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Nominations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Nominations
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Nominations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Nominations
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress/:nominationNumber': {
      $get:
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: Nomination2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: Nomination2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress/:nominationNumber/:ordinal': {
      $get:
        | {
            input: { param: { congress: number; nominationNumber: number; ordinal: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationNominee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number; ordinal: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationNominee
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number; ordinal: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress/:nominationNumber/actions': {
      $get:
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationActions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationActions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress/:nominationNumber/committees': {
      $get:
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationCommittees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationCommittees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/nomination/:congress/:nominationNumber/hearings': {
      $get:
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationHearing2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: NominationHearing2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; nominationNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/crsreport': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CrsReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: CrsReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/crsreport/:reportNumber': {
      $get:
        | {
            input: { param: { reportNumber: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: CrsReportDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reportNumber: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: CrsReportDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reportNumber: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty': {
      $get:
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Treaty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Treaty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress': {
      $get:
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Treaty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: Treaty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
                fromDateTime?: string | undefined
                toDateTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress/:treatyNumber': {
      $get:
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: TreatyDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: TreatyDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress/:treatyNumber/:treatySuffix': {
      $get:
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: TreatyDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: TreatyDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: { format?: 'xml' | 'json' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress/:treatyNumber/actions': {
      $get:
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyActions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyActions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress/:treatyNumber/:treatySuffix/actions': {
      $get:
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyActions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyActions
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number; treatySuffix: string } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/treaty/:congress/:treatyNumber/committees': {
      $get:
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyCommittees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TreatyCommittees
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { congress: number; treatyNumber: number } } & {
              query: {
                format?: 'xml' | 'json' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes

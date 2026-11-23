type BillTypeCategory = 'Public' | 'Private' | 'Hybrid'
type BillType = {
  category?: BillTypeCategory | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type BillTypeSearchResult = {
  items?: (BillType[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type House = 'All' | 'Commons' | 'Lords' | 'Unassigned'
type OriginatingHouse = 'All' | 'Commons' | 'Lords'
type BillSortOrder =
  | 'TitleAscending'
  | 'TitleDescending'
  | 'DateUpdatedAscending'
  | 'DateUpdatedDescending'
type BillStageSitting = {
  billId?: number | undefined
  billStageId?: number | undefined
  date?: (string | null) | undefined
  id?: number | undefined
  stageId?: number | undefined
}
type StageSummary = {
  abbreviation?: (string | null) | undefined
  description?: (string | null) | undefined
  house?: House | undefined
  id?: number | undefined
  sessionId?: number | undefined
  sortOrder?: number | undefined
  stageId?: number | undefined
  stageSittings?: (BillStageSitting[] | null) | undefined
}
type BillSummary = {
  billId?: number | undefined
  billTypeId?: number | undefined
  billWithdrawn?: (string | null) | undefined
  currentHouse?: House | undefined
  currentStage?: StageSummary | undefined
  includedSessionIds?: (number[] | null) | undefined
  introducedSessionId?: number | undefined
  isAct?: boolean | undefined
  isDefeated?: boolean | undefined
  lastUpdate?: string | undefined
  originatingHouse?: House | undefined
  shortTitle?: (string | null) | undefined
}
type BillSummarySearchResult = {
  items?: (BillSummary[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type BillAgent = {
  address?: (string | null) | undefined
  email?: (string | null) | undefined
  name?: (string | null) | undefined
  phoneNo?: (string | null) | undefined
  website?: (string | null) | undefined
}
type Promoter = {
  organisationName?: (string | null) | undefined
  organisationUrl?: (string | null) | undefined
}
type Member = {
  house?: House | undefined
  memberFrom?: (string | null) | undefined
  memberId?: number | undefined
  memberPage?: (string | null) | undefined
  memberPhoto?: (string | null) | undefined
  name?: (string | null) | undefined
  party?: (string | null) | undefined
  partyColour?: (string | null) | undefined
}
type Organisation = { name?: (string | null) | undefined; url?: (string | null) | undefined }
type Sponsor = {
  member?: Member | undefined
  organisation?: Organisation | undefined
  sortOrder?: number | undefined
}
type Bill = {
  agent?: BillAgent | undefined
  billId?: number | undefined
  billTypeId?: number | undefined
  billWithdrawn?: (string | null) | undefined
  currentHouse?: House | undefined
  currentStage?: StageSummary | undefined
  includedSessionIds?: (number[] | null) | undefined
  introducedSessionId?: number | undefined
  isAct?: boolean | undefined
  isDefeated?: boolean | undefined
  lastUpdate?: string | undefined
  longTitle?: (string | null) | undefined
  originatingHouse?: House | undefined
  petitionInformation?: (string | null) | undefined
  petitioningPeriod?: (string | null) | undefined
  promoters?: (Promoter[] | null) | undefined
  shortTitle?: (string | null) | undefined
  sponsors?: (Sponsor[] | null) | undefined
  summary?: (string | null) | undefined
}
type NewsArticlesSummary = {
  content?: (string | null) | undefined
  displayDate?: (string | null) | undefined
  id?: number | undefined
  title?: (string | null) | undefined
}
type NewsArticlesSummarySearchResult = {
  items?: (NewsArticlesSummary[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type PublicationDocument = {
  contentLength?: number | undefined
  contentType?: (string | null) | undefined
  filename?: (string | null) | undefined
  id?: number | undefined
}
type PublicationLink = {
  contentType?: (string | null) | undefined
  id?: number | undefined
  title?: (string | null) | undefined
  url?: (string | null) | undefined
}
type PublicationType = {
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type BillPublication = {
  displayDate?: string | undefined
  files?: (PublicationDocument[] | null) | undefined
  house?: House | undefined
  id?: number | undefined
  links?: (PublicationLink[] | null) | undefined
  publicationType?: PublicationType | undefined
  title?: (string | null) | undefined
}
type BillPublicationList = {
  billId?: number | undefined
  publications?: (BillPublication[] | null) | undefined
}
type StageSummarySearchResult = {
  items?: (StageSummary[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type CommitteeHouse = 'Commons' | 'Lords' | 'Joint'
type Committee = {
  category?: (string | null) | undefined
  house?: CommitteeHouse | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  url?: (string | null) | undefined
}
type BillStageDetails = {
  abbreviation?: (string | null) | undefined
  committee?: Committee | undefined
  description?: (string | null) | undefined
  house?: House | undefined
  id?: number | undefined
  lastUpdate?: string | undefined
  nextStageBillStageId?: (number | null) | undefined
  previousStageBillStageId?: (number | null) | undefined
  sessionId?: number | undefined
  sortOrder?: number | undefined
  stageId?: number | undefined
  stageSittings?: (BillStageSitting[] | null) | undefined
}
type Decision = 'All' | 'NoDecision' | 'Withdrawn' | 'Disagreed' | 'NotMoved' | 'Agreed'
type AmendmentType =
  | 'EditLongTitle'
  | 'EditBillBody'
  | 'AddClauseOrSchedule'
  | 'DeleteClauseOrSchedule'
type AmendmentDecision = 'NoDecision' | 'Withdrawn' | 'Disagreed' | 'NotMoved' | 'Agreed'
type AmendmentMember = {
  house?: House | undefined
  isLead?: boolean | undefined
  memberFrom?: (string | null) | undefined
  memberId?: number | undefined
  memberPage?: (string | null) | undefined
  memberPhoto?: (string | null) | undefined
  name?: (string | null) | undefined
  party?: (string | null) | undefined
  partyColour?: (string | null) | undefined
  sortOrder?: number | undefined
}
type AmendmentSearchItem = {
  amendmentId?: number | undefined
  amendmentPosition?: (string | null) | undefined
  amendmentType?: AmendmentType | undefined
  billId?: number | undefined
  billStageId?: number | undefined
  clause?: (number | null) | undefined
  decision?: AmendmentDecision | undefined
  lineNumber?: (number | null) | undefined
  marshalledListText?: (string | null) | undefined
  pageNumber?: (number | null) | undefined
  schedule?: (number | null) | undefined
  sponsors?: (AmendmentMember[] | null) | undefined
  summaryText?: (string[] | null) | undefined
}
type AmendmentSearchItemSearchResult = {
  items?: (AmendmentSearchItem[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type AmendmentLine = {
  hangingIndentation?: (string | null) | undefined
  imageType?: (string | null) | undefined
  indentation?: number | undefined
  isImage?: boolean | undefined
  text?: (string | null) | undefined
}
type AmendmentDetail = {
  amendmentId?: number | undefined
  amendmentLines?: (AmendmentLine[] | null) | undefined
  amendmentNote?: (string | null) | undefined
  amendmentPosition?: (string | null) | undefined
  amendmentType?: AmendmentType | undefined
  billId?: number | undefined
  billStageId?: number | undefined
  clause?: (number | null) | undefined
  decision?: AmendmentDecision | undefined
  explanatoryText?: (string | null) | undefined
  explanatoryTextPrefix?: (string | null) | undefined
  lineNumber?: (number | null) | undefined
  marshalledListText?: (string | null) | undefined
  pageNumber?: (number | null) | undefined
  schedule?: (number | null) | undefined
  sponsors?: (AmendmentMember[] | null) | undefined
}
type Publication = {
  displayDate?: string | undefined
  files?: (PublicationDocument[] | null) | undefined
  id?: number | undefined
  links?: (PublicationLink[] | null) | undefined
  publicationType?: PublicationType | undefined
  title?: (string | null) | undefined
}
type BillStageSittingPublicationList = {
  publications?: (Publication[] | null) | undefined
  sittingId?: number | undefined
}
type BillStagePublicationList = {
  billStageId?: number | undefined
  publications?: (Publication[] | null) | undefined
  sittings?: (BillStageSittingPublicationList[] | null) | undefined
}
type PublicationTypeSearchResult = {
  items?: (PublicationType[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type BillStageSittingSearchResult = {
  items?: (BillStageSitting[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
type StageReference = {
  house?: House | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type StageReferenceSearchResult = {
  items?: (StageReference[] | null) | undefined
  itemsPerPage?: number | undefined
  totalResults?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/BillTypes': {
      $get:
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillTypeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillTypeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillTypeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Category?: BillTypeCategory | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/Bills': {
      $get:
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillSummarySearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                SearchTerm?: string | undefined
                Session?: number | undefined
                CurrentHouse?: House | undefined
                OriginatingHouse?: OriginatingHouse | undefined
                MemberId?: number | undefined
                DepartmentId?: number | undefined
                BillStage?: number[] | undefined
                BillStagesExcluded?: number[] | undefined
                IsDefeated?: boolean | undefined
                IsWithdrawn?: boolean | undefined
                BillType?: number[] | undefined
                SortOrder?: BillSortOrder | undefined
                BillIds?: number[] | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/Bills/:billId': {
      $get:
        | { input: { param: { billId: number } }; output: Bill; outputFormat: 'json'; status: 200 }
        | { input: { param: { billId: number } }; output: Bill; outputFormat: 'text'; status: 200 }
        | { input: { param: { billId: number } }; output: Bill; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/NewsArticles': {
      $get:
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: NewsArticlesSummarySearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: NewsArticlesSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: NewsArticlesSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Publications': {
      $get:
        | {
            input: { param: { billId: number } }
            output: BillPublicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number } }
            output: BillPublicationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } }
            output: BillPublicationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Stages': {
      $get:
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: StageSummarySearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: StageSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: StageSummarySearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number } } & {
              query: { Skip?: number | undefined; Take?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Stages/:billStageId': {
      $get:
        | {
            input: { param: { billId: number; billStageId: number } }
            output: BillStageDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: BillStageDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: BillStageDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Stages/:billStageId/Amendments': {
      $get:
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: AmendmentSearchItemSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: AmendmentSearchItemSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: AmendmentSearchItemSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number } } & {
              query: {
                SearchTerm?: string | undefined
                Decision?: Decision | undefined
                MemberId?: number | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Stages/:billStageId/Amendments/:amendmentId': {
      $get:
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: AmendmentDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: AmendmentDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: AmendmentDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number; billStageId: number; amendmentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Bills/:billId/Stages/:stageId/Publications': {
      $get:
        | {
            input: { param: { billId: number; stageId: number } }
            output: BillStagePublicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: BillStagePublicationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: BillStagePublicationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { billId: number; stageId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/PublicationTypes': {
      $get:
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: PublicationTypeSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: PublicationTypeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: PublicationTypeSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/Publications/:publicationId/Documents/:documentId': {
      $get:
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: PublicationDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: PublicationDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: PublicationDocument
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Publications/:publicationId/Documents/:documentId/Download': {
      $get:
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { publicationId: number; documentId: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Rss/Bills/:id.rss': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Rss/allbills.rss': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/Rss/privatebills.rss': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/Rss/publicbills.rss': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/Sittings': {
      $get:
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillStageSittingSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillStageSittingSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: BillStageSittingSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                House?: House | undefined
                DateFrom?: string | undefined
                DateTo?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/Stages': {
      $get:
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: StageReferenceSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: StageReferenceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: StageReferenceSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { Skip?: number | undefined; Take?: number | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  },
  '/'
>
export default routes

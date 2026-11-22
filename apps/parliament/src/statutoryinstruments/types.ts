type LaidPaperType = 'StatutoryInstrument' | 'ProposedNegative'
type Link = {
  href?: (string | null) | undefined
  method?: (string | null) | undefined
  rel?: (string | null) | undefined
}
type House = 'Commons' | 'Lords'
type BusinessItemHouse = { house?: House | undefined; name?: (string | null) | undefined }
type BusinessItem = {
  businessItemUri?: (string | null) | undefined
  houseId?: (string | null) | undefined
  houseName?: (string | null) | undefined
  houseUri?: (string | null) | undefined
  houses?: (BusinessItemHouse[] | null) | undefined
  id?: (string | null) | undefined
  itemDate?: (string | null) | undefined
  laidPaperType?: LaidPaperType | undefined
  link?: (string | null) | undefined
  procedureStepId?: (string | null) | undefined
  procedureStepUri?: (string | null) | undefined
  sequence?: number | undefined
  statutoryInstrumentId?: (string | null) | undefined
  statutoryInstrumentUri?: (string | null) | undefined
  stepName?: (string | null) | undefined
  workpackageProcedureUri?: (string | null) | undefined
}
type BusinessItemResource = {
  links?: (Link[] | null) | undefined
  value?: BusinessItem | undefined
}
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type LayingBody = {
  departmentId?: (number | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type LayingBodyResource = { links?: (Link[] | null) | undefined; value?: LayingBody | undefined }
type LayingBodyResourceCollection = {
  items?: (LayingBodyResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type Procedure = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ProcedureResource = { links?: (Link[] | null) | undefined; value?: Procedure | undefined }
type ProcedureResourceCollection = {
  items?: (ProcedureResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type ProcedureDetails = {
  description?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ProcedureDetailsResource = {
  links?: (Link[] | null) | undefined
  value?: ProcedureDetails | undefined
}
type Department = {
  departmentId?: (number | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type LaidPaperSummary = { id?: (string | null) | undefined; name?: (string | null) | undefined }
type ProposedNegativeStatutoryInstrument = {
  commonsLayingDate?: (string | null) | undefined
  commonsPublishedDate?: (string | null) | undefined
  departmentId?: (number | null) | undefined
  id?: (string | null) | undefined
  layingBodyDepartment?: Department | undefined
  layingBodyId?: (string | null) | undefined
  layingBodyName?: (string | null) | undefined
  link?: (string | null) | undefined
  lordsLayingDate?: (string | null) | undefined
  lordsPublishedDate?: (string | null) | undefined
  name?: (string | null) | undefined
  procedure?: Procedure | undefined
  procedureName?: (string | null) | undefined
  procedureUri?: (string | null) | undefined
  statutoryInstrument?: LaidPaperSummary | undefined
  statutoryInstrumentPaperId?: (string | null) | undefined
  statutoryInstrumentPaperName?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type ProposedNegativeStatutoryInstrumentResource = {
  links?: (Link[] | null) | undefined
  value?: ProposedNegativeStatutoryInstrument | undefined
}
type ProposedNegativeStatutoryInstrumentResourceCollection = {
  items?: (ProposedNegativeStatutoryInstrumentResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type BusinessItemResourceCollection = {
  items?: (BusinessItemResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type StatutoryInstrumentType =
  | 'DraftAffirmative'
  | 'DraftNegative'
  | 'MadeAffirmative'
  | 'MadeNegative'
type ParliamentaryProcess = 'NotConcluded' | 'Concluded'
type StatutoryInstrument = {
  commonsLayingDate?: (string | null) | undefined
  commonsPublishedDate?: (string | null) | undefined
  departmentId?: (number | null) | undefined
  id?: (string | null) | undefined
  layingBodyDepartment?: Department | undefined
  layingBodyId?: (string | null) | undefined
  layingBodyName?: (string | null) | undefined
  link?: (string | null) | undefined
  lordsLayingDate?: (string | null) | undefined
  lordsPublishedDate?: (string | null) | undefined
  name?: (string | null) | undefined
  paperComingIntoForceDate?: (string | null) | undefined
  paperComingIntoForceNote?: (string | null) | undefined
  paperMadeDate?: string | undefined
  paperNumber?: (number | null) | undefined
  paperPrefix?: (string | null) | undefined
  paperYear?: (string | null) | undefined
  procedure?: Procedure | undefined
  procedureName?: (string | null) | undefined
  procedureUri?: (string | null) | undefined
  proposedNegativeStatutoryInstrument?: LaidPaperSummary | undefined
  proposedNegativeStatutoryInstrumentPaperId?: (string | null) | undefined
  proposedNegativeStatutoryInstrumentPaperName?: (string | null) | undefined
  uri?: (string | null) | undefined
}
type StatutoryInstrumentResource = {
  links?: (Link[] | null) | undefined
  value?: StatutoryInstrument | undefined
}
type StatutoryInstrumentResourceCollection = {
  items?: (StatutoryInstrumentResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/BusinessItem/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: BusinessItemResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: BusinessItemResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: BusinessItemResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { LaidPaper?: LaidPaperType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/LayingBody': {
      $get:
        | { input: {}; output: LayingBodyResourceCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LayingBodyResourceCollection; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LayingBodyResourceCollection; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/Procedure': {
      $get:
        | { input: {}; output: ProcedureResourceCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProcedureResourceCollection; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ProcedureResourceCollection; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/Procedure/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ProcedureDetailsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProcedureDetailsResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProcedureDetailsResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/ProposedNegativeStatutoryInstrument': {
      $get:
        | {
            input: {
              query: {
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProposedNegativeStatutoryInstrumentResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProposedNegativeStatutoryInstrumentResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: ProposedNegativeStatutoryInstrumentResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
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
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
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
                Name?: string | undefined
                RecommendedForProcedureChange?: boolean | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
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
    '/api/v1/ProposedNegativeStatutoryInstrument/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ProposedNegativeStatutoryInstrumentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProposedNegativeStatutoryInstrumentResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProposedNegativeStatutoryInstrumentResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/ProposedNegativeStatutoryInstrument/:id/BusinessItems': {
      $get:
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/StatutoryInstrument': {
      $get:
        | {
            input: {
              query: {
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: StatutoryInstrumentResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: StatutoryInstrumentResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: StatutoryInstrumentResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
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
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
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
                Name?: string | undefined
                StatutoryInstrumentType?: StatutoryInstrumentType | undefined
                ScheduledDebate?: boolean | undefined
                MotionToStop?: boolean | undefined
                ConcernsRaisedByCommittee?: boolean | undefined
                ParliamentaryProcessConcluded?: ParliamentaryProcess | undefined
                DepartmentId?: number | undefined
                LayingBodyId?: string | undefined
                House?: House | undefined
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
    '/api/v1/StatutoryInstrument/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: StatutoryInstrumentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: StatutoryInstrumentResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: StatutoryInstrumentResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/StatutoryInstrument/:id/BusinessItems': {
      $get:
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes

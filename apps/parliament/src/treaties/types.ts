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
  itemDate?: string | undefined
  link?: (string | null) | undefined
  procedureStepId?: (string | null) | undefined
  procedureStepUri?: (string | null) | undefined
  sequence?: number | undefined
  stepName?: (string | null) | undefined
  treatyId?: (string | null) | undefined
  treatyUri?: (string | null) | undefined
  workpackageProcedureUri?: (string | null) | undefined
}
type BusinessItemResource = {
  links?: (Link[] | null) | undefined
  value?: BusinessItem | undefined
}
type GovernmentOrganisation = { id?: number | undefined; name?: (string | null) | undefined }
type GovernmentOrganisationResource = {
  links?: (Link[] | null) | undefined
  value?: GovernmentOrganisation | undefined
}
type GovernmentOrganisationResourceCollection = {
  items?: (GovernmentOrganisationResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type SeriesMembership = { description?: (string | null) | undefined; id?: number | undefined }
type SeriesMembershipResource = {
  links?: (Link[] | null) | undefined
  value?: SeriesMembership | undefined
}
type SeriesMembershipResourceCollection = {
  items?: (SeriesMembershipResource[] | null) | undefined
  itemsPerPage?: number | undefined
  links?: (Link[] | null) | undefined
  totalResults?: number | undefined
}
type SeriesMembershipType =
  | 'CountrySeriesMembership'
  | 'EuropeanUnionSeriesMembership'
  | 'MiscellaneousSeriesMembership'
type ParliamentaryProcess = 'NotConcluded' | 'Concluded'
type Department = { id?: number | undefined; name?: (string | null) | undefined }
type ParliamentaryConclusion = 'NotConcluded' | 'CanRatify' | 'CantRatify'
type TreatySeriesMembership = {
  citation?: (string | null) | undefined
  seriesMembershipType?: SeriesMembershipType | undefined
  uri?: (string | null) | undefined
}
type Treaty = {
  commandPaperNumber?: (number | null) | undefined
  commandPaperPrefix?: (string | null) | undefined
  commonsLayingDate?: string | undefined
  countrySeriesItemCitation?: (string | null) | undefined
  countrySeriesMembership?: (string | null) | undefined
  debateScheduled?: (string | null) | undefined
  europeanSeriesItemCitation?: (string | null) | undefined
  europeanUnionSeriesMembership?: (string | null) | undefined
  id?: (string | null) | undefined
  layingBodyDepartment?: Department | undefined
  layingBodyDepartmentId?: (number | null) | undefined
  layingBodyName?: (string | null) | undefined
  leadDepartment?: Department | undefined
  leadGovernmentOrganisationDepartmentId?: (number | null) | undefined
  leadGovernmentOrganisationGroupName?: (string | null) | undefined
  lordsLayingDate?: string | undefined
  miscSeriesItemCitation?: (string | null) | undefined
  miscellaneousSeriesMembership?: (string | null) | undefined
  name?: (string | null) | undefined
  parliamentaryConclusion?: ParliamentaryConclusion | undefined
  treatySeriesMembership?: TreatySeriesMembership | undefined
  uri?: (string | null) | undefined
  webLink?: (string | null) | undefined
}
type TreatyResource = { links?: (Link[] | null) | undefined; value?: Treaty | undefined }
type TreatyResourceCollection = {
  items?: (TreatyResource[] | null) | undefined
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/BusinessItem/:id': {
      $get:
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResource
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/GovernmentOrganisation': {
      $get:
        | {
            input: {}
            output: GovernmentOrganisationResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: GovernmentOrganisationResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: GovernmentOrganisationResourceCollection
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/SeriesMembership': {
      $get:
        | {
            input: {}
            output: SeriesMembershipResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: SeriesMembershipResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: SeriesMembershipResourceCollection
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Treaty': {
      $get:
        | {
            input: {
              query: {
                SearchText?: (string | null) | undefined
                GovernmentOrganisationId?: (number | null) | undefined
                Series?: SeriesMembershipType | undefined
                ParliamentaryProcess?: ParliamentaryProcess | undefined
                DebateScheduled?: (boolean | null) | undefined
                MotionToNotRatify?: (boolean | null) | undefined
                RecommendedNotRatify?: (boolean | null) | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: TreatyResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                SearchText?: (string | null) | undefined
                GovernmentOrganisationId?: (number | null) | undefined
                Series?: SeriesMembershipType | undefined
                ParliamentaryProcess?: ParliamentaryProcess | undefined
                DebateScheduled?: (boolean | null) | undefined
                MotionToNotRatify?: (boolean | null) | undefined
                RecommendedNotRatify?: (boolean | null) | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: TreatyResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchText?: (string | null) | undefined
                GovernmentOrganisationId?: (number | null) | undefined
                Series?: SeriesMembershipType | undefined
                ParliamentaryProcess?: ParliamentaryProcess | undefined
                DebateScheduled?: (boolean | null) | undefined
                MotionToNotRatify?: (boolean | null) | undefined
                RecommendedNotRatify?: (boolean | null) | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: TreatyResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SearchText?: (string | null) | undefined
                GovernmentOrganisationId?: (number | null) | undefined
                Series?: SeriesMembershipType | undefined
                ParliamentaryProcess?: ParliamentaryProcess | undefined
                DebateScheduled?: (boolean | null) | undefined
                MotionToNotRatify?: (boolean | null) | undefined
                RecommendedNotRatify?: (boolean | null) | undefined
                House?: House | undefined
                Skip?: number | undefined
                Take?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/Treaty/:id': {
      $get:
        | {
            input: { param: { id: string | null } }
            output: TreatyResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: TreatyResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: TreatyResource
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Treaty/:id/BusinessItems': {
      $get:
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResourceCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string | null } }
            output: BusinessItemResourceCollection
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string | null } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes

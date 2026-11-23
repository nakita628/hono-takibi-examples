type Area = {
  Description: string
  Id?: string | undefined
  Name: string
  XLatitude: string
  XLongitude: string
  YLatitude: string
  YLongitude: string
}
type AreaResponse = { areas?: Area[] | undefined; row_count?: number | undefined }
type Qualities = { Date?: string | undefined; Quality?: number | undefined }
type DailyQualityResponse = { Qualities?: Qualities[] | undefined; row_count?: number | undefined }
type OverallQualityResponse = {
  data_quality?: number | undefined
  end_date?: string | undefined
  row_count?: number | undefined
  sites?: string | undefined
  start_date?: string | undefined
}
type Object = { [x: string]: unknown }
type SiteResult = {
  Description?: string | undefined
  Id?: string | undefined
  Latitude?: number | undefined
  Longitude?: number | undefined
  Name?: string | undefined
  Status?: string | undefined
}
type SiteResponse = { row_count?: number | undefined; sites?: SiteResult[] | undefined }
type SiteType = { Description?: string | undefined; Id?: string | undefined }
type SiteTypeResponse = { row_count?: number | undefined; sitetypes?: SiteType[] | undefined }
type Sites = {
  Active?: boolean[] | undefined
  Description?: string[] | undefined
  Id?: string[] | undefined
  Lattitude?: number[] | undefined
  Longitude?: number[] | undefined
  SiteId?: string[] | undefined
}
type SiteTypeLayer = { Sites?: Sites[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v:version/areas': {
      $get:
        | {
            input: { param: { version: string } }
            output: AreaResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v:version/areas/:area_Ids': {
      $get:
        | {
            input: { param: { area_Ids: string; version: string } }
            output: AreaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area_Ids: string; version: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { area_Ids: string; version: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/quality/daily': {
      $get:
        | {
            input: { param: { version: string } } & {
              query: { siteId: string; start_date: string; end_date: string }
            }
            output: DailyQualityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string } } & {
              query: { siteId: string; start_date: string; end_date: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { version: string } } & {
              query: { siteId: string; start_date: string; end_date: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/quality/overall': {
      $get:
        | {
            input: { param: { version: string } } & {
              query: { sites: string; start_date: string; end_date: string }
            }
            output: OverallQualityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string } } & {
              query: { sites: string; start_date: string; end_date: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { version: string } } & {
              query: { sites: string; start_date: string; end_date: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/reports/:report_type': {
      $get:
        | {
            input: { param: { report_type: string; version: string } } & {
              query: {
                sites: string
                start_date: string
                end_date: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_type: string; version: string } } & {
              query: {
                sites: string
                start_date: string
                end_date: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { report_type: string; version: string } } & {
              query: {
                sites: string
                start_date: string
                end_date: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/reports/:start_date/to/:end_date/:report_type': {
      $get:
        | {
            input: {
              param: { report_type: string; start_date: string; end_date: string; version: string }
            } & {
              query: {
                sites: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { report_type: string; start_date: string; end_date: string; version: string }
            } & {
              query: {
                sites: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { report_type: string; start_date: string; end_date: string; version: string }
            } & {
              query: {
                sites: string
                page: number
                page_size: number
                reportSubTypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/sites': {
      $get:
        | {
            input: { param: { version: string } }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v:version/sites/:site_Ids': {
      $get:
        | {
            input: { param: { site_Ids: string; version: string } }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_Ids: string; version: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { site_Ids: string; version: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v:version/sitetypes': {
      $get:
        | {
            input: { param: { version: string } }
            output: SiteTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { version: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v:version/sitetypes/:siteType_Id/sites': {
      $get:
        | {
            input: { param: { siteType_Id: number; version: string } }
            output: SiteTypeLayer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { siteType_Id: number; version: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { siteType_Id: number; version: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { siteType_Id: number; version: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes

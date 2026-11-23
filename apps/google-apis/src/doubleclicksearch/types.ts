type CustomDimension = { name?: string | undefined; value?: string | undefined }
type CustomMetric = { name?: string | undefined; value?: number | undefined }
type Conversion = {
  adGroupId?: string | undefined
  adId?: string | undefined
  advertiserId?: string | undefined
  agencyId?: string | undefined
  attributionModel?: string | undefined
  campaignId?: string | undefined
  channel?: string | undefined
  clickId?: string | undefined
  conversionId?: string | undefined
  conversionModifiedTimestamp?: string | undefined
  conversionTimestamp?: string | undefined
  countMillis?: string | undefined
  criterionId?: string | undefined
  currencyCode?: string | undefined
  customDimension?: CustomDimension[] | undefined
  customMetric?: CustomMetric[] | undefined
  customerId?: string | undefined
  deviceType?: string | undefined
  dsConversionId?: string | undefined
  engineAccountId?: string | undefined
  floodlightOrderId?: string | undefined
  inventoryAccountId?: string | undefined
  productCountry?: string | undefined
  productGroupId?: string | undefined
  productId?: string | undefined
  productLanguage?: string | undefined
  quantityMillis?: string | undefined
  revenueMicros?: string | undefined
  segmentationId?: string | undefined
  segmentationName?: string | undefined
  segmentationType?: string | undefined
  state?: string | undefined
  storeId?: string | undefined
  type?: string | undefined
}
type ConversionList = { conversion?: Conversion[] | undefined; kind?: string | undefined }
type IdMappingFile = { [x: string]: unknown }
type SavedColumn = {
  kind?: string | undefined
  savedColumnName?: string | undefined
  type?: string | undefined
}
type SavedColumnList = { items?: SavedColumn[] | undefined; kind?: string | undefined }
type Availability = {
  advertiserId?: string | undefined
  agencyId?: string | undefined
  availabilityTimestamp?: string | undefined
  customerId?: string | undefined
  segmentationId?: string | undefined
  segmentationName?: string | undefined
  segmentationType?: string | undefined
}
type UpdateAvailabilityRequest = { availabilities?: Availability[] | undefined }
type UpdateAvailabilityResponse = { availabilities?: Availability[] | undefined }
type ReportApiColumnSpec = {
  columnName?: string | undefined
  customDimensionName?: string | undefined
  customMetricName?: string | undefined
  endDate?: string | undefined
  groupByColumn?: boolean | undefined
  headerText?: string | undefined
  platformSource?: string | undefined
  productReportPerspective?: string | undefined
  savedColumnName?: string | undefined
  startDate?: string | undefined
}
type ReportRequest = {
  columns?: ReportApiColumnSpec[] | undefined
  downloadFormat?: string | undefined
  filters?:
    | {
        column?: ReportApiColumnSpec | undefined
        operator?: string | undefined
        values?: { [x: string]: unknown }[] | undefined
      }[]
    | undefined
  includeDeletedEntities?: boolean | undefined
  includeRemovedEntities?: boolean | undefined
  maxRowsPerFile?: number | undefined
  orderBy?:
    | { column?: ReportApiColumnSpec | undefined; sortOrder?: string | undefined }[]
    | undefined
  reportScope?:
    | {
        adGroupId?: string | undefined
        adId?: string | undefined
        advertiserId?: string | undefined
        agencyId?: string | undefined
        campaignId?: string | undefined
        engineAccountId?: string | undefined
        keywordId?: string | undefined
      }
    | undefined
  reportType?: string | undefined
  rowCount?: number | undefined
  startRow?: number | undefined
  statisticsCurrency?: string | undefined
  timeRange?:
    | {
        changedAttributesSinceTimestamp?: string | undefined
        changedMetricsSinceTimestamp?: string | undefined
        endDate?: string | undefined
        startDate?: string | undefined
      }
    | undefined
  verifySingleTimeZone?: boolean | undefined
}
type ReportRow = { [x: string]: { [x: string]: unknown } }
type Report = {
  files?: { byteCount?: string | undefined; url?: string | undefined }[] | undefined
  id?: string | undefined
  isReportReady?: boolean | undefined
  kind?: string | undefined
  request?: ReportRequest | undefined
  rowCount?: number | undefined
  rows?: ReportRow[] | undefined
  statisticsCurrencyCode?: string | undefined
  statisticsTimeZone?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/engine/:engineAccountId/conversion': {
      $get: {
        input: { param: { agencyId: string; advertiserId: string; engineAccountId: string } } & {
          query: {
            endDate: number
            rowCount: number
            startDate: number
            startRow: number
            adGroupId?: string | undefined
            adId?: string | undefined
            campaignId?: string | undefined
            criterionId?: string | undefined
            customerId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ConversionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/idmapping': {
      $get: {
        input: { param: { agencyId: string; advertiserId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: IdMappingFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/savedcolumns': {
      $get: {
        input: { param: { agencyId: string; advertiserId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SavedColumnList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/conversion': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConversionList }
        output: ConversionList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConversionList }
        output: ConversionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/conversion/updateAvailability': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateAvailabilityRequest }
        output: UpdateAvailabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/customer/:customerId/conversion': {
      $get: {
        input: { param: { customerId: string } } & {
          query: {
            endDate: number
            rowCount: number
            startDate: number
            startRow: number
            adGroupId?: string | undefined
            adId?: string | undefined
            advertiserId?: string | undefined
            agencyId?: string | undefined
            campaignId?: string | undefined
            criterionId?: string | undefined
            engineAccountId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ConversionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/reports': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ReportRequest }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/reports/generate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ReportRequest }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/reports/:reportId': {
      $get: {
        input: { param: { reportId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/doubleclicksearch/v2/reports/:reportId/files/:reportFragment': {
      $get: {
        input: { param: { reportId: string; reportFragment: number } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes

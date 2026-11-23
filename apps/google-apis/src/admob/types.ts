type PublisherAccount = {
  currencyCode?: string | undefined
  name?: string | undefined
  publisherId?: string | undefined
  reportingTimeZone?: string | undefined
}
type ListPublisherAccountsResponse = {
  account?: PublisherAccount[] | undefined
  nextPageToken?: string | undefined
}
type AdSource = {
  adSourceId?: string | undefined
  name?: string | undefined
  title?: string | undefined
}
type ListAdSourcesResponse = {
  adSources?: AdSource[] | undefined
  nextPageToken?: string | undefined
}
type AdUnit = {
  adFormat?: string | undefined
  adTypes?: string[] | undefined
  adUnitId?: string | undefined
  appId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type ListAdUnitsResponse = { adUnits?: AdUnit[] | undefined; nextPageToken?: string | undefined }
type AppLinkedAppInfo = { appStoreId?: string | undefined; displayName?: string | undefined }
type AppManualAppInfo = { displayName?: string | undefined }
type App = {
  appApprovalState?:
    | 'APP_APPROVAL_STATE_UNSPECIFIED'
    | 'ACTION_REQUIRED'
    | 'IN_REVIEW'
    | 'APPROVED'
    | undefined
  appId?: string | undefined
  linkedAppInfo?: AppLinkedAppInfo | undefined
  manualAppInfo?: AppManualAppInfo | undefined
  name?: string | undefined
  platform?: string | undefined
}
type ListAppsResponse = { apps?: App[] | undefined; nextPageToken?: string | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type DateRange = { endDate?: Date | undefined; startDate?: Date | undefined }
type StringList = { values?: string[] | undefined }
type MediationReportSpecDimensionFilter = {
  dimension?:
    | 'DIMENSION_UNSPECIFIED'
    | 'DATE'
    | 'MONTH'
    | 'WEEK'
    | 'AD_SOURCE'
    | 'AD_SOURCE_INSTANCE'
    | 'AD_UNIT'
    | 'APP'
    | 'MEDIATION_GROUP'
    | 'COUNTRY'
    | 'FORMAT'
    | 'PLATFORM'
    | 'MOBILE_OS_VERSION'
    | 'GMA_SDK_VERSION'
    | 'APP_VERSION_NAME'
    | 'SERVING_RESTRICTION'
    | undefined
  matchesAny?: StringList | undefined
}
type LocalizationSettings = { currencyCode?: string | undefined; languageCode?: string | undefined }
type MediationReportSpecSortCondition = {
  dimension?:
    | 'DIMENSION_UNSPECIFIED'
    | 'DATE'
    | 'MONTH'
    | 'WEEK'
    | 'AD_SOURCE'
    | 'AD_SOURCE_INSTANCE'
    | 'AD_UNIT'
    | 'APP'
    | 'MEDIATION_GROUP'
    | 'COUNTRY'
    | 'FORMAT'
    | 'PLATFORM'
    | 'MOBILE_OS_VERSION'
    | 'GMA_SDK_VERSION'
    | 'APP_VERSION_NAME'
    | 'SERVING_RESTRICTION'
    | undefined
  metric?:
    | 'METRIC_UNSPECIFIED'
    | 'AD_REQUESTS'
    | 'CLICKS'
    | 'ESTIMATED_EARNINGS'
    | 'IMPRESSIONS'
    | 'IMPRESSION_CTR'
    | 'MATCHED_REQUESTS'
    | 'MATCH_RATE'
    | 'OBSERVED_ECPM'
    | undefined
  order?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
}
type MediationReportSpec = {
  dateRange?: DateRange | undefined
  dimensionFilters?: MediationReportSpecDimensionFilter[] | undefined
  dimensions?:
    | (
        | 'DIMENSION_UNSPECIFIED'
        | 'DATE'
        | 'MONTH'
        | 'WEEK'
        | 'AD_SOURCE'
        | 'AD_SOURCE_INSTANCE'
        | 'AD_UNIT'
        | 'APP'
        | 'MEDIATION_GROUP'
        | 'COUNTRY'
        | 'FORMAT'
        | 'PLATFORM'
        | 'MOBILE_OS_VERSION'
        | 'GMA_SDK_VERSION'
        | 'APP_VERSION_NAME'
        | 'SERVING_RESTRICTION'
      )[]
    | undefined
  localizationSettings?: LocalizationSettings | undefined
  maxReportRows?: number | undefined
  metrics?:
    | (
        | 'METRIC_UNSPECIFIED'
        | 'AD_REQUESTS'
        | 'CLICKS'
        | 'ESTIMATED_EARNINGS'
        | 'IMPRESSIONS'
        | 'IMPRESSION_CTR'
        | 'MATCHED_REQUESTS'
        | 'MATCH_RATE'
        | 'OBSERVED_ECPM'
      )[]
    | undefined
  sortConditions?: MediationReportSpecSortCondition[] | undefined
  timeZone?: string | undefined
}
type GenerateMediationReportRequest = { reportSpec?: MediationReportSpec | undefined }
type ReportWarning = {
  description?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE'
    | 'DATA_DELAYED'
    | 'OTHER'
    | 'REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY'
    | undefined
}
type ReportFooter = {
  matchingRowCount?: string | undefined
  warnings?: ReportWarning[] | undefined
}
type ReportHeader = {
  dateRange?: DateRange | undefined
  localizationSettings?: LocalizationSettings | undefined
  reportingTimeZone?: string | undefined
}
type ReportRowDimensionValue = { displayLabel?: string | undefined; value?: string | undefined }
type ReportRowMetricValue = {
  doubleValue?: number | undefined
  integerValue?: string | undefined
  microsValue?: string | undefined
}
type ReportRow = {
  dimensionValues?: { [x: string]: ReportRowDimensionValue } | undefined
  metricValues?: { [x: string]: ReportRowMetricValue } | undefined
}
type GenerateMediationReportResponse = {
  footer?: ReportFooter | undefined
  header?: ReportHeader | undefined
  row?: ReportRow | undefined
}
type NetworkReportSpecDimensionFilter = {
  dimension?:
    | 'DIMENSION_UNSPECIFIED'
    | 'DATE'
    | 'MONTH'
    | 'WEEK'
    | 'AD_UNIT'
    | 'APP'
    | 'AD_TYPE'
    | 'COUNTRY'
    | 'FORMAT'
    | 'PLATFORM'
    | 'MOBILE_OS_VERSION'
    | 'GMA_SDK_VERSION'
    | 'APP_VERSION_NAME'
    | 'SERVING_RESTRICTION'
    | undefined
  matchesAny?: StringList | undefined
}
type NetworkReportSpecSortCondition = {
  dimension?:
    | 'DIMENSION_UNSPECIFIED'
    | 'DATE'
    | 'MONTH'
    | 'WEEK'
    | 'AD_UNIT'
    | 'APP'
    | 'AD_TYPE'
    | 'COUNTRY'
    | 'FORMAT'
    | 'PLATFORM'
    | 'MOBILE_OS_VERSION'
    | 'GMA_SDK_VERSION'
    | 'APP_VERSION_NAME'
    | 'SERVING_RESTRICTION'
    | undefined
  metric?:
    | 'METRIC_UNSPECIFIED'
    | 'AD_REQUESTS'
    | 'CLICKS'
    | 'ESTIMATED_EARNINGS'
    | 'IMPRESSIONS'
    | 'IMPRESSION_CTR'
    | 'IMPRESSION_RPM'
    | 'MATCHED_REQUESTS'
    | 'MATCH_RATE'
    | 'SHOW_RATE'
    | undefined
  order?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
}
type NetworkReportSpec = {
  dateRange?: DateRange | undefined
  dimensionFilters?: NetworkReportSpecDimensionFilter[] | undefined
  dimensions?:
    | (
        | 'DIMENSION_UNSPECIFIED'
        | 'DATE'
        | 'MONTH'
        | 'WEEK'
        | 'AD_UNIT'
        | 'APP'
        | 'AD_TYPE'
        | 'COUNTRY'
        | 'FORMAT'
        | 'PLATFORM'
        | 'MOBILE_OS_VERSION'
        | 'GMA_SDK_VERSION'
        | 'APP_VERSION_NAME'
        | 'SERVING_RESTRICTION'
      )[]
    | undefined
  localizationSettings?: LocalizationSettings | undefined
  maxReportRows?: number | undefined
  metrics?:
    | (
        | 'METRIC_UNSPECIFIED'
        | 'AD_REQUESTS'
        | 'CLICKS'
        | 'ESTIMATED_EARNINGS'
        | 'IMPRESSIONS'
        | 'IMPRESSION_CTR'
        | 'IMPRESSION_RPM'
        | 'MATCHED_REQUESTS'
        | 'MATCH_RATE'
        | 'SHOW_RATE'
      )[]
    | undefined
  sortConditions?: NetworkReportSpecSortCondition[] | undefined
  timeZone?: string | undefined
}
type GenerateNetworkReportRequest = { reportSpec?: NetworkReportSpec | undefined }
type GenerateNetworkReportResponse = {
  footer?: ReportFooter | undefined
  header?: ReportHeader | undefined
  row?: ReportRow | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/accounts': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListPublisherAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name': {
      $get: {
        input: { param: { name: string } } & {
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
        output: PublisherAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/adSources': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListAdSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/adUnits': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListAdUnitsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/apps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/mediationReport:generate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GenerateMediationReportRequest }
        output: GenerateMediationReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/networkReport:generate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GenerateNetworkReportRequest }
        output: GenerateNetworkReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

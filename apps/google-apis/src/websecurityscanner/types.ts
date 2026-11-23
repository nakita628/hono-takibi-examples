type Empty = { [x: string]: unknown }
type Form = { actionUri?: string | undefined; fields?: string[] | undefined }
type OutdatedLibrary = {
  learnMoreUrls?: string[] | undefined
  libraryName?: string | undefined
  version?: string | undefined
}
type ViolatingResource = { contentType?: string | undefined; resourceUrl?: string | undefined }
type Header = { name?: string | undefined; value?: string | undefined }
type VulnerableHeaders = { headers?: Header[] | undefined; missingHeaders?: Header[] | undefined }
type VulnerableParameters = { parameterNames?: string[] | undefined }
type Xss = { errorMessage?: string | undefined; stackTraces?: string[] | undefined }
type Xxe = {
  payloadLocation?: 'LOCATION_UNSPECIFIED' | 'COMPLETE_REQUEST_BODY' | undefined
  payloadValue?: string | undefined
}
type Finding = {
  body?: string | undefined
  description?: string | undefined
  finalUrl?: string | undefined
  findingType?: string | undefined
  form?: Form | undefined
  frameUrl?: string | undefined
  fuzzedUrl?: string | undefined
  httpMethod?: string | undefined
  name?: string | undefined
  outdatedLibrary?: OutdatedLibrary | undefined
  reproductionUrl?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | undefined
  trackingId?: string | undefined
  violatingResource?: ViolatingResource | undefined
  vulnerableHeaders?: VulnerableHeaders | undefined
  vulnerableParameters?: VulnerableParameters | undefined
  xss?: Xss | undefined
  xxe?: Xxe | undefined
}
type CustomAccount = {
  loginUrl?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type GoogleAccount = { password?: string | undefined; username?: string | undefined }
type IapTestServiceAccountInfo = { targetAudienceClientId?: string | undefined }
type IapCredential = { iapTestServiceAccountInfo?: IapTestServiceAccountInfo | undefined }
type Authentication = {
  customAccount?: CustomAccount | undefined
  googleAccount?: GoogleAccount | undefined
  iapCredential?: IapCredential | undefined
}
type ScanConfigError = {
  code?:
    | 'CODE_UNSPECIFIED'
    | 'OK'
    | 'INTERNAL_ERROR'
    | 'APPENGINE_API_BACKEND_ERROR'
    | 'APPENGINE_API_NOT_ACCESSIBLE'
    | 'APPENGINE_DEFAULT_HOST_MISSING'
    | 'CANNOT_USE_GOOGLE_COM_ACCOUNT'
    | 'CANNOT_USE_OWNER_ACCOUNT'
    | 'COMPUTE_API_BACKEND_ERROR'
    | 'COMPUTE_API_NOT_ACCESSIBLE'
    | 'CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT'
    | 'CUSTOM_LOGIN_URL_MALFORMED'
    | 'CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS'
    | 'CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS'
    | 'CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS'
    | 'CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS'
    | 'DUPLICATE_SCAN_NAME'
    | 'INVALID_FIELD_VALUE'
    | 'FAILED_TO_AUTHENTICATE_TO_TARGET'
    | 'FINDING_TYPE_UNSPECIFIED'
    | 'FORBIDDEN_TO_SCAN_COMPUTE'
    | 'FORBIDDEN_UPDATE_TO_MANAGED_SCAN'
    | 'MALFORMED_FILTER'
    | 'MALFORMED_RESOURCE_NAME'
    | 'PROJECT_INACTIVE'
    | 'REQUIRED_FIELD'
    | 'RESOURCE_NAME_INCONSISTENT'
    | 'SCAN_ALREADY_RUNNING'
    | 'SCAN_NOT_RUNNING'
    | 'SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT'
    | 'SEED_URL_MALFORMED'
    | 'SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS'
    | 'SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS'
    | 'SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS'
    | 'SEED_URL_HAS_UNRESERVED_IP_ADDRESS'
    | 'SERVICE_ACCOUNT_NOT_CONFIGURED'
    | 'TOO_MANY_SCANS'
    | 'UNABLE_TO_RESOLVE_PROJECT_INFO'
    | 'UNSUPPORTED_BLACKLIST_PATTERN_FORMAT'
    | 'UNSUPPORTED_FILTER'
    | 'UNSUPPORTED_FINDING_TYPE'
    | 'UNSUPPORTED_URL_SCHEME'
    | undefined
  fieldName?: string | undefined
}
type ScanRunErrorTrace = {
  code?:
    | 'CODE_UNSPECIFIED'
    | 'INTERNAL_ERROR'
    | 'SCAN_CONFIG_ISSUE'
    | 'AUTHENTICATION_CONFIG_ISSUE'
    | 'TIMED_OUT_WHILE_SCANNING'
    | 'TOO_MANY_REDIRECTS'
    | 'TOO_MANY_HTTP_ERRORS'
    | 'STARTING_URLS_CRAWL_HTTP_ERRORS'
    | undefined
  mostCommonHttpErrorCode?: number | undefined
  scanConfigError?: ScanConfigError | undefined
}
type ScanRunWarningTrace = {
  code?:
    | 'CODE_UNSPECIFIED'
    | 'INSUFFICIENT_CRAWL_RESULTS'
    | 'TOO_MANY_CRAWL_RESULTS'
    | 'TOO_MANY_FUZZ_TASKS'
    | 'BLOCKED_BY_IAP'
    | 'NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN'
    | undefined
}
type ScanRun = {
  endTime?: string | undefined
  errorTrace?: ScanRunErrorTrace | undefined
  executionState?: 'EXECUTION_STATE_UNSPECIFIED' | 'QUEUED' | 'SCANNING' | 'FINISHED' | undefined
  hasVulnerabilities?: boolean | undefined
  name?: string | undefined
  progressPercent?: number | undefined
  resultState?: 'RESULT_STATE_UNSPECIFIED' | 'SUCCESS' | 'ERROR' | 'KILLED' | undefined
  startTime?: string | undefined
  urlsCrawledCount?: string | undefined
  urlsTestedCount?: string | undefined
  warningTraces?: ScanRunWarningTrace[] | undefined
}
type Schedule = { intervalDurationDays?: number | undefined; scheduleTime?: string | undefined }
type ScanConfig = {
  authentication?: Authentication | undefined
  blacklistPatterns?: string[] | undefined
  displayName?: string | undefined
  exportToSecurityCommandCenter?:
    | 'EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED'
    | 'ENABLED'
    | 'DISABLED'
    | undefined
  ignoreHttpStatusErrors?: boolean | undefined
  latestRun?: ScanRun | undefined
  managedScan?: boolean | undefined
  maxQps?: number | undefined
  name?: string | undefined
  riskLevel?: 'RISK_LEVEL_UNSPECIFIED' | 'NORMAL' | 'LOW' | undefined
  schedule?: Schedule | undefined
  startingUrls?: string[] | undefined
  staticIpScan?: boolean | undefined
  targetPlatforms?:
    | ('TARGET_PLATFORM_UNSPECIFIED' | 'APP_ENGINE' | 'COMPUTE' | 'CLOUD_RUN' | 'CLOUD_FUNCTIONS')[]
    | undefined
  userAgent?:
    | 'USER_AGENT_UNSPECIFIED'
    | 'CHROME_LINUX'
    | 'CHROME_ANDROID'
    | 'SAFARI_IPHONE'
    | undefined
}
type StartScanRunRequest = { [x: string]: unknown }
type StopScanRunRequest = { [x: string]: unknown }
type CrawledUrl = {
  body?: string | undefined
  httpMethod?: string | undefined
  url?: string | undefined
}
type ListCrawledUrlsResponse = {
  crawledUrls?: CrawledUrl[] | undefined
  nextPageToken?: string | undefined
}
type FindingTypeStats = { findingCount?: number | undefined; findingType?: string | undefined }
type ListFindingTypeStatsResponse = { findingTypeStats?: FindingTypeStats[] | undefined }
type ListFindingsResponse = { findings?: Finding[] | undefined; nextPageToken?: string | undefined }
type ListScanConfigsResponse = {
  nextPageToken?: string | undefined
  scanConfigs?: ScanConfig[] | undefined
}
type ListScanRunsResponse = { nextPageToken?: string | undefined; scanRuns?: ScanRun[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
      $delete: {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
        output: Finding
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ScanConfig }
        output: ScanConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:start': {
      $post: {
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
        } & { json: StartScanRunRequest }
        output: ScanRun
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:stop': {
      $post: {
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
        } & { json: StopScanRunRequest }
        output: ScanRun
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/crawledUrls': {
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
        output: ListCrawledUrlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/findingTypeStats': {
      $get: {
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
        }
        output: ListFindingTypeStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/findings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/scanConfigs': {
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
        output: ListScanConfigsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: ScanConfig }
        output: ScanConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/scanRuns': {
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
        output: ListScanRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

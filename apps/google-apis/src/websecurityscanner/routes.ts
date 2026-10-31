import { createRoute, z } from '@hono/zod-openapi'

const CustomAccountSchema = z
  .object({
    loginUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The login form URL of the website.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The user name of the custom account.' }),
  })
  .openapi({
    description: 'Describes authentication configuration that uses a custom account.',
    required: [],
  })
  .openapi('CustomAccount')

const GoogleAccountSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The user name of the Google account.' }),
  })
  .openapi({
    description: 'Describes authentication configuration that uses a Google account.',
    required: [],
  })
  .openapi('GoogleAccount')

const IapTestServiceAccountInfoSchema = z
  .object({
    targetAudienceClientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Describes OAuth2 Client ID of resources protected by Identity-Aware-Proxy(IAP).',
      }),
  })
  .openapi({
    description:
      'Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.',
    required: [],
  })
  .openapi('IapTestServiceAccountInfo')

const IapCredentialSchema = z
  .object({
    iapTestServiceAccountInfo: IapTestServiceAccountInfoSchema.exactOptional().openapi({
      description:
        'Authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.',
    }),
  })
  .openapi({
    description: 'Describes authentication configuration for Identity-Aware-Proxy (IAP).',
    required: [],
  })
  .openapi('IapCredential')

const AuthenticationSchema = z
  .object({
    customAccount: CustomAccountSchema.exactOptional().openapi({
      description: 'Authentication using a custom account.',
    }),
    googleAccount: GoogleAccountSchema.exactOptional().openapi({
      description: 'Authentication using a Google account.',
    }),
    iapCredential: IapCredentialSchema.exactOptional().openapi({
      description: 'Authentication using Identity-Aware-Proxy (IAP).',
    }),
  })
  .openapi({ description: 'Scan authentication configuration.', required: [] })
  .openapi('Authentication')

const CrawledUrlSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the request that was used to visit the URL.' }),
    httpMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The http method of the request that was used to visit the URL, in uppercase.',
      }),
    url: z.string().exactOptional().openapi({ description: 'The URL that was crawled.' }),
  })
  .openapi({
    description:
      'A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.',
    required: [],
  })
  .openapi('CrawledUrl')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FormSchema = z
  .object({
    actionUri: z
      .string()
      .exactOptional()
      .openapi({ description: "! The URI where to send the form when it's submitted." }),
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: '! The names of form fields related to the vulnerability.' }),
  })
  .openapi({ description: '! Information about a vulnerability with an HTML.', required: [] })
  .openapi('Form')

const OutdatedLibrarySchema = z
  .object({
    learnMoreUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'URLs to learn more information about the vulnerabilities in the library.',
      }),
    libraryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the outdated library.' }),
    version: z.string().exactOptional().openapi({ description: 'The version number.' }),
  })
  .openapi({ description: 'Information reported for an outdated library.', required: [] })
  .openapi('OutdatedLibrary')

const ViolatingResourceSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of this resource.' }),
    resourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of this violating resource.' }),
  })
  .openapi({
    description:
      'Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.',
    required: [],
  })
  .openapi('ViolatingResource')

const HeaderSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Header name.' }),
    value: z.string().exactOptional().openapi({ description: 'Header value.' }),
  })
  .openapi({ description: 'Describes a HTTP Header.', required: [] })
  .openapi('Header')

const VulnerableHeadersSchema = z
  .object({
    headers: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({ description: 'List of vulnerable headers.' }),
    missingHeaders: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({ description: 'List of missing headers.' }),
  })
  .openapi({ description: 'Information about vulnerable or missing HTTP Headers.', required: [] })
  .openapi('VulnerableHeaders')

const VulnerableParametersSchema = z
  .object({
    parameterNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The vulnerable parameter names.' }),
  })
  .openapi({ description: 'Information about vulnerable request parameters.', required: [] })
  .openapi('VulnerableParameters')

const XssSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error message generated by a javascript breakage.' }),
    stackTraces: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Stack traces leading to the point where the XSS occurred.' }),
  })
  .openapi({ description: 'Information reported for an XSS.', required: [] })
  .openapi('Xss')

const XxeSchema = z
  .object({
    payloadLocation: z
      .enum(['LOCATION_UNSPECIFIED', 'COMPLETE_REQUEST_BODY'])
      .exactOptional()
      .openapi({ description: 'Location within the request where the payload was placed.' }),
    payloadValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The XML string that triggered the XXE vulnerability. Non-payload values might be redacted.',
      }),
  })
  .openapi({ description: 'Information reported for an XXE.', required: [] })
  .openapi('Xxe')

const FindingSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the request that triggered the vulnerability.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the vulnerability.' }),
    finalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL where the browser lands when the vulnerability is detected.',
      }),
    findingType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the Finding. Detailed and up-to-date information on findings can be found here: https://cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner',
      }),
    form: FormSchema.exactOptional().openapi({
      description:
        'An addon containing information reported for a vulnerability with an HTML form, if any.',
    }),
    frameUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.',
      }),
    fuzzedUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.',
      }),
    httpMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The http method of the request that triggered the vulnerability, in uppercase.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system.",
      }),
    outdatedLibrary: OutdatedLibrarySchema.exactOptional().openapi({
      description: 'An addon containing information about outdated libraries.',
    }),
    reproductionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL containing human-readable payload that user can leverage to reproduce the vulnerability.',
      }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])
      .exactOptional()
      .openapi({ description: 'The severity level of the reported vulnerability.' }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.',
      }),
    violatingResource: ViolatingResourceSchema.exactOptional().openapi({
      description:
        'An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.',
    }),
    vulnerableHeaders: VulnerableHeadersSchema.exactOptional().openapi({
      description: 'An addon containing information about vulnerable or missing HTTP headers.',
    }),
    vulnerableParameters: VulnerableParametersSchema.exactOptional().openapi({
      description:
        'An addon containing information about request parameters which were found to be vulnerable.',
    }),
    xss: XssSchema.exactOptional().openapi({
      description: 'An addon containing information reported for an XSS, if any.',
    }),
    xxe: XxeSchema.exactOptional().openapi({
      description: 'An addon containing information reported for an XXE, if any.',
    }),
  })
  .openapi({
    description:
      'A Finding resource represents a vulnerability instance identified during a ScanRun.',
    required: [],
  })
  .openapi('Finding')

const FindingTypeStatsSchema = z
  .object({
    findingCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of findings belonging to this finding type.' }),
    findingType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The finding type associated with the stats.' }),
  })
  .openapi({
    description:
      'A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.',
    required: [],
  })
  .openapi('FindingTypeStats')

const ListCrawledUrlsResponseSchema = z
  .object({
    crawledUrls: z
      .array(CrawledUrlSchema)
      .exactOptional()
      .openapi({ description: 'The list of CrawledUrls returned.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Response for the `ListCrawledUrls` method.', required: [] })
  .openapi('ListCrawledUrlsResponse')

const ListFindingTypeStatsResponseSchema = z
  .object({
    findingTypeStats: z
      .array(FindingTypeStatsSchema)
      .exactOptional()
      .openapi({ description: 'The list of FindingTypeStats returned.' }),
  })
  .openapi({ description: 'Response for the `ListFindingTypeStats` method.', required: [] })
  .openapi('ListFindingTypeStatsResponse')

const ListFindingsResponseSchema = z
  .object({
    findings: z
      .array(FindingSchema)
      .exactOptional()
      .openapi({ description: 'The list of Findings returned.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Response for the `ListFindings` method.', required: [] })
  .openapi('ListFindingsResponse')

const ScanConfigErrorSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'OK',
        'INTERNAL_ERROR',
        'APPENGINE_API_BACKEND_ERROR',
        'APPENGINE_API_NOT_ACCESSIBLE',
        'APPENGINE_DEFAULT_HOST_MISSING',
        'CANNOT_USE_GOOGLE_COM_ACCOUNT',
        'CANNOT_USE_OWNER_ACCOUNT',
        'COMPUTE_API_BACKEND_ERROR',
        'COMPUTE_API_NOT_ACCESSIBLE',
        'CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT',
        'CUSTOM_LOGIN_URL_MALFORMED',
        'CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS',
        'CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS',
        'CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS',
        'CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS',
        'DUPLICATE_SCAN_NAME',
        'INVALID_FIELD_VALUE',
        'FAILED_TO_AUTHENTICATE_TO_TARGET',
        'FINDING_TYPE_UNSPECIFIED',
        'FORBIDDEN_TO_SCAN_COMPUTE',
        'FORBIDDEN_UPDATE_TO_MANAGED_SCAN',
        'MALFORMED_FILTER',
        'MALFORMED_RESOURCE_NAME',
        'PROJECT_INACTIVE',
        'REQUIRED_FIELD',
        'RESOURCE_NAME_INCONSISTENT',
        'SCAN_ALREADY_RUNNING',
        'SCAN_NOT_RUNNING',
        'SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT',
        'SEED_URL_MALFORMED',
        'SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS',
        'SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS',
        'SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS',
        'SEED_URL_HAS_UNRESERVED_IP_ADDRESS',
        'SERVICE_ACCOUNT_NOT_CONFIGURED',
        'TOO_MANY_SCANS',
        'UNABLE_TO_RESOLVE_PROJECT_INFO',
        'UNSUPPORTED_BLACKLIST_PATTERN_FORMAT',
        'UNSUPPORTED_FILTER',
        'UNSUPPORTED_FINDING_TYPE',
        'UNSUPPORTED_URL_SCHEME',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the reason code for a configuration failure.' }),
    fieldName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the full name of the ScanConfig field that triggers this error, for example "scan_config.max_qps". This field is provided for troubleshooting purposes only and its actual value can change in the future.',
      }),
  })
  .openapi({
    description:
      'Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.',
    required: [],
  })
  .openapi('ScanConfigError')

const ScanRunErrorTraceSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'INTERNAL_ERROR',
        'SCAN_CONFIG_ISSUE',
        'AUTHENTICATION_CONFIG_ISSUE',
        'TIMED_OUT_WHILE_SCANNING',
        'TOO_MANY_REDIRECTS',
        'TOO_MANY_HTTP_ERRORS',
        'STARTING_URLS_CRAWL_HTTP_ERRORS',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the error reason code.' }),
    mostCommonHttpErrorCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses.',
      }),
    scanConfigError: ScanConfigErrorSchema.exactOptional().openapi({
      description:
        'If the scan encounters SCAN_CONFIG_ISSUE error, this field has the error message encountered during scan configuration validation that is performed before each scan run.',
    }),
  })
  .openapi({
    description: 'Output only. Defines an error trace message for a ScanRun.',
    required: [],
  })
  .openapi('ScanRunErrorTrace')

const ScanRunWarningTraceSchema = z
  .object({
    code: z
      .enum([
        'CODE_UNSPECIFIED',
        'INSUFFICIENT_CRAWL_RESULTS',
        'TOO_MANY_CRAWL_RESULTS',
        'TOO_MANY_FUZZ_TASKS',
        'BLOCKED_BY_IAP',
        'NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the warning code.' }),
  })
  .openapi({
    description:
      'Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.',
    required: [],
  })
  .openapi('ScanRunWarningTrace')

const ScanRunSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user.',
      }),
    errorTrace: ScanRunErrorTraceSchema.exactOptional().openapi({
      description:
        "If result_state is an ERROR, this field provides the primary reason for scan's termination and more details, if such are available.",
    }),
    executionState: z
      .enum(['EXECUTION_STATE_UNSPECIFIED', 'QUEUED', 'SCANNING', 'FINISHED'])
      .exactOptional()
      .openapi({ description: 'The execution state of the ScanRun.' }),
    hasVulnerabilities: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the scan run has found any vulnerabilities.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system.",
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100.',
      }),
    resultState: z
      .enum(['RESULT_STATE_UNSPECIFIED', 'SUCCESS', 'ERROR', 'KILLED'])
      .exactOptional()
      .openapi({
        description:
          'The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED".',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the ScanRun started.' }),
    urlsCrawledCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now.',
      }),
    urlsTestedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads.',
      }),
    warningTraces: z
      .array(ScanRunWarningTraceSchema)
      .exactOptional()
      .openapi({
        description: 'A list of warnings, if such are encountered during this scan run.',
      }),
  })
  .openapi({
    description:
      'A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12',
    required: [],
  })
  .openapi('ScanRun')

const ScheduleSchema = z
  .object({
    intervalDurationDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The duration of time between executions in days.' }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately.',
      }),
  })
  .openapi({ description: 'Scan schedule configuration.', required: [] })
  .openapi('Schedule')

const ScanConfigSchema = z
  .object({
    authentication: AuthenticationSchema.exactOptional().openapi({
      description:
        'The authentication configuration. If specified, service will use the authentication configuration during scanning.',
    }),
    blacklistPatterns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The user provided display name of the ScanConfig.' }),
    exportToSecurityCommandCenter: z
      .enum(['EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Controls export of scan configurations and results to Security Command Center.',
      }),
    ignoreHttpStatusErrors: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to keep scanning even if most requests return HTTP error codes.',
      }),
    latestRun: ScanRunSchema.exactOptional().openapi({
      description: 'Latest ScanRun if available.',
    }),
    managedScan: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the scan config is managed by Web Security Scanner, output only.',
      }),
    maxQps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.",
      }),
    riskLevel: z
      .enum(['RISK_LEVEL_UNSPECIFIED', 'NORMAL', 'LOW'])
      .exactOptional()
      .openapi({ description: 'The risk level selected for the scan' }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description: 'The schedule of the ScanConfig.',
    }),
    startingUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. The starting URLs from which the scanner finds site pages.',
      }),
    staticIpScan: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses.',
      }),
    targetPlatforms: z
      .array(
        z.enum([
          'TARGET_PLATFORM_UNSPECIFIED',
          'APP_ENGINE',
          'COMPUTE',
          'CLOUD_RUN',
          'CLOUD_FUNCTIONS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default.',
      }),
    userAgent: z
      .enum(['USER_AGENT_UNSPECIFIED', 'CHROME_LINUX', 'CHROME_ANDROID', 'SAFARI_IPHONE'])
      .exactOptional()
      .openapi({ description: 'The user agent used during scanning.' }),
  })
  .openapi({
    description: 'A ScanConfig resource contains the configurations to launch a scan.',
    required: [],
  })
  .openapi('ScanConfig')

const ListScanConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    scanConfigs: z
      .array(ScanConfigSchema)
      .exactOptional()
      .openapi({ description: 'The list of ScanConfigs returned.' }),
  })
  .openapi({ description: 'Response for the `ListScanConfigs` method.', required: [] })
  .openapi('ListScanConfigsResponse')

const ListScanRunsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    scanRuns: z
      .array(ScanRunSchema)
      .exactOptional()
      .openapi({ description: 'The list of ScanRuns returned.' }),
  })
  .openapi({ description: 'Response for the `ListScanRuns` method.', required: [] })
  .openapi('ListScanRunsResponse')

const StartScanRunRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `StartScanRun` method.' })
  .openapi('StartScanRunRequest')

const StopScanRunRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `StopScanRun` method.' })
  .openapi('StopScanRunRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Gets a Finding.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.findings.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FindingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1betaNameRoute = createRoute({
  method: 'delete',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Deletes an existing ScanConfig and its child resources.',
  operationId: 'websecurityscanner.projects.scanConfigs.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1betaNameRoute = createRoute({
  method: 'patch',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Updates a ScanConfig. This method support partial update of a ScanConfig.',
  operationId: 'websecurityscanner.projects.scanConfigs.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScanConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScanConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameStartRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:start',
  tags: ['projects'],
  description: 'Start a ScanRun according to the given ScanConfig.',
  operationId: 'websecurityscanner.projects.scanConfigs.start',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartScanRunRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScanRunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameStopRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:stop',
  tags: ['projects'],
  description: 'Stops a ScanRun. The stopped ScanRun is returned.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.stop',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopScanRunRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScanRunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentCrawledUrlsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/crawledUrls',
  tags: ['projects'],
  description: 'List CrawledUrls under a given ScanRun.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCrawledUrlsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentFindingTypeStatsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/findingTypeStats',
  tags: ['projects'],
  description: 'List all FindingTypeStats under a given ScanRun.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFindingTypeStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentFindingsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/findings',
  tags: ['projects'],
  description: 'List Findings under a given ScanRun.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.findings.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFindingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentScanConfigsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/scanConfigs',
  tags: ['projects'],
  description: 'Lists ScanConfigs under a given project.',
  operationId: 'websecurityscanner.projects.scanConfigs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListScanConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentScanConfigsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/scanConfigs',
  tags: ['projects'],
  description: 'Creates a new ScanConfig.',
  operationId: 'websecurityscanner.projects.scanConfigs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScanConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScanConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentScanRunsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/scanRuns',
  tags: ['projects'],
  description: 'Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.',
  operationId: 'websecurityscanner.projects.scanConfigs.scanRuns.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListScanRunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

type Empty = { [x: string]: unknown }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ApplicationInfo = {
  emails?: string[] | undefined
  instruction?: string | undefined
  uris?: string[] | undefined
}
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type CompensationRange = {
  maxCompensation?: Money | undefined
  minCompensation?: Money | undefined
}
type CompensationEntry = {
  amount?: Money | undefined
  description?: string | undefined
  expectedUnitsPerYear?: number | undefined
  range?: CompensationRange | undefined
  type?:
    | 'COMPENSATION_TYPE_UNSPECIFIED'
    | 'BASE'
    | 'BONUS'
    | 'SIGNING_BONUS'
    | 'EQUITY'
    | 'PROFIT_SHARING'
    | 'COMMISSIONS'
    | 'TIPS'
    | 'OTHER_COMPENSATION_TYPE'
    | undefined
  unit?:
    | 'COMPENSATION_UNIT_UNSPECIFIED'
    | 'HOURLY'
    | 'DAILY'
    | 'WEEKLY'
    | 'MONTHLY'
    | 'YEARLY'
    | 'ONE_TIME'
    | 'OTHER_COMPENSATION_UNIT'
    | undefined
}
type CompensationInfo = {
  annualizedBaseCompensationRange?: CompensationRange | undefined
  annualizedTotalCompensationRange?: CompensationRange | undefined
  entries?: CompensationEntry[] | undefined
}
type CustomAttribute = {
  filterable?: boolean | undefined
  longValues?: string[] | undefined
  stringValues?: string[] | undefined
}
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type Location = {
  latLng?: LatLng | undefined
  locationType?:
    | 'LOCATION_TYPE_UNSPECIFIED'
    | 'COUNTRY'
    | 'ADMINISTRATIVE_AREA'
    | 'SUB_ADMINISTRATIVE_AREA'
    | 'LOCALITY'
    | 'POSTAL_CODE'
    | 'SUB_LOCALITY'
    | 'SUB_LOCALITY_1'
    | 'SUB_LOCALITY_2'
    | 'NEIGHBORHOOD'
    | 'STREET_ADDRESS'
    | undefined
  postalAddress?: PostalAddress | undefined
  radiusInMiles?: number | undefined
}
type JobDerivedInfo = {
  jobCategories?:
    | (
        | 'JOB_CATEGORY_UNSPECIFIED'
        | 'ACCOUNTING_AND_FINANCE'
        | 'ADMINISTRATIVE_AND_OFFICE'
        | 'ADVERTISING_AND_MARKETING'
        | 'ANIMAL_CARE'
        | 'ART_FASHION_AND_DESIGN'
        | 'BUSINESS_OPERATIONS'
        | 'CLEANING_AND_FACILITIES'
        | 'COMPUTER_AND_IT'
        | 'CONSTRUCTION'
        | 'CUSTOMER_SERVICE'
        | 'EDUCATION'
        | 'ENTERTAINMENT_AND_TRAVEL'
        | 'FARMING_AND_OUTDOORS'
        | 'HEALTHCARE'
        | 'HUMAN_RESOURCES'
        | 'INSTALLATION_MAINTENANCE_AND_REPAIR'
        | 'LEGAL'
        | 'MANAGEMENT'
        | 'MANUFACTURING_AND_WAREHOUSE'
        | 'MEDIA_COMMUNICATIONS_AND_WRITING'
        | 'OIL_GAS_AND_MINING'
        | 'PERSONAL_CARE_AND_SERVICES'
        | 'PROTECTIVE_SERVICES'
        | 'REAL_ESTATE'
        | 'RESTAURANT_AND_HOSPITALITY'
        | 'SALES_AND_RETAIL'
        | 'SCIENCE_AND_ENGINEERING'
        | 'SOCIAL_SERVICES_AND_NON_PROFIT'
        | 'SPORTS_FITNESS_AND_RECREATION'
        | 'TRANSPORTATION_AND_LOGISTICS'
      )[]
    | undefined
  locations?: Location[] | undefined
}
type ProcessingOptions = {
  disableStreetAddressResolution?: boolean | undefined
  htmlSanitization?:
    | 'HTML_SANITIZATION_UNSPECIFIED'
    | 'HTML_SANITIZATION_DISABLED'
    | 'SIMPLE_FORMATTING_ONLY'
    | undefined
}
type Job = {
  addresses?: string[] | undefined
  applicationInfo?: ApplicationInfo | undefined
  companyDisplayName?: string | undefined
  companyName?: string | undefined
  compensationInfo?: CompensationInfo | undefined
  customAttributes?: { [x: string]: CustomAttribute } | undefined
  degreeTypes?:
    | (
        | 'DEGREE_TYPE_UNSPECIFIED'
        | 'PRIMARY_EDUCATION'
        | 'LOWER_SECONDARY_EDUCATION'
        | 'UPPER_SECONDARY_EDUCATION'
        | 'ADULT_REMEDIAL_EDUCATION'
        | 'ASSOCIATES_OR_EQUIVALENT'
        | 'BACHELORS_OR_EQUIVALENT'
        | 'MASTERS_OR_EQUIVALENT'
        | 'DOCTORAL_OR_EQUIVALENT'
      )[]
    | undefined
  department?: string | undefined
  derivedInfo?: JobDerivedInfo | undefined
  description?: string | undefined
  employmentTypes?:
    | (
        | 'EMPLOYMENT_TYPE_UNSPECIFIED'
        | 'FULL_TIME'
        | 'PART_TIME'
        | 'CONTRACTOR'
        | 'CONTRACT_TO_HIRE'
        | 'TEMPORARY'
        | 'INTERN'
        | 'VOLUNTEER'
        | 'PER_DIEM'
        | 'FLY_IN_FLY_OUT'
        | 'OTHER_EMPLOYMENT_TYPE'
      )[]
    | undefined
  incentives?: string | undefined
  jobBenefits?:
    | (
        | 'JOB_BENEFIT_UNSPECIFIED'
        | 'CHILD_CARE'
        | 'DENTAL'
        | 'DOMESTIC_PARTNER'
        | 'FLEXIBLE_HOURS'
        | 'MEDICAL'
        | 'LIFE_INSURANCE'
        | 'PARENTAL_LEAVE'
        | 'RETIREMENT_PLAN'
        | 'SICK_DAYS'
        | 'VACATION'
        | 'VISION'
      )[]
    | undefined
  jobEndTime?: string | undefined
  jobLevel?:
    | 'JOB_LEVEL_UNSPECIFIED'
    | 'ENTRY_LEVEL'
    | 'EXPERIENCED'
    | 'MANAGER'
    | 'DIRECTOR'
    | 'EXECUTIVE'
    | undefined
  jobStartTime?: string | undefined
  languageCode?: string | undefined
  name?: string | undefined
  postingCreateTime?: string | undefined
  postingExpireTime?: string | undefined
  postingPublishTime?: string | undefined
  postingRegion?:
    | 'POSTING_REGION_UNSPECIFIED'
    | 'ADMINISTRATIVE_AREA'
    | 'NATION'
    | 'TELECOMMUTE'
    | undefined
  postingUpdateTime?: string | undefined
  processingOptions?: ProcessingOptions | undefined
  promotionValue?: number | undefined
  qualifications?: string | undefined
  requisitionId?: string | undefined
  responsibilities?: string | undefined
  title?: string | undefined
  visibility?:
    | 'VISIBILITY_UNSPECIFIED'
    | 'ACCOUNT_ONLY'
    | 'SHARED_WITH_GOOGLE'
    | 'SHARED_WITH_PUBLIC'
    | undefined
}
type UpdateJobRequest = { job?: Job | undefined; updateMask?: string | undefined }
type CompletionResult = {
  imageUri?: string | undefined
  suggestion?: string | undefined
  type?: 'COMPLETION_TYPE_UNSPECIFIED' | 'JOB_TITLE' | 'COMPANY_NAME' | 'COMBINED' | undefined
}
type ResponseMetadata = { requestId?: string | undefined }
type CompleteQueryResponse = {
  completionResults?: CompletionResult[] | undefined
  metadata?: ResponseMetadata | undefined
}
type JobEvent = {
  jobs?: string[] | undefined
  type?:
    | 'JOB_EVENT_TYPE_UNSPECIFIED'
    | 'IMPRESSION'
    | 'VIEW'
    | 'VIEW_REDIRECT'
    | 'APPLICATION_START'
    | 'APPLICATION_FINISH'
    | 'APPLICATION_QUICK_SUBMISSION'
    | 'APPLICATION_REDIRECT'
    | 'APPLICATION_START_FROM_SEARCH'
    | 'APPLICATION_REDIRECT_FROM_SEARCH'
    | 'APPLICATION_COMPANY_SUBMIT'
    | 'BOOKMARK'
    | 'NOTIFICATION'
    | 'HIRED'
    | 'SENT_CV'
    | 'INTERVIEW_GRANTED'
    | 'NOT_INTERESTED'
    | undefined
}
type ClientEvent = {
  createTime?: string | undefined
  eventId?: string | undefined
  extraInfo?: { [x: string]: string } | undefined
  jobEvent?: JobEvent | undefined
  parentEventId?: string | undefined
  requestId?: string | undefined
}
type CreateClientEventRequest = { clientEvent?: ClientEvent | undefined }
type CompanyDerivedInfo = { headquartersLocation?: Location | undefined }
type Company = {
  careerSiteUri?: string | undefined
  derivedInfo?: CompanyDerivedInfo | undefined
  displayName?: string | undefined
  eeoText?: string | undefined
  externalId?: string | undefined
  headquartersAddress?: string | undefined
  hiringAgency?: boolean | undefined
  imageUri?: string | undefined
  keywordSearchableJobCustomAttributes?: string[] | undefined
  name?: string | undefined
  size?:
    | 'COMPANY_SIZE_UNSPECIFIED'
    | 'MINI'
    | 'SMALL'
    | 'SMEDIUM'
    | 'MEDIUM'
    | 'BIG'
    | 'BIGGER'
    | 'GIANT'
    | undefined
  suspended?: boolean | undefined
  websiteUri?: string | undefined
}
type ListCompaniesResponse = {
  companies?: Company[] | undefined
  metadata?: ResponseMetadata | undefined
  nextPageToken?: string | undefined
}
type CreateCompanyRequest = { company?: Company | undefined }
type ListJobsResponse = {
  jobs?: Job[] | undefined
  metadata?: ResponseMetadata | undefined
  nextPageToken?: string | undefined
}
type CreateJobRequest = { job?: Job | undefined }
type BatchDeleteJobsRequest = { filter?: string | undefined }
type CustomRankingInfo = {
  importanceLevel?:
    | 'IMPORTANCE_LEVEL_UNSPECIFIED'
    | 'NONE'
    | 'LOW'
    | 'MILD'
    | 'MEDIUM'
    | 'HIGH'
    | 'EXTREME'
    | undefined
  rankingExpression?: string | undefined
}
type NumericBucketingOption = {
  bucketBounds?: number[] | undefined
  requiresMinMax?: boolean | undefined
}
type CompensationHistogramRequest = {
  bucketingOption?: NumericBucketingOption | undefined
  type?:
    | 'COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED'
    | 'BASE'
    | 'ANNUALIZED_BASE'
    | 'ANNUALIZED_TOTAL'
    | undefined
}
type CustomAttributeHistogramRequest = {
  key?: string | undefined
  longValueHistogramBucketingOption?: NumericBucketingOption | undefined
  stringValueHistogram?: boolean | undefined
}
type HistogramFacets = {
  compensationHistogramFacets?: CompensationHistogramRequest[] | undefined
  customAttributeHistogramFacets?: CustomAttributeHistogramRequest[] | undefined
  simpleHistogramFacets?:
    | (
        | 'SEARCH_TYPE_UNSPECIFIED'
        | 'COMPANY_ID'
        | 'EMPLOYMENT_TYPE'
        | 'COMPANY_SIZE'
        | 'DATE_PUBLISHED'
        | 'EDUCATION_LEVEL'
        | 'EXPERIENCE_LEVEL'
        | 'ADMIN_1'
        | 'COUNTRY'
        | 'CITY'
        | 'LOCALE'
        | 'LANGUAGE'
        | 'CATEGORY'
        | 'CITY_COORDINATE'
        | 'ADMIN_1_COUNTRY'
        | 'COMPANY_DISPLAY_NAME'
        | 'BASE_COMPENSATION_UNIT'
      )[]
    | undefined
}
type HistogramQuery = { histogramQuery?: string | undefined }
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type CommuteFilter = {
  allowImpreciseAddresses?: boolean | undefined
  commuteMethod?:
    | 'COMMUTE_METHOD_UNSPECIFIED'
    | 'DRIVING'
    | 'TRANSIT'
    | 'WALKING'
    | 'CYCLING'
    | undefined
  departureTime?: TimeOfDay | undefined
  roadTraffic?: 'ROAD_TRAFFIC_UNSPECIFIED' | 'TRAFFIC_FREE' | 'BUSY_HOUR' | undefined
  startCoordinates?: LatLng | undefined
  travelDuration?: string | undefined
}
type CompensationFilter = {
  includeJobsWithUnspecifiedCompensationRange?: boolean | undefined
  range?: CompensationRange | undefined
  type?:
    | 'FILTER_TYPE_UNSPECIFIED'
    | 'UNIT_ONLY'
    | 'UNIT_AND_AMOUNT'
    | 'ANNUALIZED_BASE_AMOUNT'
    | 'ANNUALIZED_TOTAL_AMOUNT'
    | undefined
  units?:
    | (
        | 'COMPENSATION_UNIT_UNSPECIFIED'
        | 'HOURLY'
        | 'DAILY'
        | 'WEEKLY'
        | 'MONTHLY'
        | 'YEARLY'
        | 'ONE_TIME'
        | 'OTHER_COMPENSATION_UNIT'
      )[]
    | undefined
}
type LocationFilter = {
  address?: string | undefined
  distanceInMiles?: number | undefined
  latLng?: LatLng | undefined
  regionCode?: string | undefined
  telecommutePreference?:
    | 'TELECOMMUTE_PREFERENCE_UNSPECIFIED'
    | 'TELECOMMUTE_EXCLUDED'
    | 'TELECOMMUTE_ALLOWED'
    | 'TELECOMMUTE_JOBS_EXCLUDED'
    | undefined
}
type TimestampRange = { endTime?: string | undefined; startTime?: string | undefined }
type JobQuery = {
  commuteFilter?: CommuteFilter | undefined
  companyDisplayNames?: string[] | undefined
  companyNames?: string[] | undefined
  compensationFilter?: CompensationFilter | undefined
  customAttributeFilter?: string | undefined
  disableSpellCheck?: boolean | undefined
  employmentTypes?:
    | (
        | 'EMPLOYMENT_TYPE_UNSPECIFIED'
        | 'FULL_TIME'
        | 'PART_TIME'
        | 'CONTRACTOR'
        | 'CONTRACT_TO_HIRE'
        | 'TEMPORARY'
        | 'INTERN'
        | 'VOLUNTEER'
        | 'PER_DIEM'
        | 'FLY_IN_FLY_OUT'
        | 'OTHER_EMPLOYMENT_TYPE'
      )[]
    | undefined
  excludedJobs?: string[] | undefined
  jobCategories?:
    | (
        | 'JOB_CATEGORY_UNSPECIFIED'
        | 'ACCOUNTING_AND_FINANCE'
        | 'ADMINISTRATIVE_AND_OFFICE'
        | 'ADVERTISING_AND_MARKETING'
        | 'ANIMAL_CARE'
        | 'ART_FASHION_AND_DESIGN'
        | 'BUSINESS_OPERATIONS'
        | 'CLEANING_AND_FACILITIES'
        | 'COMPUTER_AND_IT'
        | 'CONSTRUCTION'
        | 'CUSTOMER_SERVICE'
        | 'EDUCATION'
        | 'ENTERTAINMENT_AND_TRAVEL'
        | 'FARMING_AND_OUTDOORS'
        | 'HEALTHCARE'
        | 'HUMAN_RESOURCES'
        | 'INSTALLATION_MAINTENANCE_AND_REPAIR'
        | 'LEGAL'
        | 'MANAGEMENT'
        | 'MANUFACTURING_AND_WAREHOUSE'
        | 'MEDIA_COMMUNICATIONS_AND_WRITING'
        | 'OIL_GAS_AND_MINING'
        | 'PERSONAL_CARE_AND_SERVICES'
        | 'PROTECTIVE_SERVICES'
        | 'REAL_ESTATE'
        | 'RESTAURANT_AND_HOSPITALITY'
        | 'SALES_AND_RETAIL'
        | 'SCIENCE_AND_ENGINEERING'
        | 'SOCIAL_SERVICES_AND_NON_PROFIT'
        | 'SPORTS_FITNESS_AND_RECREATION'
        | 'TRANSPORTATION_AND_LOGISTICS'
      )[]
    | undefined
  languageCodes?: string[] | undefined
  locationFilters?: LocationFilter[] | undefined
  publishTimeRange?: TimestampRange | undefined
  query?: string | undefined
  queryLanguageCode?: string | undefined
}
type DeviceInfo = {
  deviceType?:
    | 'DEVICE_TYPE_UNSPECIFIED'
    | 'WEB'
    | 'MOBILE_WEB'
    | 'ANDROID'
    | 'IOS'
    | 'BOT'
    | 'OTHER'
    | undefined
  id?: string | undefined
}
type RequestMetadata = {
  deviceInfo?: DeviceInfo | undefined
  domain?: string | undefined
  sessionId?: string | undefined
  userId?: string | undefined
}
type SearchJobsRequest = {
  customRankingInfo?: CustomRankingInfo | undefined
  disableKeywordMatch?: boolean | undefined
  diversificationLevel?: 'DIVERSIFICATION_LEVEL_UNSPECIFIED' | 'DISABLED' | 'SIMPLE' | undefined
  enableBroadening?: boolean | undefined
  histogramFacets?: HistogramFacets | undefined
  histogramQueries?: HistogramQuery[] | undefined
  jobQuery?: JobQuery | undefined
  jobView?:
    | 'JOB_VIEW_UNSPECIFIED'
    | 'JOB_VIEW_ID_ONLY'
    | 'JOB_VIEW_MINIMAL'
    | 'JOB_VIEW_SMALL'
    | 'JOB_VIEW_FULL'
    | undefined
  offset?: number | undefined
  orderBy?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  requestMetadata?: RequestMetadata | undefined
  requirePreciseResultSize?: boolean | undefined
  searchMode?: 'SEARCH_MODE_UNSPECIFIED' | 'JOB_SEARCH' | 'FEATURED_JOB_SEARCH' | undefined
}
type HistogramQueryResult = {
  histogram?: { [x: string]: string } | undefined
  histogramQuery?: string | undefined
}
type BucketRange = { from?: number | undefined; to?: number | undefined }
type BucketizedCount = { count?: number | undefined; range?: BucketRange | undefined }
type NumericBucketingResult = {
  counts?: BucketizedCount[] | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
}
type CompensationHistogramResult = {
  result?: NumericBucketingResult | undefined
  type?:
    | 'COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED'
    | 'BASE'
    | 'ANNUALIZED_BASE'
    | 'ANNUALIZED_TOTAL'
    | undefined
}
type CustomAttributeHistogramResult = {
  key?: string | undefined
  longValueHistogramResult?: NumericBucketingResult | undefined
  stringValueHistogramResult?: { [x: string]: number } | undefined
}
type HistogramResult = {
  searchType?:
    | 'SEARCH_TYPE_UNSPECIFIED'
    | 'COMPANY_ID'
    | 'EMPLOYMENT_TYPE'
    | 'COMPANY_SIZE'
    | 'DATE_PUBLISHED'
    | 'EDUCATION_LEVEL'
    | 'EXPERIENCE_LEVEL'
    | 'ADMIN_1'
    | 'COUNTRY'
    | 'CITY'
    | 'LOCALE'
    | 'LANGUAGE'
    | 'CATEGORY'
    | 'CITY_COORDINATE'
    | 'ADMIN_1_COUNTRY'
    | 'COMPANY_DISPLAY_NAME'
    | 'BASE_COMPENSATION_UNIT'
    | undefined
  values?: { [x: string]: number } | undefined
}
type HistogramResults = {
  compensationHistogramResults?: CompensationHistogramResult[] | undefined
  customAttributeHistogramResults?: CustomAttributeHistogramResult[] | undefined
  simpleHistogramResults?: HistogramResult[] | undefined
}
type CommuteInfo = { jobLocation?: Location | undefined; travelDuration?: string | undefined }
type MatchingJob = {
  commuteInfo?: CommuteInfo | undefined
  job?: Job | undefined
  jobSummary?: string | undefined
  jobTitleSnippet?: string | undefined
  searchTextSnippet?: string | undefined
}
type SpellingCorrection = { corrected?: boolean | undefined; correctedText?: string | undefined }
type SearchJobsResponse = {
  broadenedQueryJobsCount?: number | undefined
  estimatedTotalSize?: number | undefined
  histogramQueryResults?: HistogramQueryResult[] | undefined
  histogramResults?: HistogramResults | undefined
  locationFilters?: Location[] | undefined
  matchingJobs?: MatchingJob[] | undefined
  metadata?: ResponseMetadata | undefined
  nextPageToken?: string | undefined
  spellCorrection?: SpellingCorrection | undefined
  totalSize?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3p1beta1/:name': {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
        } & { json: UpdateJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:name:complete': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            companyName?: string | undefined
            languageCode?: string | undefined
            languageCodes?: string[] | undefined
            pageSize?: number | undefined
            query?: string | undefined
            scope?: 'COMPLETION_SCOPE_UNSPECIFIED' | 'TENANT' | 'PUBLIC' | undefined
            type?:
              | 'COMPLETION_TYPE_UNSPECIFIED'
              | 'JOB_TITLE'
              | 'COMPANY_NAME'
              | 'COMBINED'
              | undefined
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
        output: CompleteQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/clientEvents': {
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
        } & { json: CreateClientEventRequest }
        output: ClientEvent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/companies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            requireOpenJobs?: boolean | undefined
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
        output: ListCompaniesResponse
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
        } & { json: CreateCompanyRequest }
        output: Company
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            jobView?:
              | 'JOB_VIEW_UNSPECIFIED'
              | 'JOB_VIEW_ID_ONLY'
              | 'JOB_VIEW_MINIMAL'
              | 'JOB_VIEW_SMALL'
              | 'JOB_VIEW_FULL'
              | undefined
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
        output: ListJobsResponse
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
        } & { json: CreateJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/jobs:batchDelete': {
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
        } & { json: BatchDeleteJobsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/jobs:search': {
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
        } & { json: SearchJobsRequest }
        output: SearchJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3p1beta1/:parent/jobs:searchForAlert': {
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
        } & { json: SearchJobsRequest }
        output: SearchJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

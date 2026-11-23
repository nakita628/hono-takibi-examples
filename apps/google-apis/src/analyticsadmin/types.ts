type GoogleAnalyticsAdminV1betaPropertySummary = {
  displayName?: string | undefined
  parent?: string | undefined
  property?: string | undefined
  propertyType?:
    | 'PROPERTY_TYPE_UNSPECIFIED'
    | 'PROPERTY_TYPE_ORDINARY'
    | 'PROPERTY_TYPE_SUBPROPERTY'
    | 'PROPERTY_TYPE_ROLLUP'
    | undefined
}
type GoogleAnalyticsAdminV1betaAccountSummary = {
  account?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  propertySummaries?: GoogleAnalyticsAdminV1betaPropertySummary[] | undefined
}
type GoogleAnalyticsAdminV1betaListAccountSummariesResponse = {
  accountSummaries?: GoogleAnalyticsAdminV1betaAccountSummary[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaAccount = {
  createTime?: string | undefined
  deleted?: boolean | undefined
  displayName?: string | undefined
  name?: string | undefined
  regionCode?: string | undefined
  updateTime?: string | undefined
}
type GoogleAnalyticsAdminV1betaListAccountsResponse = {
  accounts?: GoogleAnalyticsAdminV1betaAccount[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest = {
  account?: GoogleAnalyticsAdminV1betaAccount | undefined
  redirectUri?: string | undefined
}
type GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse = {
  accountTicketId?: string | undefined
}
type GoogleAnalyticsAdminV1betaProperty = {
  account?: string | undefined
  createTime?: string | undefined
  currencyCode?: string | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  expireTime?: string | undefined
  industryCategory?:
    | 'INDUSTRY_CATEGORY_UNSPECIFIED'
    | 'AUTOMOTIVE'
    | 'BUSINESS_AND_INDUSTRIAL_MARKETS'
    | 'FINANCE'
    | 'HEALTHCARE'
    | 'TECHNOLOGY'
    | 'TRAVEL'
    | 'OTHER'
    | 'ARTS_AND_ENTERTAINMENT'
    | 'BEAUTY_AND_FITNESS'
    | 'BOOKS_AND_LITERATURE'
    | 'FOOD_AND_DRINK'
    | 'GAMES'
    | 'HOBBIES_AND_LEISURE'
    | 'HOME_AND_GARDEN'
    | 'INTERNET_AND_TELECOM'
    | 'LAW_AND_GOVERNMENT'
    | 'NEWS'
    | 'ONLINE_COMMUNITIES'
    | 'PEOPLE_AND_SOCIETY'
    | 'PETS_AND_ANIMALS'
    | 'REAL_ESTATE'
    | 'REFERENCE'
    | 'SCIENCE'
    | 'SPORTS'
    | 'JOBS_AND_EDUCATION'
    | 'SHOPPING'
    | undefined
  name?: string | undefined
  parent?: string | undefined
  propertyType?:
    | 'PROPERTY_TYPE_UNSPECIFIED'
    | 'PROPERTY_TYPE_ORDINARY'
    | 'PROPERTY_TYPE_SUBPROPERTY'
    | 'PROPERTY_TYPE_ROLLUP'
    | undefined
  serviceLevel?:
    | 'SERVICE_LEVEL_UNSPECIFIED'
    | 'GOOGLE_ANALYTICS_STANDARD'
    | 'GOOGLE_ANALYTICS_360'
    | undefined
  timeZone?: string | undefined
  updateTime?: string | undefined
}
type GoogleAnalyticsAdminV1betaListPropertiesResponse = {
  nextPageToken?: string | undefined
  properties?: GoogleAnalyticsAdminV1betaProperty[] | undefined
}
type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest = {
  action?: ('ACTION_TYPE_UNSPECIFIED' | 'CREATED' | 'UPDATED' | 'DELETED')[] | undefined
  actorEmail?: string[] | undefined
  earliestChangeTime?: string | undefined
  latestChangeTime?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  property?: string | undefined
  resourceType?:
    | (
        | 'CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED'
        | 'ACCOUNT'
        | 'PROPERTY'
        | 'FIREBASE_LINK'
        | 'GOOGLE_ADS_LINK'
        | 'GOOGLE_SIGNALS_SETTINGS'
        | 'CONVERSION_EVENT'
        | 'MEASUREMENT_PROTOCOL_SECRET'
        | 'DATA_RETENTION_SETTINGS'
        | 'DISPLAY_VIDEO_360_ADVERTISER_LINK'
        | 'DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL'
        | 'DATA_STREAM'
        | 'ATTRIBUTION_SETTINGS'
      )[]
    | undefined
}
type GoogleAnalyticsAdminV1betaConversionEvent = {
  createTime?: string | undefined
  custom?: boolean | undefined
  deletable?: boolean | undefined
  eventName?: string | undefined
  name?: string | undefined
}
type GoogleAnalyticsAdminV1betaDataRetentionSettings = {
  eventDataRetention?:
    | 'RETENTION_DURATION_UNSPECIFIED'
    | 'TWO_MONTHS'
    | 'FOURTEEN_MONTHS'
    | 'TWENTY_SIX_MONTHS'
    | 'THIRTY_EIGHT_MONTHS'
    | 'FIFTY_MONTHS'
    | undefined
  name?: string | undefined
  resetUserDataOnNewActivity?: boolean | undefined
}
type GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData = {
  firebaseAppId?: string | undefined
  packageName?: string | undefined
}
type GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData = {
  bundleId?: string | undefined
  firebaseAppId?: string | undefined
}
type GoogleAnalyticsAdminV1betaDataStreamWebStreamData = {
  defaultUri?: string | undefined
  firebaseAppId?: string | undefined
  measurementId?: string | undefined
}
type GoogleAnalyticsAdminV1betaDataStream = {
  androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData | undefined
  name?: string | undefined
  type?:
    | 'DATA_STREAM_TYPE_UNSPECIFIED'
    | 'WEB_DATA_STREAM'
    | 'ANDROID_APP_DATA_STREAM'
    | 'IOS_APP_DATA_STREAM'
    | undefined
  updateTime?: string | undefined
  webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData | undefined
}
type GoogleAnalyticsAdminV1betaFirebaseLink = {
  createTime?: string | undefined
  name?: string | undefined
  project?: string | undefined
}
type GoogleAnalyticsAdminV1betaGoogleAdsLink = {
  adsPersonalizationEnabled?: boolean | undefined
  canManageClients?: boolean | undefined
  createTime?: string | undefined
  creatorEmailAddress?: string | undefined
  customerId?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GoogleAnalyticsAdminV1betaMeasurementProtocolSecret = {
  displayName?: string | undefined
  name?: string | undefined
  secretValue?: string | undefined
}
type GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource = {
  account?: GoogleAnalyticsAdminV1betaAccount | undefined
  conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent | undefined
  dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings | undefined
  dataStream?: GoogleAnalyticsAdminV1betaDataStream | undefined
  firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink | undefined
  googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink | undefined
  measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret | undefined
  property?: GoogleAnalyticsAdminV1betaProperty | undefined
}
type GoogleAnalyticsAdminV1betaChangeHistoryChange = {
  action?: 'ACTION_TYPE_UNSPECIFIED' | 'CREATED' | 'UPDATED' | 'DELETED' | undefined
  resource?: string | undefined
  resourceAfterChange?:
    | GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
    | undefined
  resourceBeforeChange?:
    | GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
    | undefined
}
type GoogleAnalyticsAdminV1betaChangeHistoryEvent = {
  actorType?: 'ACTOR_TYPE_UNSPECIFIED' | 'USER' | 'SYSTEM' | 'SUPPORT' | undefined
  changeTime?: string | undefined
  changes?: GoogleAnalyticsAdminV1betaChangeHistoryChange[] | undefined
  changesFiltered?: boolean | undefined
  id?: string | undefined
  userActorEmail?: string | undefined
}
type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse = {
  changeHistoryEvents?: GoogleAnalyticsAdminV1betaChangeHistoryEvent[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaAccessDateRange = {
  endDate?: string | undefined
  startDate?: string | undefined
}
type GoogleAnalyticsAdminV1betaNumericValue = {
  doubleValue?: number | undefined
  int64Value?: string | undefined
}
type GoogleAnalyticsAdminV1betaAccessBetweenFilter = {
  fromValue?: GoogleAnalyticsAdminV1betaNumericValue | undefined
  toValue?: GoogleAnalyticsAdminV1betaNumericValue | undefined
}
type GoogleAnalyticsAdminV1betaAccessInListFilter = {
  caseSensitive?: boolean | undefined
  values?: string[] | undefined
}
type GoogleAnalyticsAdminV1betaAccessNumericFilter = {
  operation?:
    | 'OPERATION_UNSPECIFIED'
    | 'EQUAL'
    | 'LESS_THAN'
    | 'LESS_THAN_OR_EQUAL'
    | 'GREATER_THAN'
    | 'GREATER_THAN_OR_EQUAL'
    | undefined
  value?: GoogleAnalyticsAdminV1betaNumericValue | undefined
}
type GoogleAnalyticsAdminV1betaAccessStringFilter = {
  caseSensitive?: boolean | undefined
  matchType?:
    | 'MATCH_TYPE_UNSPECIFIED'
    | 'EXACT'
    | 'BEGINS_WITH'
    | 'ENDS_WITH'
    | 'CONTAINS'
    | 'FULL_REGEXP'
    | 'PARTIAL_REGEXP'
    | undefined
  value?: string | undefined
}
type GoogleAnalyticsAdminV1betaAccessFilter = {
  betweenFilter?: GoogleAnalyticsAdminV1betaAccessBetweenFilter | undefined
  fieldName?: string | undefined
  inListFilter?: GoogleAnalyticsAdminV1betaAccessInListFilter | undefined
  numericFilter?: GoogleAnalyticsAdminV1betaAccessNumericFilter | undefined
  stringFilter?: GoogleAnalyticsAdminV1betaAccessStringFilter | undefined
}
type GoogleAnalyticsAdminV1betaAccessFilterExpressionList = {
  expressions?: GoogleAnalyticsAdminV1betaAccessFilterExpression[] | undefined
}
type GoogleAnalyticsAdminV1betaAccessFilterExpression = {
  accessFilter?: GoogleAnalyticsAdminV1betaAccessFilter | undefined
  andGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList | undefined
  notExpression?: GoogleAnalyticsAdminV1betaAccessFilterExpression | undefined
  orGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList | undefined
}
type GoogleAnalyticsAdminV1betaAccessDimension = { dimensionName?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessMetric = { metricName?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy = {
  dimensionName?: string | undefined
  orderType?:
    | 'ORDER_TYPE_UNSPECIFIED'
    | 'ALPHANUMERIC'
    | 'CASE_INSENSITIVE_ALPHANUMERIC'
    | 'NUMERIC'
    | undefined
}
type GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy = { metricName?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessOrderBy = {
  desc?: boolean | undefined
  dimension?: GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy | undefined
  metric?: GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy | undefined
}
type GoogleAnalyticsAdminV1betaRunAccessReportRequest = {
  dateRanges?: GoogleAnalyticsAdminV1betaAccessDateRange[] | undefined
  dimensionFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression | undefined
  dimensions?: GoogleAnalyticsAdminV1betaAccessDimension[] | undefined
  limit?: string | undefined
  metricFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression | undefined
  metrics?: GoogleAnalyticsAdminV1betaAccessMetric[] | undefined
  offset?: string | undefined
  orderBys?: GoogleAnalyticsAdminV1betaAccessOrderBy[] | undefined
  returnEntityQuota?: boolean | undefined
  timeZone?: string | undefined
}
type GoogleAnalyticsAdminV1betaAccessDimensionHeader = { dimensionName?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessMetricHeader = { metricName?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessQuotaStatus = {
  consumed?: number | undefined
  remaining?: number | undefined
}
type GoogleAnalyticsAdminV1betaAccessQuota = {
  concurrentRequests?: GoogleAnalyticsAdminV1betaAccessQuotaStatus | undefined
  serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus | undefined
  tokensPerDay?: GoogleAnalyticsAdminV1betaAccessQuotaStatus | undefined
  tokensPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus | undefined
  tokensPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus | undefined
}
type GoogleAnalyticsAdminV1betaAccessDimensionValue = { value?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessMetricValue = { value?: string | undefined }
type GoogleAnalyticsAdminV1betaAccessRow = {
  dimensionValues?: GoogleAnalyticsAdminV1betaAccessDimensionValue[] | undefined
  metricValues?: GoogleAnalyticsAdminV1betaAccessMetricValue[] | undefined
}
type GoogleAnalyticsAdminV1betaRunAccessReportResponse = {
  dimensionHeaders?: GoogleAnalyticsAdminV1betaAccessDimensionHeader[] | undefined
  metricHeaders?: GoogleAnalyticsAdminV1betaAccessMetricHeader[] | undefined
  quota?: GoogleAnalyticsAdminV1betaAccessQuota | undefined
  rowCount?: number | undefined
  rows?: GoogleAnalyticsAdminV1betaAccessRow[] | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest = { [x: string]: unknown }
type GoogleAnalyticsAdminV1betaListConversionEventsResponse = {
  conversionEvents?: GoogleAnalyticsAdminV1betaConversionEvent[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaCustomDimension = {
  description?: string | undefined
  disallowAdsPersonalization?: boolean | undefined
  displayName?: string | undefined
  name?: string | undefined
  parameterName?: string | undefined
  scope?: 'DIMENSION_SCOPE_UNSPECIFIED' | 'EVENT' | 'USER' | 'ITEM' | undefined
}
type GoogleAnalyticsAdminV1betaListCustomDimensionsResponse = {
  customDimensions?: GoogleAnalyticsAdminV1betaCustomDimension[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaCustomMetric = {
  description?: string | undefined
  displayName?: string | undefined
  measurementUnit?:
    | 'MEASUREMENT_UNIT_UNSPECIFIED'
    | 'STANDARD'
    | 'CURRENCY'
    | 'FEET'
    | 'METERS'
    | 'KILOMETERS'
    | 'MILES'
    | 'MILLISECONDS'
    | 'SECONDS'
    | 'MINUTES'
    | 'HOURS'
    | undefined
  name?: string | undefined
  parameterName?: string | undefined
  restrictedMetricType?:
    | ('RESTRICTED_METRIC_TYPE_UNSPECIFIED' | 'COST_DATA' | 'REVENUE_DATA')[]
    | undefined
  scope?: 'METRIC_SCOPE_UNSPECIFIED' | 'EVENT' | undefined
}
type GoogleAnalyticsAdminV1betaListCustomMetricsResponse = {
  customMetrics?: GoogleAnalyticsAdminV1betaCustomMetric[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaListDataStreamsResponse = {
  dataStreams?: GoogleAnalyticsAdminV1betaDataStream[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaListFirebaseLinksResponse = {
  firebaseLinks?: GoogleAnalyticsAdminV1betaFirebaseLink[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse = {
  googleAdsLinks?: GoogleAnalyticsAdminV1betaGoogleAdsLink[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse = {
  measurementProtocolSecrets?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[] | undefined
  nextPageToken?: string | undefined
}
type GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest = {
  acknowledgement?: string | undefined
}
type GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/accountSummaries': {
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
        output: GoogleAnalyticsAdminV1betaListAccountSummariesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/accounts': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleAnalyticsAdminV1betaListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/accounts:provisionAccountTicket': {
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
        } & { json: GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest }
        output: GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/properties': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleAnalyticsAdminV1betaListPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleAnalyticsAdminV1betaProperty }
        output: GoogleAnalyticsAdminV1betaProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:account:searchChangeHistoryEvents': {
      $post: {
        input: { param: { account: string } } & {
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
        } & { json: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest }
        output: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:entity:runAccessReport': {
      $post: {
        input: { param: { entity: string } } & {
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
        } & { json: GoogleAnalyticsAdminV1betaRunAccessReportRequest }
        output: GoogleAnalyticsAdminV1betaRunAccessReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
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
        output: GoogleProtobufEmpty
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
        output: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
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
        } & { json: GoogleAnalyticsAdminV1betaGoogleAdsLink }
        output: GoogleAnalyticsAdminV1betaGoogleAdsLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:archive': {
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
        } & { json: GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/conversionEvents': {
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
        output: GoogleAnalyticsAdminV1betaListConversionEventsResponse
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
        } & { json: GoogleAnalyticsAdminV1betaConversionEvent }
        output: GoogleAnalyticsAdminV1betaConversionEvent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/customDimensions': {
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
        output: GoogleAnalyticsAdminV1betaListCustomDimensionsResponse
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
        } & { json: GoogleAnalyticsAdminV1betaCustomDimension }
        output: GoogleAnalyticsAdminV1betaCustomDimension
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/customMetrics': {
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
        output: GoogleAnalyticsAdminV1betaListCustomMetricsResponse
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
        } & { json: GoogleAnalyticsAdminV1betaCustomMetric }
        output: GoogleAnalyticsAdminV1betaCustomMetric
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/dataStreams': {
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
        output: GoogleAnalyticsAdminV1betaListDataStreamsResponse
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
        } & { json: GoogleAnalyticsAdminV1betaDataStream }
        output: GoogleAnalyticsAdminV1betaDataStream
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/firebaseLinks': {
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
        output: GoogleAnalyticsAdminV1betaListFirebaseLinksResponse
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
        } & { json: GoogleAnalyticsAdminV1betaFirebaseLink }
        output: GoogleAnalyticsAdminV1betaFirebaseLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/googleAdsLinks': {
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
        output: GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse
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
        } & { json: GoogleAnalyticsAdminV1betaGoogleAdsLink }
        output: GoogleAnalyticsAdminV1betaGoogleAdsLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/measurementProtocolSecrets': {
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
        output: GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse
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
        } & { json: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret }
        output: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:acknowledgeUserDataCollection': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest }
        output: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

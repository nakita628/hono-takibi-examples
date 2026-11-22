type DebugOptions = { enableDebugging?: boolean | undefined }
type SearchItemsByViewUrlRequest = {
  debugOptions?: DebugOptions | undefined
  pageToken?: string | undefined
  viewUrl?: string | undefined
}
type GSuitePrincipal = {
  gsuiteDomain?: boolean | undefined
  gsuiteGroupEmail?: string | undefined
  gsuiteUserEmail?: string | undefined
}
type Principal = {
  groupResourceName?: string | undefined
  gsuitePrincipal?: GSuitePrincipal | undefined
  userResourceName?: string | undefined
}
type ItemAcl = {
  aclInheritanceType?:
    | 'NOT_APPLICABLE'
    | 'CHILD_OVERRIDE'
    | 'PARENT_OVERRIDE'
    | 'BOTH_PERMIT'
    | undefined
  deniedReaders?: Principal[] | undefined
  inheritAclFrom?: string | undefined
  owners?: Principal[] | undefined
  readers?: Principal[] | undefined
}
type UploadItemRef = { name?: string | undefined }
type ItemContent = {
  contentDataRef?: UploadItemRef | undefined
  contentFormat?: 'UNSPECIFIED' | 'HTML' | 'TEXT' | 'RAW' | undefined
  hash?: string | undefined
  inlineContent?: string | undefined
}
type ContextAttribute = { name?: string | undefined; values?: string[] | undefined }
type Interaction = {
  interactionTime?: string | undefined
  principal?: Principal | undefined
  type?: 'UNSPECIFIED' | 'VIEW' | 'EDIT' | undefined
}
type SearchQualityMetadata = { quality?: number | undefined }
type ItemMetadata = {
  containerName?: string | undefined
  contentLanguage?: string | undefined
  contextAttributes?: ContextAttribute[] | undefined
  createTime?: string | undefined
  hash?: string | undefined
  interactions?: Interaction[] | undefined
  keywords?: string[] | undefined
  mimeType?: string | undefined
  objectType?: string | undefined
  searchQualityMetadata?: SearchQualityMetadata | undefined
  sourceRepositoryUrl?: string | undefined
  title?: string | undefined
  updateTime?: string | undefined
}
type FieldViolation = { description?: string | undefined; field?: string | undefined }
type ProcessingError = {
  code?:
    | 'PROCESSING_ERROR_CODE_UNSPECIFIED'
    | 'MALFORMED_REQUEST'
    | 'UNSUPPORTED_CONTENT_FORMAT'
    | 'INDIRECT_BROKEN_ACL'
    | 'ACL_CYCLE'
    | undefined
  errorMessage?: string | undefined
  fieldViolations?: FieldViolation[] | undefined
}
type RepositoryError = {
  errorMessage?: string | undefined
  httpStatusCode?: number | undefined
  type?:
    | 'UNKNOWN'
    | 'NETWORK_ERROR'
    | 'DNS_ERROR'
    | 'CONNECTION_ERROR'
    | 'AUTHENTICATION_ERROR'
    | 'AUTHORIZATION_ERROR'
    | 'SERVER_ERROR'
    | 'QUOTA_EXCEEDED'
    | 'SERVICE_UNAVAILABLE'
    | 'CLIENT_ERROR'
    | undefined
}
type ItemStatus = {
  code?: 'CODE_UNSPECIFIED' | 'ERROR' | 'MODIFIED' | 'NEW_ITEM' | 'ACCEPTED' | undefined
  processingErrors?: ProcessingError[] | undefined
  repositoryErrors?: RepositoryError[] | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type DateValues = { values?: Date[] | undefined }
type DoubleValues = { values?: number[] | undefined }
type EnumValues = { values?: string[] | undefined }
type HtmlValues = { values?: string[] | undefined }
type IntegerValues = { values?: string[] | undefined }
type ObjectValues = { values?: StructuredDataObject[] | undefined }
type TextValues = { values?: string[] | undefined }
type TimestampValues = { values?: string[] | undefined }
type NamedProperty = {
  booleanValue?: boolean | undefined
  dateValues?: DateValues | undefined
  doubleValues?: DoubleValues | undefined
  enumValues?: EnumValues | undefined
  htmlValues?: HtmlValues | undefined
  integerValues?: IntegerValues | undefined
  name?: string | undefined
  objectValues?: ObjectValues | undefined
  textValues?: TextValues | undefined
  timestampValues?: TimestampValues | undefined
}
type StructuredDataObject = { properties?: NamedProperty[] | undefined }
type ItemStructuredData = { hash?: string | undefined; object?: StructuredDataObject | undefined }
type Item = {
  acl?: ItemAcl | undefined
  content?: ItemContent | undefined
  itemType?:
    | 'UNSPECIFIED'
    | 'CONTENT_ITEM'
    | 'CONTAINER_ITEM'
    | 'VIRTUAL_CONTAINER_ITEM'
    | undefined
  metadata?: ItemMetadata | undefined
  name?: string | undefined
  payload?: string | undefined
  queue?: string | undefined
  status?: ItemStatus | undefined
  structuredData?: ItemStructuredData | undefined
  version?: string | undefined
}
type SearchItemsByViewUrlResponse = {
  items?: Item[] | undefined
  nextPageToken?: string | undefined
}
type CheckAccessResponse = { hasAccess?: boolean | undefined }
type ListItemNamesForUnmappedIdentityResponse = {
  itemNames?: string[] | undefined
  nextPageToken?: string | undefined
}
type UnmappedIdentity = {
  externalIdentity?: Principal | undefined
  resolutionStatusCode?:
    | 'CODE_UNSPECIFIED'
    | 'NOT_FOUND'
    | 'IDENTITY_SOURCE_NOT_FOUND'
    | 'IDENTITY_SOURCE_MISCONFIGURED'
    | 'TOO_MANY_MAPPINGS_FOUND'
    | 'INTERNAL_ERROR'
    | undefined
}
type ListUnmappedIdentitiesResponse = {
  nextPageToken?: string | undefined
  unmappedIdentities?: UnmappedIdentity[] | undefined
}
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
type ListItemsResponse = { items?: Item[] | undefined; nextPageToken?: string | undefined }
type DeleteQueueItemsRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
  queue?: string | undefined
}
type PollItemsRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
  limit?: number | undefined
  queue?: string | undefined
  statusCodes?: ('CODE_UNSPECIFIED' | 'ERROR' | 'MODIFIED' | 'NEW_ITEM' | 'ACCEPTED')[] | undefined
}
type PollItemsResponse = { items?: Item[] | undefined }
type UnreserveItemsRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
  queue?: string | undefined
}
type DisplayedProperty = { propertyName?: string | undefined }
type Metaline = { properties?: DisplayedProperty[] | undefined }
type ObjectDisplayOptions = {
  metalines?: Metaline[] | undefined
  objectDisplayLabel?: string | undefined
}
type FreshnessOptions = {
  freshnessDuration?: string | undefined
  freshnessProperty?: string | undefined
}
type ObjectOptions = {
  displayOptions?: ObjectDisplayOptions | undefined
  freshnessOptions?: FreshnessOptions | undefined
  suggestionFilteringOperators?: string[] | undefined
}
type BooleanOperatorOptions = { operatorName?: string | undefined }
type BooleanPropertyOptions = { operatorOptions?: BooleanOperatorOptions | undefined }
type DateOperatorOptions = {
  greaterThanOperatorName?: string | undefined
  lessThanOperatorName?: string | undefined
  operatorName?: string | undefined
}
type DatePropertyOptions = { operatorOptions?: DateOperatorOptions | undefined }
type PropertyDisplayOptions = { displayLabel?: string | undefined }
type DoubleOperatorOptions = { operatorName?: string | undefined }
type DoublePropertyOptions = { operatorOptions?: DoubleOperatorOptions | undefined }
type EnumOperatorOptions = { operatorName?: string | undefined }
type EnumValuePair = { integerValue?: number | undefined; stringValue?: string | undefined }
type EnumPropertyOptions = {
  operatorOptions?: EnumOperatorOptions | undefined
  orderedRanking?: 'NO_ORDER' | 'ASCENDING' | 'DESCENDING' | undefined
  possibleValues?: EnumValuePair[] | undefined
}
type HtmlOperatorOptions = { operatorName?: string | undefined }
type RetrievalImportance = {
  importance?: 'DEFAULT' | 'HIGHEST' | 'HIGH' | 'LOW' | 'NONE' | undefined
}
type HtmlPropertyOptions = {
  operatorOptions?: HtmlOperatorOptions | undefined
  retrievalImportance?: RetrievalImportance | undefined
}
type IntegerFacetingOptions = { integerBuckets?: string[] | undefined }
type IntegerOperatorOptions = {
  greaterThanOperatorName?: string | undefined
  lessThanOperatorName?: string | undefined
  operatorName?: string | undefined
}
type IntegerPropertyOptions = {
  integerFacetingOptions?: IntegerFacetingOptions | undefined
  maximumValue?: string | undefined
  minimumValue?: string | undefined
  operatorOptions?: IntegerOperatorOptions | undefined
  orderedRanking?: 'NO_ORDER' | 'ASCENDING' | 'DESCENDING' | undefined
}
type ObjectPropertyOptions = { subobjectProperties?: PropertyDefinition[] | undefined }
type TextOperatorOptions = {
  exactMatchWithOperator?: boolean | undefined
  operatorName?: string | undefined
}
type TextPropertyOptions = {
  operatorOptions?: TextOperatorOptions | undefined
  retrievalImportance?: RetrievalImportance | undefined
}
type TimestampOperatorOptions = {
  greaterThanOperatorName?: string | undefined
  lessThanOperatorName?: string | undefined
  operatorName?: string | undefined
}
type TimestampPropertyOptions = { operatorOptions?: TimestampOperatorOptions | undefined }
type PropertyDefinition = {
  booleanPropertyOptions?: BooleanPropertyOptions | undefined
  datePropertyOptions?: DatePropertyOptions | undefined
  displayOptions?: PropertyDisplayOptions | undefined
  doublePropertyOptions?: DoublePropertyOptions | undefined
  enumPropertyOptions?: EnumPropertyOptions | undefined
  htmlPropertyOptions?: HtmlPropertyOptions | undefined
  integerPropertyOptions?: IntegerPropertyOptions | undefined
  isFacetable?: boolean | undefined
  isRepeatable?: boolean | undefined
  isReturnable?: boolean | undefined
  isSortable?: boolean | undefined
  isSuggestable?: boolean | undefined
  isWildcardSearchable?: boolean | undefined
  name?: string | undefined
  objectPropertyOptions?: ObjectPropertyOptions | undefined
  textPropertyOptions?: TextPropertyOptions | undefined
  timestampPropertyOptions?: TimestampPropertyOptions | undefined
}
type ObjectDefinition = {
  name?: string | undefined
  options?: ObjectOptions | undefined
  propertyDefinitions?: PropertyDefinition[] | undefined
}
type Schema = {
  objectDefinitions?: ObjectDefinition[] | undefined
  operationIds?: string[] | undefined
}
type UpdateSchemaRequest = {
  debugOptions?: DebugOptions | undefined
  schema?: Schema | undefined
  validateOnly?: boolean | undefined
}
type IndexItemOptions = { allowUnknownGsuitePrincipals?: boolean | undefined }
type IndexItemRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
  indexItemOptions?: IndexItemOptions | undefined
  item?: Item | undefined
  mode?: 'UNSPECIFIED' | 'SYNCHRONOUS' | 'ASYNCHRONOUS' | undefined
}
type PushItem = {
  contentHash?: string | undefined
  metadataHash?: string | undefined
  payload?: string | undefined
  queue?: string | undefined
  repositoryError?: RepositoryError | undefined
  structuredDataHash?: string | undefined
  type?: 'UNSPECIFIED' | 'MODIFIED' | 'NOT_MODIFIED' | 'REPOSITORY_ERROR' | 'REQUEUE' | undefined
}
type PushItemRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
  item?: PushItem | undefined
}
type StartUploadItemRequest = {
  connectorName?: string | undefined
  debugOptions?: DebugOptions | undefined
}
type Media = { resourceName?: string | undefined }
type CompositeFilter = {
  logicOperator?: 'AND' | 'OR' | 'NOT' | undefined
  subFilters?: Filter[] | undefined
}
type Value = {
  booleanValue?: boolean | undefined
  dateValue?: Date | undefined
  doubleValue?: number | undefined
  integerValue?: string | undefined
  stringValue?: string | undefined
  timestampValue?: string | undefined
}
type ValueFilter = { operatorName?: string | undefined; value?: Value | undefined }
type Filter = {
  compositeFilter?: CompositeFilter | undefined
  valueFilter?: ValueFilter | undefined
}
type FilterOptions = { filter?: Filter | undefined; objectType?: string | undefined }
type Source = {
  name?: string | undefined
  predefinedSource?:
    | 'NONE'
    | 'QUERY_HISTORY'
    | 'PERSON'
    | 'GOOGLE_DRIVE'
    | 'GOOGLE_GMAIL'
    | 'GOOGLE_SITES'
    | 'GOOGLE_GROUPS'
    | 'GOOGLE_CALENDAR'
    | 'GOOGLE_KEEP'
    | undefined
}
type DataSourceRestriction = {
  filterOptions?: FilterOptions[] | undefined
  source?: Source | undefined
}
type FacetOptions = {
  integerFacetingOptions?: IntegerFacetingOptions | undefined
  numFacetBuckets?: number | undefined
  objectType?: string | undefined
  operatorName?: string | undefined
  sourceName?: string | undefined
}
type QueryInterpretationOptions = {
  disableNlInterpretation?: boolean | undefined
  disableSupplementalResults?: boolean | undefined
  enableVerbatimMode?: boolean | undefined
}
type RequestOptions = {
  debugOptions?: DebugOptions | undefined
  languageCode?: string | undefined
  searchApplicationId?: string | undefined
  timeZone?: string | undefined
}
type SortOptions = {
  operatorName?: string | undefined
  sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
}
type SearchRequest = {
  contextAttributes?: ContextAttribute[] | undefined
  dataSourceRestrictions?: DataSourceRestriction[] | undefined
  facetOptions?: FacetOptions[] | undefined
  pageSize?: number | undefined
  query?: string | undefined
  queryInterpretationOptions?: QueryInterpretationOptions | undefined
  requestOptions?: RequestOptions | undefined
  sortOptions?: SortOptions | undefined
  start?: number | undefined
}
type ResponseDebugInfo = { formattedDebugInfo?: string | undefined }
type ErrorMessage = { errorMessage?: string | undefined; source?: Source | undefined }
type ErrorInfo = { errorMessages?: ErrorMessage[] | undefined }
type FacetBucket = {
  count?: number | undefined
  filter?: Filter | undefined
  percentage?: number | undefined
  value?: Value | undefined
}
type FacetResult = {
  buckets?: FacetBucket[] | undefined
  objectType?: string | undefined
  operatorName?: string | undefined
  sourceName?: string | undefined
}
type QueryInterpretation = {
  interpretationType?: 'NONE' | 'BLEND' | 'REPLACE' | undefined
  interpretedQuery?: string | undefined
  reason?:
    | 'UNSPECIFIED'
    | 'QUERY_HAS_NATURAL_LANGUAGE_INTENT'
    | 'NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY'
    | undefined
}
type SourceResultCount = {
  hasMoreResults?: boolean | undefined
  resultCountEstimate?: string | undefined
  resultCountExact?: string | undefined
  source?: Source | undefined
}
type ResultCounts = { sourceResultCounts?: SourceResultCount[] | undefined }
type ResultDebugInfo = { formattedDebugInfo?: string | undefined }
type ResultDisplayField = {
  label?: string | undefined
  operatorName?: string | undefined
  property?: NamedProperty | undefined
}
type ResultDisplayLine = { fields?: ResultDisplayField[] | undefined }
type ResultDisplayMetadata = {
  metalines?: ResultDisplayLine[] | undefined
  objectTypeLabel?: string | undefined
}
type EmailAddress = {
  customType?: string | undefined
  emailAddress?: string | undefined
  emailUrl?: string | undefined
  primary?: boolean | undefined
  type?: string | undefined
}
type Name = { displayName?: string | undefined }
type PhoneNumber = {
  phoneNumber?: string | undefined
  type?: 'OTHER' | 'MOBILE' | 'OFFICE' | undefined
}
type Photo = { url?: string | undefined }
type Person = {
  emailAddresses?: EmailAddress[] | undefined
  name?: string | undefined
  obfuscatedId?: string | undefined
  personNames?: Name[] | undefined
  phoneNumbers?: PhoneNumber[] | undefined
  photos?: Photo[] | undefined
}
type Metadata = {
  createTime?: string | undefined
  displayOptions?: ResultDisplayMetadata | undefined
  fields?: NamedProperty[] | undefined
  mimeType?: string | undefined
  objectType?: string | undefined
  owner?: Person | undefined
  source?: Source | undefined
  thumbnailUrl?: string | undefined
  updateTime?: string | undefined
}
type MatchRange = { end?: number | undefined; start?: number | undefined }
type Snippet = { matchRanges?: MatchRange[] | undefined; snippet?: string | undefined }
type SearchResult = {
  clusteredResults?: SearchResult[] | undefined
  debugInfo?: ResultDebugInfo | undefined
  metadata?: Metadata | undefined
  snippet?: Snippet | undefined
  title?: string | undefined
  url?: string | undefined
}
type SpellResult = { suggestedQuery?: string | undefined }
type StructuredResult = { person?: Person | undefined }
type SearchResponse = {
  debugInfo?: ResponseDebugInfo | undefined
  errorInfo?: ErrorInfo | undefined
  facetResults?: FacetResult[] | undefined
  hasMoreResults?: boolean | undefined
  queryInterpretation?: QueryInterpretation | undefined
  resultCountEstimate?: string | undefined
  resultCountExact?: string | undefined
  resultCounts?: ResultCounts | undefined
  results?: SearchResult[] | undefined
  spellResults?: SpellResult[] | undefined
  structuredResults?: StructuredResult[] | undefined
}
type QueryOperator = {
  displayName?: string | undefined
  enumValues?: string[] | undefined
  greaterThanOperatorName?: string | undefined
  isFacetable?: boolean | undefined
  isRepeatable?: boolean | undefined
  isReturnable?: boolean | undefined
  isSortable?: boolean | undefined
  isSuggestable?: boolean | undefined
  lessThanOperatorName?: string | undefined
  objectType?: string | undefined
  operatorName?: string | undefined
  type?:
    | 'UNKNOWN'
    | 'INTEGER'
    | 'DOUBLE'
    | 'TIMESTAMP'
    | 'BOOLEAN'
    | 'ENUM'
    | 'DATE'
    | 'TEXT'
    | 'HTML'
    | undefined
}
type QuerySource = {
  displayName?: string | undefined
  operators?: QueryOperator[] | undefined
  shortName?: string | undefined
  source?: Source | undefined
}
type ListQuerySourcesResponse = {
  nextPageToken?: string | undefined
  sources?: QuerySource[] | undefined
}
type SuggestRequest = {
  dataSourceRestrictions?: DataSourceRestriction[] | undefined
  query?: string | undefined
  requestOptions?: RequestOptions | undefined
}
type PeopleSuggestion = { person?: Person | undefined }
type QuerySuggestion = { [x: string]: unknown }
type SuggestResult = {
  peopleSuggestion?: PeopleSuggestion | undefined
  querySuggestion?: QuerySuggestion | undefined
  source?: Source | undefined
  suggestedQuery?: string | undefined
}
type SuggestResponse = { suggestResults?: SuggestResult[] | undefined }
type AuditLoggingSettings = {
  logAdminReadActions?: boolean | undefined
  logDataReadActions?: boolean | undefined
  logDataWriteActions?: boolean | undefined
  project?: string | undefined
}
type VPCSettings = { project?: string | undefined }
type CustomerSettings = {
  auditLoggingSettings?: AuditLoggingSettings | undefined
  vpcSettings?: VPCSettings | undefined
}
type DataSource = {
  disableModifications?: boolean | undefined
  disableServing?: boolean | undefined
  displayName?: string | undefined
  indexingServiceAccounts?: string[] | undefined
  itemsVisibility?: GSuitePrincipal[] | undefined
  name?: string | undefined
  operationIds?: string[] | undefined
  returnThumbnailUrls?: boolean | undefined
  shortName?: string | undefined
}
type ListDataSourceResponse = {
  nextPageToken?: string | undefined
  sources?: DataSource[] | undefined
}
type QueryInterpretationConfig = {
  forceDisableSupplementalResults?: boolean | undefined
  forceVerbatimMode?: boolean | undefined
}
type ScoringConfig = {
  disableFreshness?: boolean | undefined
  disablePersonalization?: boolean | undefined
}
type SourceCrowdingConfig = { numResults?: number | undefined; numSuggestions?: number | undefined }
type SourceScoringConfig = { sourceImportance?: 'DEFAULT' | 'LOW' | 'HIGH' | undefined }
type SourceConfig = {
  crowdingConfig?: SourceCrowdingConfig | undefined
  scoringConfig?: SourceScoringConfig | undefined
  source?: Source | undefined
}
type SearchApplication = {
  dataSourceRestrictions?: DataSourceRestriction[] | undefined
  defaultFacetOptions?: FacetOptions[] | undefined
  defaultSortOptions?: SortOptions | undefined
  displayName?: string | undefined
  enableAuditLog?: boolean | undefined
  name?: string | undefined
  operationIds?: string[] | undefined
  queryInterpretationConfig?: QueryInterpretationConfig | undefined
  returnResultThumbnailUrls?: boolean | undefined
  scoringConfig?: ScoringConfig | undefined
  sourceConfig?: SourceConfig[] | undefined
}
type ListSearchApplicationsResponse = {
  nextPageToken?: string | undefined
  searchApplications?: SearchApplication[] | undefined
}
type ResetSearchApplicationRequest = { debugOptions?: DebugOptions | undefined }
type ItemCountByStatus = {
  count?: string | undefined
  indexedItemsCount?: string | undefined
  statusCode?: 'CODE_UNSPECIFIED' | 'ERROR' | 'MODIFIED' | 'NEW_ITEM' | 'ACCEPTED' | undefined
}
type CustomerIndexStats = {
  date?: Date | undefined
  itemCountByStatus?: ItemCountByStatus[] | undefined
}
type GetCustomerIndexStatsResponse = {
  averageIndexedItemCount?: string | undefined
  stats?: CustomerIndexStats[] | undefined
}
type DataSourceIndexStats = {
  date?: Date | undefined
  itemCountByStatus?: ItemCountByStatus[] | undefined
}
type GetDataSourceIndexStatsResponse = {
  averageIndexedItemCount?: string | undefined
  stats?: DataSourceIndexStats[] | undefined
}
type QueryCountByStatus = { count?: string | undefined; statusCode?: number | undefined }
type CustomerQueryStats = {
  date?: Date | undefined
  queryCountByStatus?: QueryCountByStatus[] | undefined
}
type GetCustomerQueryStatsResponse = {
  stats?: CustomerQueryStats[] | undefined
  totalQueryCount?: string | undefined
}
type SearchApplicationQueryStats = {
  date?: Date | undefined
  queryCountByStatus?: QueryCountByStatus[] | undefined
}
type GetSearchApplicationQueryStatsResponse = {
  stats?: SearchApplicationQueryStats[] | undefined
  totalQueryCount?: string | undefined
}
type CustomerSearchApplicationStats = { count?: string | undefined; date?: Date | undefined }
type GetCustomerSearchApplicationStatsResponse = {
  averageSearchApplicationCount?: string | undefined
  stats?: CustomerSearchApplicationStats[] | undefined
}
type CustomerSessionStats = { date?: Date | undefined; searchSessionsCount?: string | undefined }
type GetCustomerSessionStatsResponse = { stats?: CustomerSessionStats[] | undefined }
type SearchApplicationSessionStats = {
  date?: Date | undefined
  searchSessionsCount?: string | undefined
}
type GetSearchApplicationSessionStatsResponse = {
  stats?: SearchApplicationSessionStats[] | undefined
}
type CustomerUserStats = {
  date?: Date | undefined
  oneDayActiveUsersCount?: string | undefined
  sevenDaysActiveUsersCount?: string | undefined
  thirtyDaysActiveUsersCount?: string | undefined
}
type GetCustomerUserStatsResponse = { stats?: CustomerUserStats[] | undefined }
type SearchApplicationUserStats = {
  date?: Date | undefined
  oneDayActiveUsersCount?: string | undefined
  sevenDaysActiveUsersCount?: string | undefined
  thirtyDaysActiveUsersCount?: string | undefined
}
type GetSearchApplicationUserStatsResponse = { stats?: SearchApplicationUserStats[] | undefined }
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type InitializeCustomerRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/debug/:name/items:searchByViewUrl': {
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
        } & { json: SearchItemsByViewUrlRequest }
        output: SearchItemsByViewUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/debug/:name:checkAccess': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
        } & { json: Principal }
        output: CheckAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/debug/:parent/items:forunmappedidentity': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
            groupResourceName?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            userResourceName?: string | undefined
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
        output: ListItemNamesForUnmappedIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/debug/:parent/unmappedids': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            resolutionStatusCode?:
              | 'CODE_UNSPECIFIED'
              | 'NOT_FOUND'
              | 'IDENTITY_SOURCE_NOT_FOUND'
              | 'IDENTITY_SOURCE_MISCONFIGURED'
              | 'TOO_MANY_MAPPINGS_FOUND'
              | 'INTERNAL_ERROR'
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
        output: ListUnmappedIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            connectorName?: string | undefined
            'debugOptions.enableDebugging'?: boolean | undefined
            mode?: 'UNSPECIFIED' | 'SYNCHRONOUS' | 'ASYNCHRONOUS' | undefined
            version?: string | undefined
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
      $get: {
        input: { param: { name: string } } & {
          query: {
            connectorName?: string | undefined
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: Item
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name/items': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            brief?: boolean | undefined
            connectorName?: string | undefined
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: ListItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name/items:deleteQueueItems': {
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
        } & { json: DeleteQueueItemsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name/items:poll': {
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
        } & { json: PollItemsRequest }
        output: PollItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name/items:unreserve': {
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
        } & { json: UnreserveItemsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name/schema': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
      $get: {
        input: { param: { name: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: Schema
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: UpdateSchemaRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name:index': {
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
        } & { json: IndexItemRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name:push': {
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
        } & { json: PushItemRequest }
        output: Item
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/indexing/:name:upload': {
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
        } & { json: StartUploadItemRequest }
        output: UploadItemRef
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/media/:resourceName': {
      $post: {
        input: { param: { resourceName: string } } & {
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
        } & { json: Media }
        output: Media
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/query/search': {
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
        } & { json: SearchRequest }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/query/sources': {
      $get: {
        input: {
          query: {
            pageToken?: string | undefined
            'requestOptions.debugOptions.enableDebugging'?: boolean | undefined
            'requestOptions.languageCode'?: string | undefined
            'requestOptions.searchApplicationId'?: string | undefined
            'requestOptions.timeZone'?: string | undefined
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
        output: ListQuerySourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/query/suggest': {
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
        } & { json: SuggestRequest }
        output: SuggestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/settings/customer': {
      $get: {
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
        }
        output: CustomerSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
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
        } & { json: CustomerSettings }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/settings/datasources': {
      $get: {
        input: {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: ListDataSourceResponse
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
        } & { json: DataSource }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/settings/searchapplications': {
      $get: {
        input: {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: ListSearchApplicationsResponse
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
        } & { json: SearchApplication }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/settings/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
      $get: {
        input: { param: { name: string } } & {
          query: {
            'debugOptions.enableDebugging'?: boolean | undefined
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
        output: SearchApplication
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
        } & { json: SearchApplication }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: SearchApplication }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/settings/:name:reset': {
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
        } & { json: ResetSearchApplicationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/index': {
      $get: {
        input: {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetCustomerIndexStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/index/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetDataSourceIndexStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/query': {
      $get: {
        input: {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetCustomerQueryStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/query/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetSearchApplicationQueryStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/searchapplication': {
      $get: {
        input: {
          query: {
            'endDate.day'?: number | undefined
            'endDate.month'?: number | undefined
            'endDate.year'?: number | undefined
            'startDate.day'?: number | undefined
            'startDate.month'?: number | undefined
            'startDate.year'?: number | undefined
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
        output: GetCustomerSearchApplicationStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/session': {
      $get: {
        input: {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetCustomerSessionStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/session/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetSearchApplicationSessionStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/user': {
      $get: {
        input: {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetCustomerUserStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stats/user/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            'fromDate.day'?: number | undefined
            'fromDate.month'?: number | undefined
            'fromDate.year'?: number | undefined
            'toDate.day'?: number | undefined
            'toDate.month'?: number | undefined
            'toDate.year'?: number | undefined
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
        output: GetSearchApplicationUserStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
    }
  } & {
    '/v1/:name/lro': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1:initializeCustomer': {
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
        } & { json: InitializeCustomerRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

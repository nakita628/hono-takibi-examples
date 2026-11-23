type GaData = {
  columnHeaders?:
    | {
        columnType?: string | undefined
        dataType?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  containsSampledData?: boolean | undefined
  dataLastRefreshed?: string | undefined
  dataTable?:
    | {
        cols?:
          | { id?: string | undefined; label?: string | undefined; type?: string | undefined }[]
          | undefined
        rows?: { c?: { v?: string | undefined }[] | undefined }[] | undefined
      }
    | undefined
  id?: string | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  profileInfo?:
    | {
        accountId?: string | undefined
        internalWebPropertyId?: string | undefined
        profileId?: string | undefined
        profileName?: string | undefined
        tableId?: string | undefined
        webPropertyId?: string | undefined
      }
    | undefined
  query?:
    | {
        dimensions?: string | undefined
        'end-date'?: string | undefined
        filters?: string | undefined
        ids?: string | undefined
        'max-results'?: number | undefined
        metrics?: string[] | undefined
        samplingLevel?: string | undefined
        segment?: string | undefined
        sort?: string[] | undefined
        'start-date'?: string | undefined
        'start-index'?: number | undefined
      }
    | undefined
  rows?: string[][] | undefined
  sampleSize?: string | undefined
  sampleSpace?: string | undefined
  selfLink?: string | undefined
  totalResults?: number | undefined
  totalsForAllResults?: { [x: string]: string } | undefined
}
type McfData = {
  columnHeaders?:
    | {
        columnType?: string | undefined
        dataType?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  containsSampledData?: boolean | undefined
  id?: string | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  profileInfo?:
    | {
        accountId?: string | undefined
        internalWebPropertyId?: string | undefined
        profileId?: string | undefined
        profileName?: string | undefined
        tableId?: string | undefined
        webPropertyId?: string | undefined
      }
    | undefined
  query?:
    | {
        dimensions?: string | undefined
        'end-date'?: string | undefined
        filters?: string | undefined
        ids?: string | undefined
        'max-results'?: number | undefined
        metrics?: string[] | undefined
        samplingLevel?: string | undefined
        segment?: string | undefined
        sort?: string[] | undefined
        'start-date'?: string | undefined
        'start-index'?: number | undefined
      }
    | undefined
  rows?:
    | {
        conversionPathValue?:
          | { interactionType?: string | undefined; nodeValue?: string | undefined }[]
          | undefined
        primitiveValue?: string | undefined
      }[][]
    | undefined
  sampleSize?: string | undefined
  sampleSpace?: string | undefined
  selfLink?: string | undefined
  totalResults?: number | undefined
  totalsForAllResults?: { [x: string]: string } | undefined
}
type RealtimeData = {
  columnHeaders?:
    | {
        columnType?: string | undefined
        dataType?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  id?: string | undefined
  kind?: string | undefined
  profileInfo?:
    | {
        accountId?: string | undefined
        internalWebPropertyId?: string | undefined
        profileId?: string | undefined
        profileName?: string | undefined
        tableId?: string | undefined
        webPropertyId?: string | undefined
      }
    | undefined
  query?:
    | {
        dimensions?: string | undefined
        filters?: string | undefined
        ids?: string | undefined
        'max-results'?: number | undefined
        metrics?: string[] | undefined
        sort?: string[] | undefined
      }
    | undefined
  rows?: string[][] | undefined
  selfLink?: string | undefined
  totalResults?: number | undefined
  totalsForAllResults?: { [x: string]: string } | undefined
}
type ProfileSummary = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  starred?: boolean | undefined
  type?: string | undefined
}
type WebPropertySummary = {
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  level?: string | undefined
  name?: string | undefined
  profiles?: ProfileSummary[] | undefined
  starred?: boolean | undefined
  websiteUrl?: string | undefined
}
type AccountSummary = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  starred?: boolean | undefined
  webProperties?: WebPropertySummary[] | undefined
}
type AccountSummaries = {
  items?: AccountSummary[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type Account = {
  childLink?: { href?: string | undefined; type?: string | undefined } | undefined
  created?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  permissions?: { effective?: string[] | undefined } | undefined
  selfLink?: string | undefined
  starred?: boolean | undefined
  updated?: string | undefined
}
type Accounts = {
  items?: Account[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type AccountRef = {
  href?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type ProfileRef = {
  accountId?: string | undefined
  href?: string | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  webPropertyId?: string | undefined
}
type WebPropertyRef = {
  accountId?: string | undefined
  href?: string | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type UserRef = { email?: string | undefined; id?: string | undefined; kind?: string | undefined }
type EntityUserLink = {
  entity?:
    | {
        accountRef?: AccountRef | undefined
        profileRef?: ProfileRef | undefined
        webPropertyRef?: WebPropertyRef | undefined
      }
    | undefined
  id?: string | undefined
  kind?: string | undefined
  permissions?: { effective?: string[] | undefined; local?: string[] | undefined } | undefined
  selfLink?: string | undefined
  userRef?: UserRef | undefined
}
type EntityUserLinks = {
  items?: EntityUserLink[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
}
type FilterExpression = {
  caseSensitive?: boolean | undefined
  expressionValue?: string | undefined
  field?: string | undefined
  fieldIndex?: number | undefined
  kind?: string | undefined
  matchType?: string | undefined
}
type Filter = {
  accountId?: string | undefined
  advancedDetails?:
    | {
        caseSensitive?: boolean | undefined
        extractA?: string | undefined
        extractB?: string | undefined
        fieldA?: string | undefined
        fieldAIndex?: number | undefined
        fieldARequired?: boolean | undefined
        fieldB?: string | undefined
        fieldBIndex?: number | undefined
        fieldBRequired?: boolean | undefined
        outputConstructor?: string | undefined
        outputToField?: string | undefined
        outputToFieldIndex?: number | undefined
        overrideOutputField?: boolean | undefined
      }
    | undefined
  created?: string | undefined
  excludeDetails?: FilterExpression | undefined
  id?: string | undefined
  includeDetails?: FilterExpression | undefined
  kind?: string | undefined
  lowercaseDetails?: { field?: string | undefined; fieldIndex?: number | undefined } | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  searchAndReplaceDetails?:
    | {
        caseSensitive?: boolean | undefined
        field?: string | undefined
        fieldIndex?: number | undefined
        replaceString?: string | undefined
        searchString?: string | undefined
      }
    | undefined
  selfLink?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  uppercaseDetails?: { field?: string | undefined; fieldIndex?: number | undefined } | undefined
}
type Filters = {
  items?: Filter[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type Webproperty = {
  accountId?: string | undefined
  childLink?: { href?: string | undefined; type?: string | undefined } | undefined
  created?: string | undefined
  dataRetentionResetOnNewActivity?: boolean | undefined
  dataRetentionTtl?: string | undefined
  defaultProfileId?: string | undefined
  id?: string | undefined
  industryVertical?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  level?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  permissions?: { effective?: string[] | undefined } | undefined
  profileCount?: number | undefined
  selfLink?: string | undefined
  starred?: boolean | undefined
  updated?: string | undefined
  websiteUrl?: string | undefined
}
type Webproperties = {
  items?: Webproperty[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type CustomDataSource = {
  accountId?: string | undefined
  childLink?: { href?: string | undefined; type?: string | undefined } | undefined
  created?: string | undefined
  description?: string | undefined
  id?: string | undefined
  importBehavior?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  profilesLinked?: string[] | undefined
  schema?: string[] | undefined
  selfLink?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  uploadType?: string | undefined
  webPropertyId?: string | undefined
}
type CustomDataSources = {
  items?: CustomDataSource[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type AnalyticsDataimportDeleteUploadDataRequest = { customDataImportUids?: string[] | undefined }
type Upload = {
  accountId?: string | undefined
  customDataSourceId?: string | undefined
  errors?: string[] | undefined
  id?: string | undefined
  kind?: string | undefined
  status?: string | undefined
  uploadTime?: string | undefined
}
type Uploads = {
  items?: Upload[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
}
type CustomDimension = {
  accountId?: string | undefined
  active?: boolean | undefined
  created?: string | undefined
  id?: string | undefined
  index?: number | undefined
  kind?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  scope?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  webPropertyId?: string | undefined
}
type CustomDimensions = {
  items?: CustomDimension[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type CustomMetric = {
  accountId?: string | undefined
  active?: boolean | undefined
  created?: string | undefined
  id?: string | undefined
  index?: number | undefined
  kind?: string | undefined
  max_value?: string | undefined
  min_value?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  scope?: string | undefined
  selfLink?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  webPropertyId?: string | undefined
}
type CustomMetrics = {
  items?: CustomMetric[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type AdWordsAccount = {
  autoTaggingEnabled?: boolean | undefined
  customerId?: string | undefined
  kind?: string | undefined
}
type EntityAdWordsLink = {
  adWordsAccounts?: AdWordsAccount[] | undefined
  entity?: { webPropertyRef?: WebPropertyRef | undefined } | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  profileIds?: string[] | undefined
  selfLink?: string | undefined
}
type EntityAdWordsLinks = {
  items?: EntityAdWordsLink[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
}
type Profile = {
  accountId?: string | undefined
  botFilteringEnabled?: boolean | undefined
  childLink?: { href?: string | undefined; type?: string | undefined } | undefined
  created?: string | undefined
  currency?: string | undefined
  defaultPage?: string | undefined
  eCommerceTracking?: boolean | undefined
  enhancedECommerceTracking?: boolean | undefined
  excludeQueryParameters?: string | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  permissions?: { effective?: string[] | undefined } | undefined
  selfLink?: string | undefined
  siteSearchCategoryParameters?: string | undefined
  siteSearchQueryParameters?: string | undefined
  starred?: boolean | undefined
  stripSiteSearchCategoryParameters?: boolean | undefined
  stripSiteSearchQueryParameters?: boolean | undefined
  timezone?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  webPropertyId?: string | undefined
  websiteUrl?: string | undefined
}
type Profiles = {
  items?: Profile[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type Experiment = {
  accountId?: string | undefined
  created?: string | undefined
  description?: string | undefined
  editableInGaUi?: boolean | undefined
  endTime?: string | undefined
  equalWeighting?: boolean | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  minimumExperimentLengthInDays?: number | undefined
  name?: string | undefined
  objectiveMetric?: string | undefined
  optimizationType?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  profileId?: string | undefined
  reasonExperimentEnded?: string | undefined
  rewriteVariationUrlsAsOriginal?: boolean | undefined
  selfLink?: string | undefined
  servingFramework?: string | undefined
  snippet?: string | undefined
  startTime?: string | undefined
  status?: string | undefined
  trafficCoverage?: number | undefined
  updated?: string | undefined
  variations?:
    | {
        name?: string | undefined
        status?: string | undefined
        url?: string | undefined
        weight?: number | undefined
        won?: boolean | undefined
      }[]
    | undefined
  webPropertyId?: string | undefined
  winnerConfidenceLevel?: number | undefined
  winnerFound?: boolean | undefined
}
type Experiments = {
  items?: Experiment[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type Goal = {
  accountId?: string | undefined
  active?: boolean | undefined
  created?: string | undefined
  eventDetails?:
    | {
        eventConditions?:
          | {
              comparisonType?: string | undefined
              comparisonValue?: string | undefined
              expression?: string | undefined
              matchType?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        useEventValue?: boolean | undefined
      }
    | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  parentLink?: { href?: string | undefined; type?: string | undefined } | undefined
  profileId?: string | undefined
  selfLink?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  urlDestinationDetails?:
    | {
        caseSensitive?: boolean | undefined
        firstStepRequired?: boolean | undefined
        matchType?: string | undefined
        steps?:
          | { name?: string | undefined; number?: number | undefined; url?: string | undefined }[]
          | undefined
        url?: string | undefined
      }
    | undefined
  value?: number | undefined
  visitNumPagesDetails?:
    | { comparisonType?: string | undefined; comparisonValue?: string | undefined }
    | undefined
  visitTimeOnSiteDetails?:
    | { comparisonType?: string | undefined; comparisonValue?: string | undefined }
    | undefined
  webPropertyId?: string | undefined
}
type Goals = {
  items?: Goal[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type FilterRef = {
  accountId?: string | undefined
  href?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type ProfileFilterLink = {
  filterRef?: FilterRef | undefined
  id?: string | undefined
  kind?: string | undefined
  profileRef?: ProfileRef | undefined
  rank?: number | undefined
  selfLink?: string | undefined
}
type ProfileFilterLinks = {
  items?: ProfileFilterLink[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type UnsampledReport = {
  accountId?: string | undefined
  cloudStorageDownloadDetails?:
    | { bucketId?: string | undefined; objectId?: string | undefined }
    | undefined
  created?: string | undefined
  dimensions?: string | undefined
  downloadType?: string | undefined
  driveDownloadDetails?: { documentId?: string | undefined } | undefined
  'end-date'?: string | undefined
  filters?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  metrics?: string | undefined
  profileId?: string | undefined
  segment?: string | undefined
  selfLink?: string | undefined
  'start-date'?: string | undefined
  status?: string | undefined
  title?: string | undefined
  updated?: string | undefined
  webPropertyId?: string | undefined
}
type UnsampledReports = {
  items?: UnsampledReport[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type IncludeConditions = {
  daysToLookBack?: number | undefined
  isSmartList?: boolean | undefined
  kind?: string | undefined
  membershipDurationDays?: number | undefined
  segment?: string | undefined
}
type LinkedForeignAccount = {
  accountId?: string | undefined
  eligibleForSearch?: boolean | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  linkedAccountId?: string | undefined
  remarketingAudienceId?: string | undefined
  status?: string | undefined
  type?: string | undefined
  webPropertyId?: string | undefined
}
type RemarketingAudience = {
  accountId?: string | undefined
  audienceDefinition?: { includeConditions?: IncludeConditions | undefined } | undefined
  audienceType?: string | undefined
  created?: string | undefined
  description?: string | undefined
  id?: string | undefined
  internalWebPropertyId?: string | undefined
  kind?: string | undefined
  linkedAdAccounts?: LinkedForeignAccount[] | undefined
  linkedViews?: string[] | undefined
  name?: string | undefined
  stateBasedAudienceDefinition?:
    | {
        excludeConditions?:
          | { exclusionDuration?: string | undefined; segment?: string | undefined }
          | undefined
        includeConditions?: IncludeConditions | undefined
      }
    | undefined
  updated?: string | undefined
  webPropertyId?: string | undefined
}
type RemarketingAudiences = {
  items?: RemarketingAudience[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type HashClientIdRequest = {
  clientId?: string | undefined
  kind?: string | undefined
  webPropertyId?: string | undefined
}
type HashClientIdResponse = {
  clientId?: string | undefined
  hashedClientId?: string | undefined
  kind?: string | undefined
  webPropertyId?: string | undefined
}
type Segment = {
  created?: string | undefined
  definition?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  segmentId?: string | undefined
  selfLink?: string | undefined
  type?: string | undefined
  updated?: string | undefined
}
type Segments = {
  items?: Segment[] | undefined
  itemsPerPage?: number | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  previousLink?: string | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
  username?: string | undefined
}
type Column = {
  attributes?: { [x: string]: string } | undefined
  id?: string | undefined
  kind?: string | undefined
}
type Columns = {
  attributeNames?: string[] | undefined
  etag?: string | undefined
  items?: Column[] | undefined
  kind?: string | undefined
  totalResults?: number | undefined
}
type AccountTicket = {
  account?: Account | undefined
  id?: string | undefined
  kind?: string | undefined
  profile?: Profile | undefined
  redirectUri?: string | undefined
  webproperty?: Webproperty | undefined
}
type AccountTreeRequest = {
  accountName?: string | undefined
  kind?: string | undefined
  profileName?: string | undefined
  timezone?: string | undefined
  webpropertyName?: string | undefined
  websiteUrl?: string | undefined
}
type AccountTreeResponse = {
  account?: Account | undefined
  kind?: string | undefined
  profile?: Profile | undefined
  webproperty?: Webproperty | undefined
}
type UserDeletionRequest = {
  deletionRequestTime?: string | undefined
  firebaseProjectId?: string | undefined
  id?: { type?: string | undefined; userId?: string | undefined } | undefined
  kind?: string | undefined
  propertyId?: string | undefined
  webPropertyId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data/ga': {
      $get: {
        input: {
          query: {
            ids: string
            'start-date': string
            'end-date': string
            metrics: string
            dimensions?: string | undefined
            filters?: string | undefined
            'include-empty-rows'?: boolean | undefined
            'max-results'?: number | undefined
            output?: 'dataTable' | 'json' | undefined
            samplingLevel?: 'DEFAULT' | 'FASTER' | 'HIGHER_PRECISION' | undefined
            segment?: string | undefined
            sort?: string | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GaData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/mcf': {
      $get: {
        input: {
          query: {
            ids: string
            'start-date': string
            'end-date': string
            metrics: string
            dimensions?: string | undefined
            filters?: string | undefined
            'max-results'?: number | undefined
            samplingLevel?: 'DEFAULT' | 'FASTER' | 'HIGHER_PRECISION' | undefined
            sort?: string | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: McfData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/data/realtime': {
      $get: {
        input: {
          query: {
            ids: string
            metrics: string
            dimensions?: string | undefined
            filters?: string | undefined
            'max-results'?: number | undefined
            sort?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: RealtimeData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accountSummaries': {
      $get: {
        input: {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AccountSummaries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts': {
      $get: {
        input: {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/entityUserLinks': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: EntityUserLinks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/entityUserLinks/:linkId': {
      $delete: {
        input: { param: { accountId: string; linkId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { accountId: string; linkId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/filters': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Filters
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Filter }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/filters/:filterId': {
      $delete: {
        input: { param: { accountId: string; filterId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string; filterId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; filterId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Filter }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; filterId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Filter }
        output: Filter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Webproperties
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Webproperty }
        output: Webproperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Webproperty
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Webproperty }
        output: Webproperty
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Webproperty }
        output: Webproperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomDataSources
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/deleteUploadData': {
      $post: {
        input: {
          param: { accountId: string; webPropertyId: string; customDataSourceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AnalyticsDataimportDeleteUploadDataRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads': {
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; customDataSourceId: string }
        } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Uploads
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { accountId: string; webPropertyId: string; customDataSourceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Upload
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads/:uploadId': {
      $get: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            customDataSourceId: string
            uploadId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Upload
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomDimensions
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomDimension }
        output: CustomDimension
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId': {
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; customDimensionId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomDimension
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { accountId: string; webPropertyId: string; customDimensionId: string }
        } & {
          query: {
            ignoreCustomDataSourceLinks?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomDimension }
        output: CustomDimension
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; customDimensionId: string }
        } & {
          query: {
            ignoreCustomDataSourceLinks?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomDimension }
        output: CustomDimension
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomMetrics
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomMetric }
        output: CustomMetric
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; customMetricId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CustomMetric
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; webPropertyId: string; customMetricId: string } } & {
          query: {
            ignoreCustomDataSourceLinks?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomMetric }
        output: CustomMetric
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; webPropertyId: string; customMetricId: string } } & {
          query: {
            ignoreCustomDataSourceLinks?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CustomMetric }
        output: CustomMetric
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: EntityAdWordsLinks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityAdWordsLink }
        output: EntityAdWordsLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId': {
      $delete: {
        input: {
          param: { accountId: string; webPropertyId: string; webPropertyAdWordsLinkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; webPropertyAdWordsLinkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: EntityAdWordsLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { accountId: string; webPropertyId: string; webPropertyAdWordsLinkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityAdWordsLink }
        output: EntityAdWordsLink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; webPropertyAdWordsLinkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityAdWordsLink }
        output: EntityAdWordsLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: EntityUserLinks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks/:linkId': {
      $delete: {
        input: { param: { accountId: string; webPropertyId: string; linkId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { accountId: string; webPropertyId: string; linkId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Profiles
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Profile }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId': {
      $delete: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Profile }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Profile }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: EntityUserLinks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks/:linkId': {
      $delete: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EntityUserLink }
        output: EntityUserLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Experiments
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Experiment }
        output: Experiment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId': {
      $delete: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            experimentId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            experimentId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Experiment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            experimentId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Experiment }
        output: Experiment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            experimentId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Experiment }
        output: Experiment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Goals
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Goal }
        output: Goal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId': {
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; goalId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Goal
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; goalId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Goal }
        output: Goal
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; goalId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Goal }
        output: Goal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ProfileFilterLinks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ProfileFilterLink }
        output: ProfileFilterLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId': {
      $delete: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ProfileFilterLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ProfileFilterLink }
        output: ProfileFilterLink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; profileId: string; linkId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ProfileFilterLink }
        output: ProfileFilterLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: UnsampledReports
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string; profileId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: UnsampledReport }
        output: UnsampledReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId': {
      $delete: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            unsampledReportId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: {
            accountId: string
            webPropertyId: string
            profileId: string
            unsampledReportId: string
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: UnsampledReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences': {
      $get: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            type?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: RemarketingAudiences
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; webPropertyId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: RemarketingAudience }
        output: RemarketingAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId': {
      $delete: {
        input: {
          param: { accountId: string; webPropertyId: string; remarketingAudienceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { accountId: string; webPropertyId: string; remarketingAudienceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: RemarketingAudience
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { accountId: string; webPropertyId: string; remarketingAudienceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: RemarketingAudience }
        output: RemarketingAudience
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { accountId: string; webPropertyId: string; remarketingAudienceId: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: RemarketingAudience }
        output: RemarketingAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/clientId:hashClientId': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: HashClientIdRequest }
        output: HashClientIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/management/segments': {
      $get: {
        input: {
          query: {
            'max-results'?: number | undefined
            'start-index'?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Segments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metadata/:reportType/columns': {
      $get: {
        input: { param: { reportType: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Columns
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning/createAccountTicket': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AccountTicket }
        output: AccountTicket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/provisioning/createAccountTree': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AccountTreeRequest }
        output: AccountTreeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userDeletion/userDeletionRequests:upsert': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: UserDeletionRequest }
        output: UserDeletionRequest
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

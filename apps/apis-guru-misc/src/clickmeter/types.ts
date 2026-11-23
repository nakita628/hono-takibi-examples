type ApiCoreDtoAccountingUser = {
  boGoVal?: string | undefined
  bonusClicks?: bigint | undefined
  companyName?: string | undefined
  companyRole?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  phone?: string | undefined
  redirectOnly?: boolean | undefined
  registrationDate?: string | undefined
  timeframeMinDate?: string | undefined
  timezone?: number | undefined
  timezonename?: string | undefined
}
type ApiCoreDtoAccountingDomainWhitelistEntry = {
  id?: string | undefined
  name?: string | undefined
}
type ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry = {
  entities?: ApiCoreDtoAccountingDomainWhitelistEntry[] | undefined
}
type ApiCoreResponsesEntityUriSystemInt64 = { id?: bigint | undefined; uri?: string | undefined }
type ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 = {
  entities?: ApiCoreResponsesEntityUriSystemInt64[] | undefined
}
type ApiCoreDtoAccountingConversionOptions = {
  hideComCost?: boolean | undefined
  hideCost?: boolean | undefined
  hideCount?: boolean | undefined
  hideParams?: boolean | undefined
  hideValue?: boolean | undefined
  percentCommission?: number | undefined
  percentValue?: number | undefined
}
type ApiCoreDtoGrantsGrant = {
  DatapointType?: string | undefined
  Entity?: ApiCoreResponsesEntityUriSystemInt64 | undefined
  EntityName?: string | undefined
  EntityType?: string | undefined
  Type?: string | undefined
}
type ApiCoreDtoAccountingExtendedGrants = {
  allowAllGrants?: boolean | undefined
  allowGroupCreation?: boolean | undefined
}
type ApiCoreDtoAccountingHitOptions = { hideReferrer?: boolean | undefined }
type ApiCoreDtoAccountingGuest = {
  apiKey?: string | undefined
  conversionOptions?: ApiCoreDtoAccountingConversionOptions | undefined
  creationDate?: string | undefined
  currentGrant?: ApiCoreDtoGrantsGrant | undefined
  dateFormat?: string | undefined
  decimalSeparator?: string | undefined
  email?: string | undefined
  extendedGrants?: ApiCoreDtoAccountingExtendedGrants | undefined
  groupGrants?: bigint | undefined
  hitOptions?: ApiCoreDtoAccountingHitOptions | undefined
  id?: bigint | undefined
  key?: string | undefined
  language?: string | undefined
  loginCount?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  numberGroupSeparator?: string | undefined
  password?: string | undefined
  timeFormat?: 'AmPm' | 'H24' | undefined
  timeZone?: number | undefined
  timeframeMinDate?: string | undefined
  timezonename?: string | undefined
  tlGrants?: bigint | undefined
  tpGrants?: bigint | undefined
  userName?: string | undefined
}
type ApiCoreResponsesCountResponce = { count?: bigint | undefined }
type ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant = {
  entities?: ApiCoreDtoGrantsGrant[] | undefined
}
type ApiCoreRequestsPermissionPatchRequest = {
  Action?: string | undefined
  Id?: bigint | undefined
  Verb?: string | undefined
}
type ApiCoreDtoAccountingIpBlacklistEntry = { id?: string | undefined; ip?: string | undefined }
type ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry = {
  entities?: ApiCoreDtoAccountingIpBlacklistEntry[] | undefined
}
type ApiCoreDtoAccountingPlan = {
  allowedPersonalDomains?: number | undefined
  allowedPersonalUrls?: number | undefined
  billingPeriodEnd?: string | undefined
  billingPeriodStart?: string | undefined
  bonusMonthlyEvents?: bigint | undefined
  maximumDatapoints?: bigint | undefined
  maximumGuests?: bigint | undefined
  monthlyEvents?: bigint | undefined
  name?: string | undefined
  price?: number | undefined
  profileId?: bigint | undefined
  recurring?: boolean | undefined
  recurringPeriod?: number | undefined
  usedDatapoints?: bigint | undefined
  usedMonthlyEvents?: bigint | undefined
}
type SystemObject = { [x: string]: unknown }
type ApiCoreDtoAggregatedAggregatedResult = {
  activityDay?: string | undefined
  commissionsCost?: number | undefined
  conversionsCost?: number | undefined
  conversionsValue?: number | undefined
  convertedClicks?: bigint | undefined
  entityData?: SystemObject | undefined
  entityId?: string | undefined
  fromDay?: string | undefined
  hourlyBreakDown?: { [x: string]: ApiCoreDtoAggregatedAggregatedResult } | undefined
  lastHitDate?: string | undefined
  spiderHitsCount?: bigint | undefined
  toDay?: string | undefined
  totalClicks?: bigint | undefined
  totalViews?: bigint | undefined
  uniqueClicks?: bigint | undefined
  uniqueConversions?: bigint | undefined
  uniqueViews?: bigint | undefined
}
type ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult = {
  entities?: ApiCoreDtoAggregatedAggregatedResult[] | undefined
}
type ApiCoreDtoAggregatedAggregatedSummaryResult = {
  count?: bigint | undefined
  limit?: number | undefined
  offset?: bigint | undefined
  result?: ApiCoreDtoAggregatedAggregatedResult[] | undefined
}
type ApiCoreDtoClickStreamHitBrowserInfo = {
  browserType?: string | undefined
  familyId?: bigint | undefined
  familyName?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type ApiCoreDtoClickStreamHitConversionInfo = {
  accessTime?: string | undefined
  comcost?: number | undefined
  cost?: number | undefined
  date?: string | undefined
  deleted?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  parameter?: string | undefined
  value?: number | undefined
}
type ApiCoreDtoTagsTag = {
  datapoints?: bigint[] | undefined
  groups?: bigint[] | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type ApiCoreDtoClickStreamHitDatapointInfo = {
  creationDate?: string | undefined
  datapointFavourite?: boolean | undefined
  datapointId?: bigint | undefined
  datapointName?: string | undefined
  datapointTitle?: string | undefined
  datapointType?: string | undefined
  destinationUrl?: string | undefined
  groupId?: bigint | undefined
  groupName?: string | undefined
  isABTest?: boolean | undefined
  isPrivateShared?: boolean | undefined
  isPublic?: boolean | undefined
  notes?: string | undefined
  status?: 'Active' | 'Paused' | 'Abuse' | 'Deleted' | undefined
  tags?: ApiCoreDtoTagsTag[] | undefined
  trackingCode?: string | undefined
}
type ApiCoreDtoClickStreamHitLocationInfo = {
  areacode?: string | undefined
  city?: string | undefined
  country?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  metrocode?: string | undefined
  organization?: string | undefined
  postalcode?: string | undefined
  region?: string | undefined
  regionName?: string | undefined
}
type ApiCoreDtoClickStreamHitOsInfo = {
  familyId?: bigint | undefined
  familyName?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type ApiCoreDtoClickStreamHitSource = {
  id?: bigint | undefined
  name?: string | undefined
  param?: string | undefined
}
type ApiCoreDtoClickStreamHit = {
  accessTime?: string | undefined
  browser?: ApiCoreDtoClickStreamHitBrowserInfo | undefined
  clientLanguage?: string | undefined
  conversion1?: ApiCoreDtoClickStreamHitConversionInfo | undefined
  conversion2?: ApiCoreDtoClickStreamHitConversionInfo | undefined
  conversion3?: ApiCoreDtoClickStreamHitConversionInfo | undefined
  conversion4?: ApiCoreDtoClickStreamHitConversionInfo | undefined
  conversion5?: ApiCoreDtoClickStreamHitConversionInfo | undefined
  conversions?: ApiCoreDtoClickStreamHitConversionInfo[] | undefined
  entity?: ApiCoreDtoClickStreamHitDatapointInfo | undefined
  ip?: string | undefined
  isProxy?: string | undefined
  isSpider?: string | undefined
  isUnique?: string | undefined
  location?: ApiCoreDtoClickStreamHitLocationInfo | undefined
  org?: string | undefined
  os?: ApiCoreDtoClickStreamHitOsInfo | undefined
  queryParams?: string | undefined
  realDestinationUrl?: string | undefined
  referer?: string | undefined
  source?: ApiCoreDtoClickStreamHitSource | undefined
  type?: string | undefined
}
type ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit = {
  entities?: ApiCoreDtoClickStreamHit[] | undefined
}
type ApiCoreDtoConversionsConversion = {
  code?: string | undefined
  creationDate?: string | undefined
  deleted?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  protocol?: 'Http' | 'Https' | undefined
  value?: number | undefined
}
type ApiCoreRequestsPatchBody = { Action?: string | undefined; Id?: bigint | undefined }
type ApiCoreRequestsPatchBodyBatch = { PatchRequests?: ApiCoreRequestsPatchBody[] | undefined }
type ApiCoreRequestsConversionPatchBody = {
  Action?: string | undefined
  Id?: bigint | undefined
  ReplaceId?: bigint | undefined
}
type ApiCoreDtoClickStreamHitListPage = {
  hits?: ApiCoreDtoClickStreamHit[] | undefined
  lastKey?: string | undefined
}
type ApiCoreRequestsGenericTextPatch = { Text?: string | undefined }
type ApiCoreDtoDatapointsBrowserBaseDestinationItem = {
  emailDestinationUrl?: string | undefined
  mobileDestinationUrl?: string | undefined
  spidersDestinationUrl?: string | undefined
}
type ApiCoreDtoDatapointsMultipleDestinationItem = { url?: string | undefined }
type ApiCoreDtoDatapointsDatapointRetargetingInfo = {
  id?: bigint | undefined
  name?: string | undefined
}
type ApiCoreDtoDatapointsUniqueDestinationItem = { firstDestinationUrl?: string | undefined }
type ApiCoreDtoDatapointsUrlByLanguageItem = {
  languageCode?: string | undefined
  url?: string | undefined
}
type ApiCoreDtoDatapointsUrlByNationItem = { nation?: string | undefined; url?: string | undefined }
type ApiCoreDtoDatapointsWeightedDestinationItem = {
  url?: string | undefined
  weight?: number | undefined
}
type ApiCoreDtoDatapointsTrackingLinkSpecifics = {
  appendQuery?: boolean | undefined
  browserDestinationItem?: ApiCoreDtoDatapointsBrowserBaseDestinationItem | undefined
  destinationMode?:
    | 'Simple'
    | 'RandomDestination'
    | 'DestinationByLanguage'
    | 'SpilloverDestination'
    | 'DynamicUrl'
    | 'BrowserDestination'
    | 'DestinationByNation'
    | 'UniqueDestination'
    | 'SequentialDestination'
    | 'WeightedDestination'
    | undefined
  domainId?: number | undefined
  encodeUrl?: boolean | undefined
  expirationClicks?: bigint | undefined
  expirationDate?: string | undefined
  firstUrl?: string | undefined
  goDomainId?: number | undefined
  hideUrl?: boolean | undefined
  hideUrlTitle?: string | undefined
  isABTest?: boolean | undefined
  password?: string | undefined
  pauseAfterClicksExpiration?: boolean | undefined
  pauseAfterDateExpiration?: boolean | undefined
  randomDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[] | undefined
  redirectType?: 'PermanentRedirect' | 'TemporaryRedirect' | undefined
  referrerClean?: 'None' | 'Clean' | 'Myself' | undefined
  scripts?: ApiCoreDtoDatapointsDatapointRetargetingInfo[] | undefined
  sequentialDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[] | undefined
  spilloverDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[] | undefined
  uniqueDestinationItem?: ApiCoreDtoDatapointsUniqueDestinationItem | undefined
  url?: string | undefined
  urlAfterClicksExpiration?: string | undefined
  urlAfterDateExpiration?: string | undefined
  urlsByLanguage?: ApiCoreDtoDatapointsUrlByLanguageItem[] | undefined
  urlsByNation?: ApiCoreDtoDatapointsUrlByNationItem[] | undefined
  weightedDestinationItems?: ApiCoreDtoDatapointsWeightedDestinationItem[] | undefined
}
type ApiCoreDtoDatapointsTrackingPixelSpecifics = { parameterNote?: string | undefined }
type ApiCoreDtoDatapointsDatapoint = {
  creationDate?: string | undefined
  encodeIp?: boolean | undefined
  fifthConversionId?: bigint | undefined
  fifthConversionName?: string | undefined
  firstConversionId?: bigint | undefined
  firstConversionName?: string | undefined
  fourthConversionId?: bigint | undefined
  fourthConversionName?: string | undefined
  groupId?: bigint | undefined
  groupName?: string | undefined
  id?: bigint | undefined
  isPublic?: boolean | undefined
  isSecured?: boolean | undefined
  lightTracking?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  preferred?: boolean | undefined
  redirectOnly?: boolean | undefined
  secondConversionId?: bigint | undefined
  secondConversionName?: string | undefined
  status?: 'Active' | 'Paused' | 'Abuse' | 'Deleted' | undefined
  tags?: ApiCoreDtoTagsTag[] | undefined
  thirdConversionId?: bigint | undefined
  thirdConversionName?: string | undefined
  title?: string | undefined
  trackingCode?: string | undefined
  type?: 'TrackingLink' | 'TrackingPixel' | undefined
  typeTL?: ApiCoreDtoDatapointsTrackingLinkSpecifics | undefined
  typeTP?: ApiCoreDtoDatapointsTrackingPixelSpecifics | undefined
  writePermited?: boolean | undefined
}
type ApiCoreDtoEntityUriLong = { id?: bigint | undefined; uri?: string | undefined }
type ApiCoreRequestsDeleteBatch = { Entities?: ApiCoreDtoEntityUriLong[] | undefined }
type ClickMeterInfrastructureValidationValidationFailure = {
  code?: SystemObject | undefined
  errorMessage?: string | undefined
  errorValue?: SystemObject | undefined
  property?: string | undefined
}
type ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 = {
  entityData?: ApiCoreDtoDatapointsDatapoint | undefined
  errors?: ClickMeterInfrastructureValidationValidationFailure[] | undefined
  result?: ApiCoreResponsesEntityUriSystemInt64 | undefined
  status?: string | undefined
}
type ApiCoreRequestsDatapointsBatch = { List?: ApiCoreDtoDatapointsDatapoint[] | undefined }
type ApiCoreDtoDomainsDomain = {
  custom404?: string | undefined
  customHomepage?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  type?: 'System' | 'Go' | 'Dedicated' | 'Personal' | undefined
}
type ApiCoreDtoGroupsGroup = {
  creationDate?: string | undefined
  deleted?: boolean | undefined
  id?: bigint | undefined
  isPublic?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  preferred?: boolean | undefined
  redirectOnly?: boolean | undefined
  tags?: ApiCoreDtoTagsTag[] | undefined
  writePermited?: boolean | undefined
}
type ApiCoreDtoRetargetingRetargetingScript = {
  id?: bigint | undefined
  name?: string | undefined
  script?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: ApiCoreDtoAccountingUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: ApiCoreDtoAccountingUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: ApiCoreDtoAccountingUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: ApiCoreDtoAccountingUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoAccountingUser } & { form: ApiCoreDtoAccountingUser }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/domainwhitelist': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoAccountingDomainWhitelistEntry } & {
              form: ApiCoreDtoAccountingDomainWhitelistEntry
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/domainwhitelist/:whitelistId': {
      $delete:
        | {
            input: { param: { whitelistId: string } }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { whitelistId: string } }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { whitelistId: string } }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { whitelistId: string } }
            output: ApiCoreDtoAccountingDomainWhitelistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { whitelistId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { whitelistId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoAccountingGuest } & { form: ApiCoreDtoAccountingGuest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests/count': {
      $get:
        | {
            input: { query: { textSearch?: string | undefined } }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { textSearch?: string | undefined } }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { textSearch?: string | undefined } }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { textSearch?: string | undefined } }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { textSearch?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { textSearch?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests/:guestId': {
      $delete:
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { guestId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { guestId: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { guestId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { guestId: bigint } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: ApiCoreDtoAccountingGuest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { guestId: bigint } } & { json: ApiCoreDtoAccountingGuest } & {
              form: ApiCoreDtoAccountingGuest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests/:guestId/permissions': {
      $get:
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                offset?: number | undefined
                limit?: number | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                offset?: number | undefined
                limit?: number | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                offset?: number | undefined
                limit?: number | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                offset?: number | undefined
                limit?: number | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests/:guestId/permissions/count': {
      $get:
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { guestId: bigint } } & {
              query: {
                entityType?: 'datapoint' | 'group' | undefined
                type?: 'r' | 'w' | undefined
                entityId?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/guests/:guestId/:type/permissions/patch': {
      $post:
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { guestId: bigint; type: 'datapoint' | 'group' } } & {
              json: ApiCoreRequestsPermissionPatchRequest
            } & { form: ApiCoreRequestsPermissionPatchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/ipblacklist': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoAccountingIpBlacklistEntry } & {
              form: ApiCoreDtoAccountingIpBlacklistEntry
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/ipblacklist/:blacklistId': {
      $delete:
        | {
            input: { param: { blacklistId: string } }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blacklistId: string } }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { blacklistId: string } }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { blacklistId: string } }
            output: ApiCoreDtoAccountingIpBlacklistEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { blacklistId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { blacklistId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/plan': {
      $get:
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/aggregated': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                onlyFavorites?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                onlyFavorites?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                onlyFavorites?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                onlyFavorites?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/aggregated/list': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/aggregated/summary/conversions': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/aggregated/summary/datapoints': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type: 'tp' | 'tl'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                groupId?: bigint | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type: 'tp' | 'tl'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                groupId?: bigint | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type: 'tp' | 'tl'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                groupId?: bigint | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type: 'tp' | 'tl'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                groupId?: bigint | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/aggregated/summary/groups': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/clickstream': {
      $get:
        | {
            input: {
              query: {
                group?: bigint | undefined
                datapoint?: bigint | undefined
                conversion?: bigint | undefined
                pageSize?: number | undefined
                filter?: '' | 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                group?: bigint | undefined
                datapoint?: bigint | undefined
                conversion?: bigint | undefined
                pageSize?: number | undefined
                filter?: '' | 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group?: bigint | undefined
                datapoint?: bigint | undefined
                conversion?: bigint | undefined
                pageSize?: number | undefined
                filter?: '' | 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                group?: bigint | undefined
                datapoint?: bigint | undefined
                conversion?: bigint | undefined
                pageSize?: number | undefined
                filter?: '' | 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreDtoConversionsConversion } & {
              form: ApiCoreDtoConversionsConversion
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/aggregated/list': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/count': {
      $get:
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId': {
      $delete:
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreDtoConversionsConversion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreDtoConversionsConversion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreDtoConversionsConversion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: ApiCoreDtoConversionsConversion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreDtoConversionsConversion
            } & { form: ApiCoreDtoConversionsConversion }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/aggregated': {
      $get:
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/aggregated/list': {
      $get:
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/datapoints': {
      $get:
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/datapoints/batch/patch': {
      $put:
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } } & { json: ApiCoreRequestsPatchBodyBatch } & {
              form: ApiCoreRequestsPatchBodyBatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/datapoints/count': {
      $get:
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                type?: string | undefined
                status?: string | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/datapoints/patch': {
      $put:
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsConversionPatchBody
            } & { form: ApiCoreRequestsConversionPatchBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/hits': {
      $get:
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/conversions/:conversionId/notes': {
      $put:
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { conversionId: bigint } } & {
              json: ApiCoreRequestsGenericTextPatch
            } & { form: ApiCoreRequestsGenericTextPatch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreDtoDatapointsDatapoint } & { form: ApiCoreDtoDatapointsDatapoint }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/aggregated': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/aggregated/list': {
      $get:
        | {
            input: {
              query: {
                type: 'tp' | 'tl'
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'tp' | 'tl'
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'tp' | 'tl'
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type: 'tp' | 'tl'
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/batch': {
      $delete:
        | {
            input: { json: ApiCoreRequestsDeleteBatch } & { form: ApiCoreRequestsDeleteBatch }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDeleteBatch } & { form: ApiCoreRequestsDeleteBatch }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDeleteBatch } & { form: ApiCoreRequestsDeleteBatch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreRequestsDeleteBatch } & { form: ApiCoreRequestsDeleteBatch }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreRequestsDeleteBatch } & { form: ApiCoreRequestsDeleteBatch }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreRequestsDatapointsBatch } & {
              form: ApiCoreRequestsDatapointsBatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/count': {
      $get:
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDatapointsDatapoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDatapointsDatapoint
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/:id/aggregated': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/:id/aggregated/list': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/:id/favourite': {
      $put:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/datapoints/:id/hits': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/datapoints/:id/notes': {
      $put:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/domains': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoDomainsDomain } & { form: ApiCoreDtoDomainsDomain }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/domains/count': {
      $get:
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type?: 'system' | 'go' | 'personal' | 'dedicated' | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/domains/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDomainsDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDomainsDomain
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDomainsDomain
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoDomainsDomain
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDomainsDomain } & {
              form: ApiCoreDtoDomainsDomain
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreDtoGroupsGroup } & { form: ApiCoreDtoGroupsGroup }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/aggregated': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/aggregated/list': {
      $get:
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'deleted' | 'active' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'deleted' | 'active' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'deleted' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: string | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                groupBy?: 'deleted' | 'active' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/count': {
      $get:
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                status?: 'deleted' | 'active' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                write?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoGroupsGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoGroupsGroup
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoGroupsGroup } & {
              form: ApiCoreDtoGroupsGroup
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/aggregated': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                hourly?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/aggregated/list': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                fromDay?: string | undefined
                toDay?: string | undefined
                groupBy?: 'week' | 'month' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/aggregated/summary': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: ApiCoreDtoAggregatedAggregatedSummaryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeFrame:
                  | 'today'
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'last12months'
                  | 'lastyear'
                  | 'currentyear'
                  | 'beginning'
                  | 'custom'
                type?: 'tp' | 'tl' | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                status?: 'deleted' | 'active' | undefined
                tag?: string | undefined
                favourite?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
                textSearch?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/datapoints': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoDatapointsDatapoint } & {
              form: ApiCoreDtoDatapointsDatapoint
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/datapoints/count': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/favourite': {
      $put:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/groups/:id/hits': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/:id/notes': {
      $put:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/hits': {
      $get:
        | {
            input: {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: ApiCoreDtoClickStreamHitListPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeframe:
                  | 'yesterday'
                  | 'last7'
                  | 'last30'
                  | 'lastmonth'
                  | 'currentmonth'
                  | 'previousmonth'
                  | 'last90'
                  | 'last120'
                  | 'last180'
                  | 'custom'
                limit?: number | undefined
                offset?: string | undefined
                fromDay?: string | undefined
                toDay?: string | undefined
                filter?: 'spiders' | 'uniques' | 'nonuniques' | 'conversions' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/me/plan': {
      $get:
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreDtoAccountingPlan; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/retargeting': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/retargeting/count': {
      $get:
        | { input: {}; output: ApiCoreResponsesCountResponce; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiCoreResponsesCountResponce; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreResponsesCountResponce; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiCoreResponsesCountResponce; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/retargeting/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoRetargetingRetargetingScript
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoRetargetingRetargetingScript
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoRetargetingRetargetingScript
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ApiCoreDtoRetargetingRetargetingScript
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ApiCoreDtoRetargetingRetargetingScript } & {
              form: ApiCoreDtoRetargetingRetargetingScript
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/retargeting/:id/datapoints': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                sortBy?: string | undefined
                sortDirection?: 'asc' | 'desc' | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/retargeting/:id/datapoints/count': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                tags?: string | undefined
                textSearch?: string | undefined
                onlyFavorites?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: ApiCoreDtoTagsTag } & { form: ApiCoreDtoTagsTag }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/count': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                name?: string | undefined
                datapoints?: string | undefined
                groups?: string | undefined
                type?: 'tp' | 'tl' | 'dp' | 'gr' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId': {
      $delete:
        | {
            input: { param: { tagId: bigint } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreDtoTagsTag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreDtoTagsTag
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/tags/:tagId/datapoints': {
      $delete:
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/datapoints/count': {
      $get:
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                type?: 'tp' | 'tl' | undefined
                status?: 'deleted' | 'active' | 'paused' | 'spam' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/datapoints/patch': {
      $put:
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/groups': {
      $delete:
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { tagId: bigint } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/groups/count': {
      $get:
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: ApiCoreResponsesCountResponce
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & {
              query: {
                status?: 'deleted' | 'active' | undefined
                textSearch?: string | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/groups/patch': {
      $put:
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsPatchBody } & {
              form: ApiCoreRequestsPatchBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tags/:tagId/name': {
      $put:
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: ApiCoreResponsesEntityUriSystemInt64
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagId: bigint } } & { json: ApiCoreRequestsGenericTextPatch } & {
              form: ApiCoreRequestsGenericTextPatch
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes

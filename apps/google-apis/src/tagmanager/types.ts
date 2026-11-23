type AccountFeatures = {
  supportMultipleContainers?: boolean | undefined
  supportUserPermissions?: boolean | undefined
}
type Account = {
  accountId?: string | undefined
  features?: AccountFeatures | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  path?: string | undefined
  shareData?: boolean | undefined
  tagManagerUrl?: string | undefined
}
type ListAccountsResponse = { account?: Account[] | undefined; nextPageToken?: string | undefined }
type ContainerFeatures = {
  supportBuiltInVariables?: boolean | undefined
  supportClients?: boolean | undefined
  supportEnvironments?: boolean | undefined
  supportFolders?: boolean | undefined
  supportGtagConfigs?: boolean | undefined
  supportTags?: boolean | undefined
  supportTemplates?: boolean | undefined
  supportTriggers?: boolean | undefined
  supportUserPermissions?: boolean | undefined
  supportVariables?: boolean | undefined
  supportVersions?: boolean | undefined
  supportWorkspaces?: boolean | undefined
  supportZones?: boolean | undefined
}
type Container = {
  accountId?: string | undefined
  containerId?: string | undefined
  domainName?: string[] | undefined
  features?: ContainerFeatures | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  path?: string | undefined
  publicId?: string | undefined
  tagIds?: string[] | undefined
  tagManagerUrl?: string | undefined
  taggingServerUrls?: string[] | undefined
  usageContext?:
    | (
        | 'usageContextUnspecified'
        | 'web'
        | 'android'
        | 'ios'
        | 'androidSdk5'
        | 'iosSdk5'
        | 'amp'
        | 'server'
      )[]
    | undefined
}
type BuiltInVariable = {
  accountId?: string | undefined
  containerId?: string | undefined
  name?: string | undefined
  path?: string | undefined
  type?:
    | 'builtInVariableTypeUnspecified'
    | 'pageUrl'
    | 'pageHostname'
    | 'pagePath'
    | 'referrer'
    | 'event'
    | 'clickElement'
    | 'clickClasses'
    | 'clickId'
    | 'clickTarget'
    | 'clickUrl'
    | 'clickText'
    | 'firstPartyServingUrl'
    | 'formElement'
    | 'formClasses'
    | 'formId'
    | 'formTarget'
    | 'formUrl'
    | 'formText'
    | 'errorMessage'
    | 'errorUrl'
    | 'errorLine'
    | 'newHistoryUrl'
    | 'oldHistoryUrl'
    | 'newHistoryFragment'
    | 'oldHistoryFragment'
    | 'newHistoryState'
    | 'oldHistoryState'
    | 'historySource'
    | 'containerVersion'
    | 'debugMode'
    | 'randomNumber'
    | 'containerId'
    | 'appId'
    | 'appName'
    | 'appVersionCode'
    | 'appVersionName'
    | 'language'
    | 'osVersion'
    | 'platform'
    | 'sdkVersion'
    | 'deviceName'
    | 'resolution'
    | 'advertiserId'
    | 'advertisingTrackingEnabled'
    | 'htmlId'
    | 'environmentName'
    | 'ampBrowserLanguage'
    | 'ampCanonicalPath'
    | 'ampCanonicalUrl'
    | 'ampCanonicalHost'
    | 'ampReferrer'
    | 'ampTitle'
    | 'ampClientId'
    | 'ampClientTimezone'
    | 'ampClientTimestamp'
    | 'ampClientScreenWidth'
    | 'ampClientScreenHeight'
    | 'ampClientScrollX'
    | 'ampClientScrollY'
    | 'ampClientMaxScrollX'
    | 'ampClientMaxScrollY'
    | 'ampTotalEngagedTime'
    | 'ampPageViewId'
    | 'ampPageLoadTime'
    | 'ampPageDownloadTime'
    | 'ampGtmEvent'
    | 'eventName'
    | 'firebaseEventParameterCampaign'
    | 'firebaseEventParameterCampaignAclid'
    | 'firebaseEventParameterCampaignAnid'
    | 'firebaseEventParameterCampaignClickTimestamp'
    | 'firebaseEventParameterCampaignContent'
    | 'firebaseEventParameterCampaignCp1'
    | 'firebaseEventParameterCampaignGclid'
    | 'firebaseEventParameterCampaignSource'
    | 'firebaseEventParameterCampaignTerm'
    | 'firebaseEventParameterCurrency'
    | 'firebaseEventParameterDynamicLinkAcceptTime'
    | 'firebaseEventParameterDynamicLinkLinkid'
    | 'firebaseEventParameterNotificationMessageDeviceTime'
    | 'firebaseEventParameterNotificationMessageId'
    | 'firebaseEventParameterNotificationMessageName'
    | 'firebaseEventParameterNotificationMessageTime'
    | 'firebaseEventParameterNotificationTopic'
    | 'firebaseEventParameterPreviousAppVersion'
    | 'firebaseEventParameterPreviousOsVersion'
    | 'firebaseEventParameterPrice'
    | 'firebaseEventParameterProductId'
    | 'firebaseEventParameterQuantity'
    | 'firebaseEventParameterValue'
    | 'videoProvider'
    | 'videoUrl'
    | 'videoTitle'
    | 'videoDuration'
    | 'videoPercent'
    | 'videoVisible'
    | 'videoStatus'
    | 'videoCurrentTime'
    | 'scrollDepthThreshold'
    | 'scrollDepthUnits'
    | 'scrollDepthDirection'
    | 'elementVisibilityRatio'
    | 'elementVisibilityTime'
    | 'elementVisibilityFirstTime'
    | 'elementVisibilityRecentTime'
    | 'requestPath'
    | 'requestMethod'
    | 'clientName'
    | 'queryString'
    | 'serverPageLocationUrl'
    | 'serverPageLocationPath'
    | 'serverPageLocationHostname'
    | 'visitorRegion'
    | undefined
  workspaceId?: string | undefined
}
type ListEnabledBuiltInVariablesResponse = {
  builtInVariable?: BuiltInVariable[] | undefined
  nextPageToken?: string | undefined
}
type CreateBuiltInVariableResponse = { builtInVariable?: BuiltInVariable[] | undefined }
type Parameter = {
  key?: string | undefined
  list?: Parameter[] | undefined
  map?: Parameter[] | undefined
  type?:
    | 'typeUnspecified'
    | 'template'
    | 'integer'
    | 'boolean'
    | 'list'
    | 'map'
    | 'triggerReference'
    | 'tagReference'
    | undefined
  value?: string | undefined
}
type Client = {
  accountId?: string | undefined
  clientId?: string | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  parameter?: Parameter[] | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  priority?: number | undefined
  tagManagerUrl?: string | undefined
  type?: string | undefined
  workspaceId?: string | undefined
}
type ListClientsResponse = { client?: Client[] | undefined; nextPageToken?: string | undefined }
type ListContainersResponse = {
  container?: Container[] | undefined
  nextPageToken?: string | undefined
}
type Destination = {
  accountId?: string | undefined
  containerId?: string | undefined
  destinationId?: string | undefined
  destinationLinkId?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
}
type ListDestinationsResponse = {
  destination?: Destination[] | undefined
  nextPageToken?: string | undefined
}
type Environment = {
  accountId?: string | undefined
  authorizationCode?: string | undefined
  authorizationTimestamp?: string | undefined
  containerId?: string | undefined
  containerVersionId?: string | undefined
  description?: string | undefined
  enableDebug?: boolean | undefined
  environmentId?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  type?: 'user' | 'live' | 'latest' | 'workspace' | undefined
  url?: string | undefined
  workspaceId?: string | undefined
}
type ListEnvironmentsResponse = {
  environment?: Environment[] | undefined
  nextPageToken?: string | undefined
}
type Folder = {
  accountId?: string | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  folderId?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  workspaceId?: string | undefined
}
type ListFoldersResponse = { folder?: Folder[] | undefined; nextPageToken?: string | undefined }
type GtagConfig = {
  accountId?: string | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  gtagConfigId?: string | undefined
  parameter?: Parameter[] | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  type?: string | undefined
  workspaceId?: string | undefined
}
type ListGtagConfigResponse = {
  gtagConfig?: GtagConfig[] | undefined
  nextPageToken?: string | undefined
}
type TagConsentSetting = {
  consentStatus?: 'notSet' | 'notNeeded' | 'needed' | undefined
  consentType?: Parameter | undefined
}
type SetupTag = { stopOnSetupFailure?: boolean | undefined; tagName?: string | undefined }
type TeardownTag = { stopTeardownOnFailure?: boolean | undefined; tagName?: string | undefined }
type Tag = {
  accountId?: string | undefined
  blockingRuleId?: string[] | undefined
  blockingTriggerId?: string[] | undefined
  consentSettings?: TagConsentSetting | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  firingRuleId?: string[] | undefined
  firingTriggerId?: string[] | undefined
  liveOnly?: boolean | undefined
  monitoringMetadata?: Parameter | undefined
  monitoringMetadataTagNameKey?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  parameter?: Parameter[] | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  paused?: boolean | undefined
  priority?: Parameter | undefined
  scheduleEndMs?: string | undefined
  scheduleStartMs?: string | undefined
  setupTag?: SetupTag[] | undefined
  tagFiringOption?:
    | 'tagFiringOptionUnspecified'
    | 'unlimited'
    | 'oncePerEvent'
    | 'oncePerLoad'
    | undefined
  tagId?: string | undefined
  tagManagerUrl?: string | undefined
  teardownTag?: TeardownTag[] | undefined
  type?: string | undefined
  workspaceId?: string | undefined
}
type ListTagsResponse = { nextPageToken?: string | undefined; tag?: Tag[] | undefined }
type GalleryReference = {
  host?: string | undefined
  isModified?: boolean | undefined
  owner?: string | undefined
  repository?: string | undefined
  signature?: string | undefined
  version?: string | undefined
}
type CustomTemplate = {
  accountId?: string | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  galleryReference?: GalleryReference | undefined
  name?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  templateData?: string | undefined
  templateId?: string | undefined
  workspaceId?: string | undefined
}
type ListTemplatesResponse = {
  nextPageToken?: string | undefined
  template?: CustomTemplate[] | undefined
}
type Condition = {
  parameter?: Parameter[] | undefined
  type?:
    | 'conditionTypeUnspecified'
    | 'equals'
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'matchRegex'
    | 'greater'
    | 'greaterOrEquals'
    | 'less'
    | 'lessOrEquals'
    | 'cssSelector'
    | 'urlMatches'
    | undefined
}
type Trigger = {
  accountId?: string | undefined
  autoEventFilter?: Condition[] | undefined
  checkValidation?: Parameter | undefined
  containerId?: string | undefined
  continuousTimeMinMilliseconds?: Parameter | undefined
  customEventFilter?: Condition[] | undefined
  eventName?: Parameter | undefined
  filter?: Condition[] | undefined
  fingerprint?: string | undefined
  horizontalScrollPercentageList?: Parameter | undefined
  interval?: Parameter | undefined
  intervalSeconds?: Parameter | undefined
  limit?: Parameter | undefined
  maxTimerLengthSeconds?: Parameter | undefined
  name?: string | undefined
  notes?: string | undefined
  parameter?: Parameter[] | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  selector?: Parameter | undefined
  tagManagerUrl?: string | undefined
  totalTimeMinMilliseconds?: Parameter | undefined
  triggerId?: string | undefined
  type?:
    | 'eventTypeUnspecified'
    | 'pageview'
    | 'domReady'
    | 'windowLoaded'
    | 'customEvent'
    | 'triggerGroup'
    | 'init'
    | 'consentInit'
    | 'serverPageview'
    | 'always'
    | 'firebaseAppException'
    | 'firebaseAppUpdate'
    | 'firebaseCampaign'
    | 'firebaseFirstOpen'
    | 'firebaseInAppPurchase'
    | 'firebaseNotificationDismiss'
    | 'firebaseNotificationForeground'
    | 'firebaseNotificationOpen'
    | 'firebaseNotificationReceive'
    | 'firebaseOsUpdate'
    | 'firebaseSessionStart'
    | 'firebaseUserEngagement'
    | 'formSubmission'
    | 'click'
    | 'linkClick'
    | 'jsError'
    | 'historyChange'
    | 'timer'
    | 'ampClick'
    | 'ampTimer'
    | 'ampScroll'
    | 'ampVisibility'
    | 'youTubeVideo'
    | 'scrollDepth'
    | 'elementVisibility'
    | undefined
  uniqueTriggerId?: Parameter | undefined
  verticalScrollPercentageList?: Parameter | undefined
  visibilitySelector?: Parameter | undefined
  visiblePercentageMax?: Parameter | undefined
  visiblePercentageMin?: Parameter | undefined
  waitForTags?: Parameter | undefined
  waitForTagsTimeout?: Parameter | undefined
  workspaceId?: string | undefined
}
type ListTriggersResponse = { nextPageToken?: string | undefined; trigger?: Trigger[] | undefined }
type AccountAccess = {
  permission?: 'accountPermissionUnspecified' | 'noAccess' | 'user' | 'admin' | undefined
}
type ContainerAccess = {
  containerId?: string | undefined
  permission?:
    | 'containerPermissionUnspecified'
    | 'noAccess'
    | 'read'
    | 'edit'
    | 'approve'
    | 'publish'
    | undefined
}
type UserPermission = {
  accountAccess?: AccountAccess | undefined
  accountId?: string | undefined
  containerAccess?: ContainerAccess[] | undefined
  emailAddress?: string | undefined
  path?: string | undefined
}
type ListUserPermissionsResponse = {
  nextPageToken?: string | undefined
  userPermission?: UserPermission[] | undefined
}
type VariableFormatValue = {
  caseConversionType?: 'none' | 'lowercase' | 'uppercase' | undefined
  convertFalseToValue?: Parameter | undefined
  convertNullToValue?: Parameter | undefined
  convertTrueToValue?: Parameter | undefined
  convertUndefinedToValue?: Parameter | undefined
}
type Variable = {
  accountId?: string | undefined
  containerId?: string | undefined
  disablingTriggerId?: string[] | undefined
  enablingTriggerId?: string[] | undefined
  fingerprint?: string | undefined
  formatValue?: VariableFormatValue | undefined
  name?: string | undefined
  notes?: string | undefined
  parameter?: Parameter[] | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  scheduleEndMs?: string | undefined
  scheduleStartMs?: string | undefined
  tagManagerUrl?: string | undefined
  type?: string | undefined
  variableId?: string | undefined
  workspaceId?: string | undefined
}
type ListVariablesResponse = {
  nextPageToken?: string | undefined
  variable?: Variable[] | undefined
}
type ContainerVersionHeader = {
  accountId?: string | undefined
  containerId?: string | undefined
  containerVersionId?: string | undefined
  deleted?: boolean | undefined
  name?: string | undefined
  numClients?: string | undefined
  numCustomTemplates?: string | undefined
  numGtagConfigs?: string | undefined
  numMacros?: string | undefined
  numRules?: string | undefined
  numTags?: string | undefined
  numTransformations?: string | undefined
  numTriggers?: string | undefined
  numVariables?: string | undefined
  numZones?: string | undefined
  path?: string | undefined
}
type ListContainerVersionsResponse = {
  containerVersionHeader?: ContainerVersionHeader[] | undefined
  nextPageToken?: string | undefined
}
type ZoneBoundary = {
  condition?: Condition[] | undefined
  customEvaluationTriggerId?: string[] | undefined
}
type ZoneChildContainer = { nickname?: string | undefined; publicId?: string | undefined }
type ZoneTypeRestriction = {
  enable?: boolean | undefined
  whitelistedTypeId?: string[] | undefined
}
type Zone = {
  accountId?: string | undefined
  boundary?: ZoneBoundary | undefined
  childContainer?: ZoneChildContainer[] | undefined
  containerId?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  typeRestriction?: ZoneTypeRestriction | undefined
  workspaceId?: string | undefined
  zoneId?: string | undefined
}
type ContainerVersion = {
  accountId?: string | undefined
  builtInVariable?: BuiltInVariable[] | undefined
  client?: Client[] | undefined
  container?: Container | undefined
  containerId?: string | undefined
  containerVersionId?: string | undefined
  customTemplate?: CustomTemplate[] | undefined
  deleted?: boolean | undefined
  description?: string | undefined
  fingerprint?: string | undefined
  folder?: Folder[] | undefined
  gtagConfig?: GtagConfig[] | undefined
  name?: string | undefined
  path?: string | undefined
  tag?: Tag[] | undefined
  tagManagerUrl?: string | undefined
  trigger?: Trigger[] | undefined
  variable?: Variable[] | undefined
  zone?: Zone[] | undefined
}
type Workspace = {
  accountId?: string | undefined
  containerId?: string | undefined
  description?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
  path?: string | undefined
  tagManagerUrl?: string | undefined
  workspaceId?: string | undefined
}
type ListWorkspacesResponse = {
  nextPageToken?: string | undefined
  workspace?: Workspace[] | undefined
}
type ListZonesResponse = { nextPageToken?: string | undefined; zone?: Zone[] | undefined }
type RevertBuiltInVariableResponse = { enabled?: boolean | undefined }
type Entity = {
  changeStatus?: 'changeStatusUnspecified' | 'none' | 'added' | 'deleted' | 'updated' | undefined
  client?: Client | undefined
  folder?: Folder | undefined
  tag?: Tag | undefined
  trigger?: Trigger | undefined
  variable?: Variable | undefined
}
type MergeConflict = {
  entityInBaseVersion?: Entity | undefined
  entityInWorkspace?: Entity | undefined
}
type GetWorkspaceStatusResponse = {
  mergeConflict?: MergeConflict[] | undefined
  workspaceChange?: Entity[] | undefined
}
type CreateContainerVersionRequestVersionOptions = {
  name?: string | undefined
  notes?: string | undefined
}
type SyncStatus = { mergeConflict?: boolean | undefined; syncError?: boolean | undefined }
type CreateContainerVersionResponse = {
  compilerError?: boolean | undefined
  containerVersion?: ContainerVersion | undefined
  newWorkspacePath?: string | undefined
  syncStatus?: SyncStatus | undefined
}
type FolderEntities = {
  nextPageToken?: string | undefined
  tag?: Tag[] | undefined
  trigger?: Trigger[] | undefined
  variable?: Variable[] | undefined
}
type PublishContainerVersionResponse = {
  compilerError?: boolean | undefined
  containerVersion?: ContainerVersion | undefined
}
type QuickPreviewResponse = {
  compilerError?: boolean | undefined
  containerVersion?: ContainerVersion | undefined
  syncStatus?: SyncStatus | undefined
}
type RevertZoneResponse = { zone?: Zone | undefined }
type GetContainerSnippetResponse = { snippet?: string | undefined }
type SyncWorkspaceResponse = {
  mergeConflict?: MergeConflict[] | undefined
  syncStatus?: SyncStatus | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/tagmanager/v2/accounts': {
      $get: {
        input: {
          query: {
            includeGoogleTags?: boolean | undefined
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
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/accounts/containers:lookup': {
      $get: {
        input: {
          query: {
            destinationId?: string | undefined
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
        output: Container
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/built_in_variables': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListEnabledBuiltInVariablesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            type?:
              | (
                  | 'builtInVariableTypeUnspecified'
                  | 'pageUrl'
                  | 'pageHostname'
                  | 'pagePath'
                  | 'referrer'
                  | 'event'
                  | 'clickElement'
                  | 'clickClasses'
                  | 'clickId'
                  | 'clickTarget'
                  | 'clickUrl'
                  | 'clickText'
                  | 'firstPartyServingUrl'
                  | 'formElement'
                  | 'formClasses'
                  | 'formId'
                  | 'formTarget'
                  | 'formUrl'
                  | 'formText'
                  | 'errorMessage'
                  | 'errorUrl'
                  | 'errorLine'
                  | 'newHistoryUrl'
                  | 'oldHistoryUrl'
                  | 'newHistoryFragment'
                  | 'oldHistoryFragment'
                  | 'newHistoryState'
                  | 'oldHistoryState'
                  | 'historySource'
                  | 'containerVersion'
                  | 'debugMode'
                  | 'randomNumber'
                  | 'containerId'
                  | 'appId'
                  | 'appName'
                  | 'appVersionCode'
                  | 'appVersionName'
                  | 'language'
                  | 'osVersion'
                  | 'platform'
                  | 'sdkVersion'
                  | 'deviceName'
                  | 'resolution'
                  | 'advertiserId'
                  | 'advertisingTrackingEnabled'
                  | 'htmlId'
                  | 'environmentName'
                  | 'ampBrowserLanguage'
                  | 'ampCanonicalPath'
                  | 'ampCanonicalUrl'
                  | 'ampCanonicalHost'
                  | 'ampReferrer'
                  | 'ampTitle'
                  | 'ampClientId'
                  | 'ampClientTimezone'
                  | 'ampClientTimestamp'
                  | 'ampClientScreenWidth'
                  | 'ampClientScreenHeight'
                  | 'ampClientScrollX'
                  | 'ampClientScrollY'
                  | 'ampClientMaxScrollX'
                  | 'ampClientMaxScrollY'
                  | 'ampTotalEngagedTime'
                  | 'ampPageViewId'
                  | 'ampPageLoadTime'
                  | 'ampPageDownloadTime'
                  | 'ampGtmEvent'
                  | 'eventName'
                  | 'firebaseEventParameterCampaign'
                  | 'firebaseEventParameterCampaignAclid'
                  | 'firebaseEventParameterCampaignAnid'
                  | 'firebaseEventParameterCampaignClickTimestamp'
                  | 'firebaseEventParameterCampaignContent'
                  | 'firebaseEventParameterCampaignCp1'
                  | 'firebaseEventParameterCampaignGclid'
                  | 'firebaseEventParameterCampaignSource'
                  | 'firebaseEventParameterCampaignTerm'
                  | 'firebaseEventParameterCurrency'
                  | 'firebaseEventParameterDynamicLinkAcceptTime'
                  | 'firebaseEventParameterDynamicLinkLinkid'
                  | 'firebaseEventParameterNotificationMessageDeviceTime'
                  | 'firebaseEventParameterNotificationMessageId'
                  | 'firebaseEventParameterNotificationMessageName'
                  | 'firebaseEventParameterNotificationMessageTime'
                  | 'firebaseEventParameterNotificationTopic'
                  | 'firebaseEventParameterPreviousAppVersion'
                  | 'firebaseEventParameterPreviousOsVersion'
                  | 'firebaseEventParameterPrice'
                  | 'firebaseEventParameterProductId'
                  | 'firebaseEventParameterQuantity'
                  | 'firebaseEventParameterValue'
                  | 'videoProvider'
                  | 'videoUrl'
                  | 'videoTitle'
                  | 'videoDuration'
                  | 'videoPercent'
                  | 'videoVisible'
                  | 'videoStatus'
                  | 'videoCurrentTime'
                  | 'scrollDepthThreshold'
                  | 'scrollDepthUnits'
                  | 'scrollDepthDirection'
                  | 'elementVisibilityRatio'
                  | 'elementVisibilityTime'
                  | 'elementVisibilityFirstTime'
                  | 'elementVisibilityRecentTime'
                  | 'requestPath'
                  | 'requestMethod'
                  | 'clientName'
                  | 'queryString'
                  | 'serverPageLocationUrl'
                  | 'serverPageLocationPath'
                  | 'serverPageLocationHostname'
                  | 'visitorRegion'
                )[]
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
        output: CreateBuiltInVariableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/clients': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListClientsResponse
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
        } & { json: Client }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/containers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListContainersResponse
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
        } & { json: Container }
        output: Container
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/destinations': {
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
        output: ListDestinationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/destinations:link': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            allowUserPermissionFeatureUpdate?: boolean | undefined
            destinationId?: string | undefined
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
        output: Destination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/environments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListEnvironmentsResponse
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
        } & { json: Environment }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/folders': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListFoldersResponse
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
        } & { json: Folder }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/gtag_config': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListGtagConfigResponse
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
        } & { json: GtagConfig }
        output: GtagConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/tags': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListTagsResponse
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
        } & { json: Tag }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/templates': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListTemplatesResponse
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
        } & { json: CustomTemplate }
        output: CustomTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/triggers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListTriggersResponse
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
        } & { json: Trigger }
        output: Trigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/user_permissions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListUserPermissionsResponse
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
        } & { json: UserPermission }
        output: UserPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/variables': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListVariablesResponse
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
        } & { json: Variable }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/version_headers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            includeDeleted?: boolean | undefined
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
        output: ListContainerVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/version_headers:latest': {
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
        output: ContainerVersionHeader
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/versions:live': {
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
        output: ContainerVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/workspaces': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListWorkspacesResponse
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
        } & { json: Workspace }
        output: Workspace
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:parent/zones': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListZonesResponse
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
        } & { json: Zone }
        output: Zone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path': {
      $delete: {
        input: { param: { path: string } } & {
          query: {
            type?:
              | (
                  | 'builtInVariableTypeUnspecified'
                  | 'pageUrl'
                  | 'pageHostname'
                  | 'pagePath'
                  | 'referrer'
                  | 'event'
                  | 'clickElement'
                  | 'clickClasses'
                  | 'clickId'
                  | 'clickTarget'
                  | 'clickUrl'
                  | 'clickText'
                  | 'firstPartyServingUrl'
                  | 'formElement'
                  | 'formClasses'
                  | 'formId'
                  | 'formTarget'
                  | 'formUrl'
                  | 'formText'
                  | 'errorMessage'
                  | 'errorUrl'
                  | 'errorLine'
                  | 'newHistoryUrl'
                  | 'oldHistoryUrl'
                  | 'newHistoryFragment'
                  | 'oldHistoryFragment'
                  | 'newHistoryState'
                  | 'oldHistoryState'
                  | 'historySource'
                  | 'containerVersion'
                  | 'debugMode'
                  | 'randomNumber'
                  | 'containerId'
                  | 'appId'
                  | 'appName'
                  | 'appVersionCode'
                  | 'appVersionName'
                  | 'language'
                  | 'osVersion'
                  | 'platform'
                  | 'sdkVersion'
                  | 'deviceName'
                  | 'resolution'
                  | 'advertiserId'
                  | 'advertisingTrackingEnabled'
                  | 'htmlId'
                  | 'environmentName'
                  | 'ampBrowserLanguage'
                  | 'ampCanonicalPath'
                  | 'ampCanonicalUrl'
                  | 'ampCanonicalHost'
                  | 'ampReferrer'
                  | 'ampTitle'
                  | 'ampClientId'
                  | 'ampClientTimezone'
                  | 'ampClientTimestamp'
                  | 'ampClientScreenWidth'
                  | 'ampClientScreenHeight'
                  | 'ampClientScrollX'
                  | 'ampClientScrollY'
                  | 'ampClientMaxScrollX'
                  | 'ampClientMaxScrollY'
                  | 'ampTotalEngagedTime'
                  | 'ampPageViewId'
                  | 'ampPageLoadTime'
                  | 'ampPageDownloadTime'
                  | 'ampGtmEvent'
                  | 'eventName'
                  | 'firebaseEventParameterCampaign'
                  | 'firebaseEventParameterCampaignAclid'
                  | 'firebaseEventParameterCampaignAnid'
                  | 'firebaseEventParameterCampaignClickTimestamp'
                  | 'firebaseEventParameterCampaignContent'
                  | 'firebaseEventParameterCampaignCp1'
                  | 'firebaseEventParameterCampaignGclid'
                  | 'firebaseEventParameterCampaignSource'
                  | 'firebaseEventParameterCampaignTerm'
                  | 'firebaseEventParameterCurrency'
                  | 'firebaseEventParameterDynamicLinkAcceptTime'
                  | 'firebaseEventParameterDynamicLinkLinkid'
                  | 'firebaseEventParameterNotificationMessageDeviceTime'
                  | 'firebaseEventParameterNotificationMessageId'
                  | 'firebaseEventParameterNotificationMessageName'
                  | 'firebaseEventParameterNotificationMessageTime'
                  | 'firebaseEventParameterNotificationTopic'
                  | 'firebaseEventParameterPreviousAppVersion'
                  | 'firebaseEventParameterPreviousOsVersion'
                  | 'firebaseEventParameterPrice'
                  | 'firebaseEventParameterProductId'
                  | 'firebaseEventParameterQuantity'
                  | 'firebaseEventParameterValue'
                  | 'videoProvider'
                  | 'videoUrl'
                  | 'videoTitle'
                  | 'videoDuration'
                  | 'videoPercent'
                  | 'videoVisible'
                  | 'videoStatus'
                  | 'videoCurrentTime'
                  | 'scrollDepthThreshold'
                  | 'scrollDepthUnits'
                  | 'scrollDepthDirection'
                  | 'elementVisibilityRatio'
                  | 'elementVisibilityTime'
                  | 'elementVisibilityFirstTime'
                  | 'elementVisibilityRecentTime'
                  | 'requestPath'
                  | 'requestMethod'
                  | 'clientName'
                  | 'queryString'
                  | 'serverPageLocationUrl'
                  | 'serverPageLocationPath'
                  | 'serverPageLocationHostname'
                  | 'visitorRegion'
                )[]
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { path: string } } & {
          query: {
            containerVersionId?: string | undefined
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
        output: UserPermission
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { path: string } } & {
          query: {
            fingerprint?: string | undefined
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
        } & { json: UserPermission }
        output: UserPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path/built_in_variables:revert': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            type?:
              | 'builtInVariableTypeUnspecified'
              | 'pageUrl'
              | 'pageHostname'
              | 'pagePath'
              | 'referrer'
              | 'event'
              | 'clickElement'
              | 'clickClasses'
              | 'clickId'
              | 'clickTarget'
              | 'clickUrl'
              | 'clickText'
              | 'firstPartyServingUrl'
              | 'formElement'
              | 'formClasses'
              | 'formId'
              | 'formTarget'
              | 'formUrl'
              | 'formText'
              | 'errorMessage'
              | 'errorUrl'
              | 'errorLine'
              | 'newHistoryUrl'
              | 'oldHistoryUrl'
              | 'newHistoryFragment'
              | 'oldHistoryFragment'
              | 'newHistoryState'
              | 'oldHistoryState'
              | 'historySource'
              | 'containerVersion'
              | 'debugMode'
              | 'randomNumber'
              | 'containerId'
              | 'appId'
              | 'appName'
              | 'appVersionCode'
              | 'appVersionName'
              | 'language'
              | 'osVersion'
              | 'platform'
              | 'sdkVersion'
              | 'deviceName'
              | 'resolution'
              | 'advertiserId'
              | 'advertisingTrackingEnabled'
              | 'htmlId'
              | 'environmentName'
              | 'ampBrowserLanguage'
              | 'ampCanonicalPath'
              | 'ampCanonicalUrl'
              | 'ampCanonicalHost'
              | 'ampReferrer'
              | 'ampTitle'
              | 'ampClientId'
              | 'ampClientTimezone'
              | 'ampClientTimestamp'
              | 'ampClientScreenWidth'
              | 'ampClientScreenHeight'
              | 'ampClientScrollX'
              | 'ampClientScrollY'
              | 'ampClientMaxScrollX'
              | 'ampClientMaxScrollY'
              | 'ampTotalEngagedTime'
              | 'ampPageViewId'
              | 'ampPageLoadTime'
              | 'ampPageDownloadTime'
              | 'ampGtmEvent'
              | 'eventName'
              | 'firebaseEventParameterCampaign'
              | 'firebaseEventParameterCampaignAclid'
              | 'firebaseEventParameterCampaignAnid'
              | 'firebaseEventParameterCampaignClickTimestamp'
              | 'firebaseEventParameterCampaignContent'
              | 'firebaseEventParameterCampaignCp1'
              | 'firebaseEventParameterCampaignGclid'
              | 'firebaseEventParameterCampaignSource'
              | 'firebaseEventParameterCampaignTerm'
              | 'firebaseEventParameterCurrency'
              | 'firebaseEventParameterDynamicLinkAcceptTime'
              | 'firebaseEventParameterDynamicLinkLinkid'
              | 'firebaseEventParameterNotificationMessageDeviceTime'
              | 'firebaseEventParameterNotificationMessageId'
              | 'firebaseEventParameterNotificationMessageName'
              | 'firebaseEventParameterNotificationMessageTime'
              | 'firebaseEventParameterNotificationTopic'
              | 'firebaseEventParameterPreviousAppVersion'
              | 'firebaseEventParameterPreviousOsVersion'
              | 'firebaseEventParameterPrice'
              | 'firebaseEventParameterProductId'
              | 'firebaseEventParameterQuantity'
              | 'firebaseEventParameterValue'
              | 'videoProvider'
              | 'videoUrl'
              | 'videoTitle'
              | 'videoDuration'
              | 'videoPercent'
              | 'videoVisible'
              | 'videoStatus'
              | 'videoCurrentTime'
              | 'scrollDepthThreshold'
              | 'scrollDepthUnits'
              | 'scrollDepthDirection'
              | 'elementVisibilityRatio'
              | 'elementVisibilityTime'
              | 'elementVisibilityFirstTime'
              | 'elementVisibilityRecentTime'
              | 'requestPath'
              | 'requestMethod'
              | 'clientName'
              | 'queryString'
              | 'serverPageLocationUrl'
              | 'serverPageLocationPath'
              | 'serverPageLocationHostname'
              | 'visitorRegion'
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
        output: RevertBuiltInVariableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path/status': {
      $get: {
        input: { param: { path: string } } & {
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
        output: GetWorkspaceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:combine': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            allowUserPermissionFeatureUpdate?: boolean | undefined
            containerId?: string | undefined
            settingSource?: 'settingSourceUnspecified' | 'current' | 'other' | undefined
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
        output: Container
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:create_version': {
      $post: {
        input: { param: { path: string } } & {
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
        } & { json: CreateContainerVersionRequestVersionOptions }
        output: CreateContainerVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:entities': {
      $post: {
        input: { param: { path: string } } & {
          query: {
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
        output: FolderEntities
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:move_entities_to_folder': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            tagId?: string[] | undefined
            triggerId?: string[] | undefined
            variableId?: string[] | undefined
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
        } & { json: Folder }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:move_tag_id': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            allowUserPermissionFeatureUpdate?: boolean | undefined
            copySettings?: boolean | undefined
            copyTermsOfService?: boolean | undefined
            copyUsers?: boolean | undefined
            tagId?: string | undefined
            tagName?: string | undefined
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
        output: Container
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:publish': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            fingerprint?: string | undefined
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
        output: PublishContainerVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:quick_preview': {
      $post: {
        input: { param: { path: string } } & {
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
        output: QuickPreviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:reauthorize': {
      $post: {
        input: { param: { path: string } } & {
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
        } & { json: Environment }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:resolve_conflict': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            fingerprint?: string | undefined
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
        } & { json: Entity }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:revert': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            fingerprint?: string | undefined
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
        output: RevertZoneResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:set_latest': {
      $post: {
        input: { param: { path: string } } & {
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
        output: ContainerVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:snippet': {
      $get: {
        input: { param: { path: string } } & {
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
        output: GetContainerSnippetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:sync': {
      $post: {
        input: { param: { path: string } } & {
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
        output: SyncWorkspaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagmanager/v2/:path:undelete': {
      $post: {
        input: { param: { path: string } } & {
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
        output: ContainerVersion
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

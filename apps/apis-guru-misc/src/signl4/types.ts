type Encoding = 0 | 1
type AlertAttachment = {
  content?: (string | null) | undefined
  contentType?: (string | null) | undefined
  encoding?: Encoding | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type EventParameterTypes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 100
type EventParameterInfo = {
  name?: (string | null) | undefined
  order?: number | undefined
  type?: EventParameterTypes | undefined
  value?: (string | null) | undefined
}
type AlertSeverities = 0 | 1 | 2
type RaiseAlertInfo = {
  attachments?: (AlertAttachment[] | null) | undefined
  category?: (string | null) | undefined
  externalId?: (string | null) | undefined
  flags?: number | undefined
  parameters?: (EventParameterInfo[] | null) | undefined
  severity?: AlertSeverities | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
}
type AlertAnnotationInfo = {
  annotationType?: number | undefined
  id?: (string | null) | undefined
  text?: (string | null) | undefined
  timestamp?: string | undefined
  userId?: (string | null) | undefined
}
type EventSourceTypes = 0 | 1 | 2 | 3 | 4 | 5
type AlertHistoryInfoUserEntryType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type AlertHistoryInfoEntry = {
  id?: (string | null) | undefined
  timestamp?: string | undefined
  type?: AlertHistoryInfoUserEntryType | undefined
  userId?: (string | null) | undefined
}
type AlertHistoryInfoDetailed = {
  acknowledged?: (string | null) | undefined
  acknowledgedgements?: (string[] | null) | undefined
  closed?: (string | null) | undefined
  closedBy?: (string | null) | undefined
  created?: string | undefined
  historyEntries?: (AlertHistoryInfoEntry[] | null) | undefined
}
type AlertStatusCodes = 0 | 1 | 2 | 4 | 8 | 16 | 32
type AlertInfo = {
  annotations?: (AlertAnnotationInfo[] | null) | undefined
  attachments?: (AlertAttachment[] | null) | undefined
  category?: (string | null) | undefined
  categoryId?: (string | null) | undefined
  eventId?: (string | null) | undefined
  eventSourceId?: (string | null) | undefined
  eventSourceType?: EventSourceTypes | undefined
  flags?: number | undefined
  history?: AlertHistoryInfoDetailed | undefined
  id?: (string | null) | undefined
  lastModified?: string | undefined
  parameters?: (EventParameterInfo[] | null) | undefined
  severity?: AlertSeverities | undefined
  status?: AlertStatusCodes | undefined
  subscriptionId?: (string | null) | undefined
  teamId?: (string | null) | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
}
type ErrorResponseContentBase = {
  details?: (string | null) | undefined
  message?: (string | null) | undefined
}
type ErrorResponseContent = {
  code?: number | undefined
  details?: (string | null) | undefined
  errors?: (ErrorResponseContentBase[] | null) | undefined
  message?: (string | null) | undefined
  requestId?: (string | null) | undefined
}
type StatusChangeScope = 0 | 1 | 2
type ChangeAlertStatusFilterInfo = {
  categoryIds?: (string[] | null) | undefined
  maxDate?: (string | null) | undefined
  minDate?: (string | null) | undefined
  scope?: StatusChangeScope | undefined
  teamIds?: (string[] | null) | undefined
}
type ChangeAlertStatusMultipleInfo = {
  alertIds?: (string[] | null) | undefined
  description?: (string | null) | undefined
  userId?: (string | null) | undefined
}
type PagedResultsPublicContinuationToken = {
  nextPartitionKey?: (string | null) | undefined
  nextRowKey?: (string | null) | undefined
  nextTableName?: (string | null) | undefined
}
type AlertFilterPublic = {
  alertIds?: (string[] | null) | undefined
  alertsAfterId?: (string | null) | undefined
  categoryIds?: (string[] | null) | undefined
  continuationToken?: PagedResultsPublicContinuationToken | undefined
  maxCreationDate?: (string | null) | undefined
  minCreationDate?: (string | null) | undefined
  modifiedSince?: (string | null) | undefined
  showPersonalHiddenCategories?: boolean | undefined
  statusCodes?: AlertStatusCodes | undefined
  teamId?: (string | null) | undefined
  textToSearch?: (string | null) | undefined
}
type AlertDeliveryStatusCodes = 0 | 1 | 2 | 4 | 6 | 8 | 22 | 24 | 26 | 30 | 31
type UserDeliveryStatusInfoCodes = 0 | 1 | 2 | 4 | 6 | 8 | 24 | 26 | 30 | 31 | 32
type UserDeliveryStatusInfo = {
  statusCode?: UserDeliveryStatusInfoCodes | undefined
  userId?: (string | null) | undefined
}
type AlertDeliveryStatusInfo = {
  statusCode?: AlertDeliveryStatusCodes | undefined
  users?: (UserDeliveryStatusInfo[] | null) | undefined
}
type OverviewAlert = {
  alertDeliveryStatus?: AlertDeliveryStatusInfo | undefined
  annotations?: (AlertAnnotationInfo[] | null) | undefined
  categoryId?: (string | null) | undefined
  eventId?: (string | null) | undefined
  flags?: number | undefined
  historyDetailed?: AlertHistoryInfoDetailed | undefined
  id?: (string | null) | undefined
  lastModified?: string | undefined
  requiredAcknowledgements?: number | undefined
  status?: AlertStatusCodes | undefined
  subscriptionId?: (string | null) | undefined
  teamId?: (string | null) | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
}
type OverviewAlertPagedResultsPublic = {
  continuationToken?: PagedResultsPublicContinuationToken | undefined
  hasMore?: boolean | undefined
  results?: (OverviewAlert[] | null) | undefined
}
type AlertCounts = {
  acked?: bigint | undefined
  closed?: bigint | undefined
  end?: (string | null) | undefined
  lastModified?: (string | null) | undefined
  start?: (string | null) | undefined
  unhandled?: bigint | undefined
}
type AlertReport = {
  last24Hours?: AlertCounts | undefined
  subscriptionId?: (string | null) | undefined
  teamCurrentDuty?: AlertCounts | undefined
  teamId?: (string | null) | undefined
  teamLastDuty?: AlertCounts | undefined
  userId?: (string | null) | undefined
  userLastDutyChange?: AlertCounts | undefined
}
type ChangeAlertStatusInfo = {
  description?: (string | null) | undefined
  userId?: (string | null) | undefined
}
type AlertAttachmentInfo = {
  contentType?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type AlertNotificationInfoChannelType = 0 | 1 | 2 | 4 | 8 | 16
type AlertNotificationInfoMessageStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type AlertNotificationInfoUserStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6
type AlertNotificationInfo = {
  address?: (string | null) | undefined
  channelType?: AlertNotificationInfoChannelType | undefined
  deviceName?: (string | null) | undefined
  lastUpdate?: string | undefined
  messageStatus?: AlertNotificationInfoMessageStatus | undefined
  userId?: (string | null) | undefined
  userStatus?: AlertNotificationInfoUserStatus | undefined
}
type CategoryAugmentationType = 0 | 1 | 2 | 3
type CategoryAugmentation = {
  enabled?: boolean | undefined
  name?: (string | null) | undefined
  type?: CategoryAugmentationType | undefined
  value?: (string | null) | undefined
}
type KeywordMatchingType = 0 | 1
type CategoryInfoOptions = 0 | 1 | 2 | 4 | 8
type CategoryInfo = {
  augmentations?: (CategoryAugmentation[] | null) | undefined
  color?: (string | null) | undefined
  id?: (string | null) | undefined
  imageName?: (string | null) | undefined
  isDefault?: boolean | undefined
  keywordMatching?: KeywordMatchingType | undefined
  keywords?: (string[] | null) | undefined
  lastMatch?: (string | null) | undefined
  name?: (string | null) | undefined
  options?: CategoryInfoOptions | undefined
  order?: number | undefined
}
type CategoryMetrics = {
  categoryId?: (string | null) | undefined
  last24Hours?: bigint | undefined
  lastAlert?: (string | null) | undefined
  subscriberCount?: number | undefined
}
type CategorySubscriptionStatus = 0 | 1 | 2
type CategorySubscriptionInfo = {
  status?: CategorySubscriptionStatus | undefined
  userId?: (string | null) | undefined
}
type EventStatusCodes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 1000
type EventFilter = {
  continuationToken?: PagedResultsPublicContinuationToken | undefined
  eventStatusCode?: EventStatusCodes | undefined
  maxCreationDate?: (string | null) | undefined
  minCreationDate?: (string | null) | undefined
  modifiedSince?: (string | null) | undefined
  teamId?: (string | null) | undefined
  textToSearch?: (string | null) | undefined
}
type EventSeverities = 0 | 1 | 2
type OverviewEvent = {
  acknowledgedAlerts?: (string[] | null) | undefined
  alertId?: (string | null) | undefined
  categoryId?: (string | null) | undefined
  closedAlerts?: (string[] | null) | undefined
  creationTime?: string | undefined
  eventSourceType?: EventSourceTypes | undefined
  eventStatus?: EventStatusCodes | undefined
  id?: (string | null) | undefined
  lastModified?: string | undefined
  severity?: EventSeverities | undefined
  teamId?: (string | null) | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
}
type OverviewEventPagedResultsPublic = {
  continuationToken?: PagedResultsPublicContinuationToken | undefined
  hasMore?: boolean | undefined
  results?: (OverviewEvent[] | null) | undefined
}
type PrepaidBalanceInfo = {
  balance?: number | undefined
  latestTopUp?: (string | null) | undefined
  pendingTransaction?: boolean | undefined
}
type PrepaidSettingsInfo = {
  topUpAmount?: number | undefined
  topUpEnabled?: boolean | undefined
  topUpLimit?: number | undefined
}
type PrepaidTransactionInfo = {
  autoTopUpId?: (string | null) | undefined
  created?: string | undefined
  createdBy?: (string | null) | undefined
  credits?: number | undefined
  currency?: (string | null) | undefined
  modified?: string | undefined
  packageCode?: (string | null) | undefined
  status?: (string | null) | undefined
  statusCode?: number | undefined
  subscriptionId?: (string | null) | undefined
  transactionId?: (string | null) | undefined
}
type ScriptInstanceInfoRuntimeStatus = 0 | 1 | 2 | 3 | -1
type ScriptInstanceInfoRuntimeInformationModel = {
  status?: ScriptInstanceInfoRuntimeStatus | undefined
  statusMessage?: (string | null) | undefined
}
type ScriptInstanceDetails = {
  config?: ({ [x: string]: unknown } | null) | undefined
  customScriptDescription?: (string | null) | undefined
  customScriptName?: (string | null) | undefined
  enabled?: boolean | undefined
  eventPattern?: ({ [x: string]: unknown } | null) | undefined
  instanceId?: (string | null) | undefined
  lastModified?: (string | null) | undefined
  runtimeInformation?: ScriptInstanceInfoRuntimeInformationModel | undefined
  scriptId?: (string | null) | undefined
  scriptName?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  teamId?: (string | null) | undefined
}
type ScriptInstanceCustomUserData = {
  customScriptDescription?: (string | null) | undefined
  customScriptName?: (string | null) | undefined
  instanceId?: (string | null) | undefined
  scriptId?: (string | null) | undefined
}
type ScriptDescriptionData = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  scriptType?: (string | null) | undefined
  shortDescription?: (string | null) | undefined
}
type ScriptLocalizationDetail = {
  configMetadata?: ({ [x: string]: unknown } | null) | undefined
  data?: ScriptDescriptionData | undefined
  language?: (string | null) | undefined
}
type InventoryScriptInfo = {
  config?: ({ [x: string]: unknown } | null) | undefined
  data?: ScriptDescriptionData | undefined
  eventPattern?: ({ [x: string]: unknown } | null) | undefined
  scriptId?: (string | null) | undefined
  scriptLocalizationDetails?: (ScriptLocalizationDetail[] | null) | undefined
  scriptName?: (string | null) | undefined
  visibility?: (string | null) | undefined
}
type SubscriptionInfo = {
  branchId?: (string | null) | undefined
  country?: (string | null) | undefined
  currency?: (string | null) | undefined
  externalAccountId?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  nextBilling?: (string | null) | undefined
  ownerId?: (string | null) | undefined
  planCode?: (string | null) | undefined
  planState?: number | undefined
  referralEnabled?: boolean | undefined
  status?: number | undefined
}
type ChannelPriceInfo = { smsPerMessage?: number | undefined; voicePerMinute?: number | undefined }
type SubscriptionFeature = {
  name?: (string | null) | undefined
  type?: number | undefined
  value?: (string | null) | undefined
}
type SubscriptionProfile = { name?: (string | null) | undefined }
type TeamInfo = {
  id?: (string | null) | undefined
  memberIds?: (string[] | null) | undefined
  name?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  timezone?: (string | null) | undefined
}
type UserLicenseInfo = {
  currentUsers?: number | undefined
  isFree?: boolean | undefined
  isTrial?: boolean | undefined
  licensedUsers?: number | undefined
  planCode?: (string | null) | undefined
}
type AlertAuditReportFileInfo = {}
type AlertFilterActions = 0 | 1 | 2
type AlertFilterModes = 0 | 1
type TeamCategoryOptOutModes = 0 | 1 | 2
type PersistentNotificationModes = 0 | 1
type AlertResponseModes = 2 | 4
type AlertSettings = {
  filterAction?: AlertFilterActions | undefined
  filterMode?: AlertFilterModes | undefined
  optOutMode?: TeamCategoryOptOutModes | undefined
  persistentNotificicationMode?: PersistentNotificationModes | undefined
  responseMode?: AlertResponseModes | undefined
  responseTime?: number | undefined
}
type DutyAuditReportFileInfo = {}
type DutySummaryInfo = {
  dutyEnd?: (string | null) | undefined
  dutyId?: (string | null) | undefined
  dutyStart?: (string | null) | undefined
}
type TeamDutySummaryInfo = {
  dutyAssistEnabled?: boolean | undefined
  dutySummaries?: (DutySummaryInfo[] | null) | undefined
}
type EventSourceEndpointTypes = 0 | 1 | 2 | 3
type EventSourceEndpointInfo = {
  address?: (string | null) | undefined
  groupId?: (string | null) | undefined
  lastEventRaised?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  teamId?: (string | null) | undefined
  type?: EventSourceEndpointTypes | undefined
}
type InvitedUserInfo = {
  id?: (string | null) | undefined
  isInvite?: boolean | undefined
  mail?: (string | null) | undefined
  name?: (string | null) | undefined
  roleId?: (string | null) | undefined
}
type UserInvite = { email?: (string | null) | undefined; roleId?: (string | null) | undefined }
type UsersInvitation = {
  inviterId?: (string | null) | undefined
  invites?: (UserInvite[] | null) | undefined
}
type UserInvitationResult = {
  errorCode?: (number | null) | undefined
  errorMessage?: (string | null) | undefined
  invitedUser?: InvitedUserInfo | undefined
  success?: boolean | undefined
}
type UserInvitationInfo = {
  inviterId?: (string | null) | undefined
  userMail?: (string | null) | undefined
}
type UserMembership = {
  isValid?: boolean | undefined
  roleId?: (string | null) | undefined
  teamId?: (string | null) | undefined
}
type ChannelTypes = 0 | 1 | 2 | 4 | 8 | 16
type DeviceType = 0 | 1 | 2
type Device = {
  appVersion?: (string | null) | undefined
  deviceId?: (string | null) | undefined
  name?: (string | null) | undefined
  osVersion?: (string | null) | undefined
  ringtone?: (string | null) | undefined
  ringtoneDisabled?: boolean | undefined
  type?: DeviceType | undefined
}
type ContactAddressInfo = {
  address?: (string | null) | undefined
  channel?: ChannelTypes | undefined
  created?: string | undefined
  device?: Device | undefined
  id?: (string | null) | undefined
  lastUpdated?: string | undefined
  options?: number | undefined
  userId?: (string | null) | undefined
}
type UserDutyInfo = {
  lastStatusChange?: (string | null) | undefined
  onDuty?: boolean | undefined
  onManagerDuty?: boolean | undefined
  overdue?: boolean | undefined
}
type UserInfo = {
  colorIndex?: number | undefined
  contactAddresses?: (ContactAddressInfo[] | null) | undefined
  dutyInfo?: UserDutyInfo | undefined
  id?: (string | null) | undefined
  isDeactivated?: boolean | undefined
  isInvite?: boolean | undefined
  mail?: (string | null) | undefined
  name?: (string | null) | undefined
  roleId?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  timeZone?: (string | null) | undefined
  userImageLastModified?: (string | null) | undefined
}
type TeamProfile = { name?: (string | null) | undefined }
type ScheduleInfo = {
  end?: string | undefined
  id?: (string | null) | undefined
  options?: number | undefined
  start?: string | undefined
  userId?: (string | null) | undefined
}
type DeleteRangeInfo = { from?: string | undefined; to?: string | undefined }
type TeamSetupProgress = {
  completedSteps?: (string[] | null) | undefined
  teamId?: (string | null) | undefined
  timestamp?: string | undefined
}
type UpdatePasswordInfo = {
  currentPassword?: (string | null) | undefined
  newPassword?: (string | null) | undefined
}
type StringItemsWrapper = { items?: (string[] | null) | undefined }
type UserImage = {
  content?: (string | null) | undefined
  contentDisposition?: (string | null) | undefined
  contentEncoding?: (string | null) | undefined
  contentType?: (string | null) | undefined
  lastModified?: (string | null) | undefined
  name?: (string | null) | undefined
}
type UserProfile = { name?: (string | null) | undefined }
type UserSetupProgress = {
  completedSteps?: (string[] | null) | undefined
  timestamp?: string | undefined
  userId?: (string | null) | undefined
}
type WebhookInfo = {
  enabled?: boolean | undefined
  externalAddress?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  subscriptionId?: (string | null) | undefined
  teamId?: (string | null) | undefined
}
type WebhookBaseInfo = {
  externalAddress?: (string | null) | undefined
  name?: (string | null) | undefined
  teamId?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/alerts': {
      $post:
        | { input: { json: RaiseAlertInfo }; output: AlertInfo; outputFormat: 'json'; status: 201 }
        | { input: { json: RaiseAlertInfo }; output: AlertInfo; outputFormat: 'text'; status: 201 }
        | { input: { json: RaiseAlertInfo }; output: AlertInfo; outputFormat: 'text'; status: 201 }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: RaiseAlertInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/acknowledgeAll': {
      $post:
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/alerts/acknowledgeMultiple': {
      $post:
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/closeAll': {
      $post:
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              json: ChangeAlertStatusFilterInfo
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/closeMultiple': {
      $post:
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/paged': {
      $post:
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: OverviewAlertPagedResultsPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: OverviewAlertPagedResultsPublic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: OverviewAlertPagedResultsPublic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { maxResults?: number | undefined; userId?: string | undefined } } & {
              json: AlertFilterPublic
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/report': {
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: AlertReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: AlertReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: AlertReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/undoAcknowledgeMultiple': {
      $post:
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/undoCloseMultiple': {
      $post:
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: ChangeAlertStatusMultipleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId': {
      $get:
        | {
            input: { param: { alertId: string } }
            output: AlertInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/acknowledge': {
      $post:
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/annotate': {
      $post:
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: AlertAnnotationInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: AlertAnnotationInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: AlertAnnotationInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: AlertAnnotationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/annotations': {
      $get:
        | {
            input: { param: { alertId: string } }
            output: AlertAnnotationInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertAnnotationInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertAnnotationInfo[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { alertId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/attachments': {
      $get:
        | {
            input: { param: { alertId: string } }
            output: AlertAttachmentInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertAttachmentInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertAttachmentInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/attachments/:attachmentId': {
      $get:
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string; attachmentId: string } } & {
              query: {
                width?: number | undefined
                height?: number | undefined
                scale?: boolean | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/close': {
      $post:
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: AlertInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/notifications': {
      $get:
        | {
            input: { param: { alertId: string } }
            output: AlertNotificationInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertNotificationInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: AlertNotificationInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/overview': {
      $get:
        | {
            input: { param: { alertId: string } }
            output: OverviewAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/undoAcknowledge': {
      $post:
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/alerts/:alertId/undoClose': {
      $post:
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: OverviewAlert
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: string } } & { json: ChangeAlertStatusInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/categories/images': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/categories/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: CategoryInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: CategoryInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: CategoryInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/categories/:teamId/metrics': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: CategoryMetrics[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: CategoryMetrics[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: CategoryMetrics[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/categories/:teamId/:categoryId': {
      $delete:
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: CategoryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & { json: CategoryInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/categories/:teamId/:categoryId/metrics': {
      $get:
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryMetrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryMetrics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategoryMetrics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/categories/:teamId/:categoryId/subscriptions': {
      $get:
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategorySubscriptionInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategorySubscriptionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: CategorySubscriptionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: CategorySubscriptionInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: CategorySubscriptionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: CategorySubscriptionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; categoryId: string } } & {
              json: CategorySubscriptionInfo[]
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/events/paged': {
      $post:
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: OverviewEventPagedResultsPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: OverviewEventPagedResultsPublic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: OverviewEventPagedResultsPublic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { maxResults?: number | undefined } } & { json: EventFilter }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/events/:eventId/overview': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: OverviewEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: OverviewEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: OverviewEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/events/:eventId/parameters': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: EventParameterInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: EventParameterInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: EventParameterInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/prepaid/balance': {
      $get:
        | { input: {}; output: PrepaidBalanceInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PrepaidBalanceInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PrepaidBalanceInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/prepaid/settings': {
      $get:
        | { input: {}; output: PrepaidSettingsInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PrepaidSettingsInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PrepaidSettingsInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
      $put:
        | {
            input: { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/prepaid/transactions': {
      $get:
        | { input: {}; output: PrepaidTransactionInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PrepaidTransactionInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PrepaidTransactionInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/scripts/instances': {
      $get:
        | {
            input: { query: { teamId?: string | undefined } }
            output: ScriptInstanceDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ScriptInstanceDetails[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ScriptInstanceDetails[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/instances/:instanceId': {
      $delete:
        | {
            input: { param: { instanceId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceDetails }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/instances/:instanceId/data': {
      $put:
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { instanceId: string } } & { json: ScriptInstanceCustomUserData }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/instances/:instanceId/disable': {
      $post:
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/instances/:instanceId/enable': {
      $post:
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/inventory': {
      $get:
        | { input: {}; output: InventoryScriptInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InventoryScriptInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: InventoryScriptInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/scripts/inventory/parsed': {
      $get:
        | {
            input: { query: { language?: string | undefined } }
            output: InventoryScriptInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: string | undefined } }
            output: InventoryScriptInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { language?: string | undefined } }
            output: InventoryScriptInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/scripts/inventory/parsed/:scriptId': {
      $get:
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ScriptInstanceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ScriptInstanceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { scriptId: string } } & { query: { language?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/subscriptions': {
      $get:
        | { input: {}; output: SubscriptionInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SubscriptionInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SubscriptionInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/channelPrices': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: ChannelPriceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ChannelPriceInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ChannelPriceInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/features': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionFeature[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionFeature[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: SubscriptionFeature[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/prepaidBalance': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidBalanceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidBalanceInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidBalanceInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/prepaidSettings': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidSettingsInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: PrepaidSettingsInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: PrepaidSettingsInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/prepaidTransactions': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidTransactionInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidTransactionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: PrepaidTransactionInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/profile': {
      $put:
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: SubscriptionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: SubscriptionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: SubscriptionInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/teams': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: TeamInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: TeamInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: TeamInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/subscriptions/:subscriptionId/userLicenses': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: UserLicenseInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UserLicenseInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: UserLicenseInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams': {
      $get:
        | { input: {}; output: TeamInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TeamInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TeamInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/teams/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: TeamInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: TeamInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: TeamInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/alertReports': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: AlertAuditReportFileInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: AlertAuditReportFileInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: AlertAuditReportFileInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/alertReports/:fileName': {
      $get:
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/alertSettings': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: AlertSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: AlertSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: AlertSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: AlertSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: AlertSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: AlertSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: AlertSettings }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/dutyReports': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: DutyAuditReportFileInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: DutyAuditReportFileInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: DutyAuditReportFileInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/dutyReports/:fileName': {
      $get:
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; fileName: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/dutysummary': {
      $get:
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: TeamDutySummaryInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: TeamDutySummaryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: TeamDutySummaryInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: { lastTwoDuties?: boolean | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/eventSources': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: EventSourceEndpointInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: EventSourceEndpointInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: EventSourceEndpointInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/memberships': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: InvitedUserInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: InvitedUserInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: InvitedUserInfo[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: UserInvitationResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: UserInvitationResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: UserInvitationResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: UsersInvitation }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/memberships/resendInviteMail': {
      $post:
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: UserInvitationInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/memberships/:userId': {
      $delete:
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: UserInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; userId: string } } & {
              query: { requesterUserId?: string | undefined }
            } & { json: UserMembership }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/profile': {
      $put:
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: TeamInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: TeamInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: TeamInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: TeamProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/schedules': {
      $get:
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ScheduleInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: {
                UserId?: string | undefined
                MinDate?: string | undefined
                Limit?: number | undefined
              }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ScheduleInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ScheduleInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ScheduleInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: ScheduleInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/schedules/deleteRange': {
      $post:
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ScheduleInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & { json: DeleteRangeInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/schedules/multiple': {
      $post:
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ScheduleInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ScheduleInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } } & {
              query: { overrideExisting?: boolean | undefined }
            } & { json: ScheduleInfo[] }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/schedules/:dutyId': {
      $delete:
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; dutyId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/schedules/:scheduleId': {
      $get:
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ScheduleInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ScheduleInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ScheduleInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string; scheduleId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/setupProgress': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: TeamSetupProgress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: TeamSetupProgress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: TeamSetupProgress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | { input: {}; output: UserInfo[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponseContent; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: UserInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/users/:userId/changePassword': {
      $put:
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { json: UpdatePasswordInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/users/:userId/checkPermissions': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: UserImage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: UserImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: UserImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { teamId?: string | undefined } } & {
              json: StringItemsWrapper
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/users/:userId/dutyStatus': {
      $get:
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/users/:userId/image': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: UserImage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: UserImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: UserImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              query: { height?: number | undefined; width?: number | undefined }
            }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/users/:userId/profile': {
      $put:
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: UserInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: UserInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { json: UserProfile }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/users/:userId/punchIn': {
      $post:
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/users/:userId/punchInAsManager': {
      $post:
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/users/:userId/punchOut': {
      $post:
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserDutyInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/users/:userId/setupProgress': {
      $get:
        | {
            input: { param: { userId: string } }
            output: UserSetupProgress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserSetupProgress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: UserSetupProgress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/webhooks': {
      $get:
        | {
            input: { query: { teamId?: string | undefined } }
            output: WebhookInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: WebhookInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: WebhookInfo[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { teamId?: string | undefined } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $post:
        | { input: { json: WebhookBaseInfo }; output: string; outputFormat: 'json'; status: 201 }
        | { input: { json: WebhookBaseInfo }; output: string; outputFormat: 'text'; status: 201 }
        | { input: { json: WebhookBaseInfo }; output: string; outputFormat: 'text'; status: 201 }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/webhooks/:webhookId': {
      $delete:
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { webhookId: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: WebhookInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookBaseInfo }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/webhooks/:webhookId/disable': {
      $post:
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/webhooks/:webhookId/enable': {
      $post:
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: WebhookInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: ErrorResponseContent
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes

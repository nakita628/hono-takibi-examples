import { createRoute, z } from '@hono/zod-openapi'

const AlertAnnotationInfoSchema = z
  .strictObject({
    annotationType: z.int32().exactOptional(),
    id: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertAnnotationInfo')

const EncodingSchema = z.union([z.literal(0), z.literal(1)]).openapi('Encoding')

const AlertAttachmentSchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    contentType: z.string().nullable().exactOptional(),
    encoding: EncodingSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertAttachment')

const AlertAttachmentInfoSchema = z
  .strictObject({
    contentType: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertAttachmentInfo')

const AlertAuditReportFileInfoSchema = z.strictObject({}).openapi('AlertAuditReportFileInfo')

const AlertCountsSchema = z
  .strictObject({
    acked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    closed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    end: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    start: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    unhandled: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AlertCounts')

const AlertDeliveryStatusCodesSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(4),
    z.literal(6),
    z.literal(8),
    z.literal(22),
    z.literal(24),
    z.literal(26),
    z.literal(30),
    z.literal(31),
  ])
  .openapi('AlertDeliveryStatusCodes')

const UserDeliveryStatusInfoCodesSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(4),
    z.literal(6),
    z.literal(8),
    z.literal(24),
    z.literal(26),
    z.literal(30),
    z.literal(31),
    z.literal(32),
  ])
  .openapi('UserDeliveryStatusInfoCodes')

const UserDeliveryStatusInfoSchema = z
  .strictObject({
    statusCode: UserDeliveryStatusInfoCodesSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDeliveryStatusInfo')

const AlertDeliveryStatusInfoSchema = z
  .strictObject({
    statusCode: AlertDeliveryStatusCodesSchema.exactOptional(),
    users: z.array(UserDeliveryStatusInfoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertDeliveryStatusInfo')

const AlertFilterActionsSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('AlertFilterActions')

const AlertFilterModesSchema = z.union([z.literal(0), z.literal(1)]).openapi('AlertFilterModes')

const PagedResultsPublicContinuationTokenSchema = z
  .strictObject({
    nextPartitionKey: z.string().nullable().exactOptional(),
    nextRowKey: z.string().nullable().exactOptional(),
    nextTableName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagedResultsPublicContinuationToken')

const AlertStatusCodesSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(4),
    z.literal(8),
    z.literal(16),
    z.literal(32),
  ])
  .openapi('AlertStatusCodes')

const AlertFilterPublicSchema = z
  .strictObject({
    alertIds: z.array(z.string()).nullable().exactOptional(),
    alertsAfterId: z.string().nullable().exactOptional(),
    categoryIds: z.array(z.string()).nullable().exactOptional(),
    continuationToken: PagedResultsPublicContinuationTokenSchema.exactOptional(),
    maxCreationDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    minCreationDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    modifiedSince: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    showPersonalHiddenCategories: z.boolean().exactOptional(),
    statusCodes: AlertStatusCodesSchema.exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    textToSearch: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertFilterPublic')

const AlertHistoryInfoUserEntryTypeSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
  ])
  .openapi('AlertHistoryInfoUserEntryType')

const AlertHistoryInfoEntrySchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    type: AlertHistoryInfoUserEntryTypeSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertHistoryInfoEntry')

const AlertHistoryInfoDetailedSchema = z
  .strictObject({
    acknowledged: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    acknowledgedgements: z.array(z.string()).nullable().exactOptional(),
    closed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    closedBy: z.string().nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    historyEntries: z.array(AlertHistoryInfoEntrySchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertHistoryInfoDetailed')

const EventSourceTypesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi('EventSourceTypes')

const EventParameterTypesSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(100),
  ])
  .openapi('EventParameterTypes')

const EventParameterInfoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    type: EventParameterTypesSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventParameterInfo')

const AlertSeveritiesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('AlertSeverities')

const AlertInfoSchema = z
  .strictObject({
    annotations: z.array(AlertAnnotationInfoSchema).nullable().exactOptional(),
    attachments: z.array(AlertAttachmentSchema).nullable().exactOptional(),
    category: z.string().nullable().exactOptional(),
    categoryId: z.string().nullable().exactOptional(),
    eventId: z.string().nullable().exactOptional(),
    eventSourceId: z.string().nullable().exactOptional(),
    eventSourceType: EventSourceTypesSchema.exactOptional(),
    flags: z.int32().exactOptional(),
    history: AlertHistoryInfoDetailedSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).exactOptional(),
    parameters: z.array(EventParameterInfoSchema).nullable().exactOptional(),
    severity: AlertSeveritiesSchema.exactOptional(),
    status: AlertStatusCodesSchema.exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertInfo')

const AlertNotificationInfoChannelTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)])
  .openapi('AlertNotificationInfoChannelType')

const AlertNotificationInfoMessageStatusSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
  ])
  .openapi('AlertNotificationInfoMessageStatus')

const AlertNotificationInfoUserStatusSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ])
  .openapi('AlertNotificationInfoUserStatus')

const AlertNotificationInfoSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    channelType: AlertNotificationInfoChannelTypeSchema.exactOptional(),
    deviceName: z.string().nullable().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    messageStatus: AlertNotificationInfoMessageStatusSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
    userStatus: AlertNotificationInfoUserStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertNotificationInfo')

const AlertReportSchema = z
  .strictObject({
    last24Hours: AlertCountsSchema.exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamCurrentDuty: AlertCountsSchema.exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    teamLastDuty: AlertCountsSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
    userLastDutyChange: AlertCountsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertReport')

const AlertResponseModesSchema = z.union([z.literal(2), z.literal(4)]).openapi('AlertResponseModes')

const TeamCategoryOptOutModesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('TeamCategoryOptOutModes')

const PersistentNotificationModesSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi('PersistentNotificationModes')

const AlertSettingsSchema = z
  .strictObject({
    filterAction: AlertFilterActionsSchema.exactOptional(),
    filterMode: AlertFilterModesSchema.exactOptional(),
    optOutMode: TeamCategoryOptOutModesSchema.exactOptional(),
    persistentNotificicationMode: PersistentNotificationModesSchema.exactOptional(),
    responseMode: AlertResponseModesSchema.exactOptional(),
    responseTime: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertSettings')

const CategoryAugmentationTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('CategoryAugmentationType')

const CategoryAugmentationSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    type: CategoryAugmentationTypeSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CategoryAugmentation')

const KeywordMatchingTypeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi('KeywordMatchingType')

const CategoryInfoOptionsSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8)])
  .openapi('CategoryInfoOptions')

const CategoryInfoSchema = z
  .strictObject({
    augmentations: z.array(CategoryAugmentationSchema).nullable().exactOptional(),
    color: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    imageName: z.string().nullable().exactOptional(),
    isDefault: z.boolean().exactOptional().openapi({ readOnly: true }),
    keywordMatching: KeywordMatchingTypeSchema.exactOptional(),
    keywords: z.array(z.string()).nullable().exactOptional(),
    lastMatch: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    options: CategoryInfoOptionsSchema.exactOptional(),
    order: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CategoryInfo')

const CategoryMetricsSchema = z
  .strictObject({
    categoryId: z.string().nullable().exactOptional(),
    last24Hours: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    lastAlert: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    subscriberCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CategoryMetrics')

const CategorySubscriptionStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('CategorySubscriptionStatus')

const CategorySubscriptionInfoSchema = z
  .strictObject({
    status: CategorySubscriptionStatusSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CategorySubscriptionInfo')

const StatusChangeScopeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('StatusChangeScope')

const ChangeAlertStatusFilterInfoSchema = z
  .strictObject({
    categoryIds: z.array(z.string()).nullable().exactOptional(),
    maxDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    minDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    scope: StatusChangeScopeSchema.exactOptional(),
    teamIds: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChangeAlertStatusFilterInfo')

const ChangeAlertStatusInfoSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChangeAlertStatusInfo')

const ChangeAlertStatusMultipleInfoSchema = z
  .strictObject({
    alertIds: z.array(z.string()).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChangeAlertStatusMultipleInfo')

const ChannelPriceInfoSchema = z
  .strictObject({
    smsPerMessage: z.int32().exactOptional(),
    voicePerMinute: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelPriceInfo')

const ChannelTypesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)])
  .openapi('ChannelTypes')

const DeviceTypeSchema = z.union([z.literal(0), z.literal(1), z.literal(2)]).openapi('DeviceType')

const DeviceSchema = z
  .strictObject({
    appVersion: z.string().nullable().exactOptional(),
    deviceId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    osVersion: z.string().nullable().exactOptional(),
    ringtone: z.string().nullable().exactOptional(),
    ringtoneDisabled: z.boolean().exactOptional(),
    type: DeviceTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Device')

const ContactAddressInfoSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    channel: ChannelTypesSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    device: DeviceSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastUpdated: z.iso.datetime({ offset: true }).exactOptional(),
    options: z.int32().exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactAddressInfo')

const DeleteRangeInfoSchema = z
  .strictObject({
    from: z.iso.datetime({ offset: true }).exactOptional(),
    to: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRangeInfo')

const DutyAuditReportFileInfoSchema = z.strictObject({}).openapi('DutyAuditReportFileInfo')

const DutySummaryInfoSchema = z
  .strictObject({
    dutyEnd: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    dutyId: z.string().nullable().exactOptional(),
    dutyStart: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DutySummaryInfo')

const ErrorResponseContentBaseSchema = z
  .strictObject({
    details: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponseContentBase')

const ErrorResponseContentSchema = z
  .strictObject({
    code: z.int32().exactOptional(),
    details: z.string().nullable().exactOptional(),
    errors: z.array(ErrorResponseContentBaseSchema).nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    requestId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponseContent')

const EventStatusCodesSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(1000),
  ])
  .openapi('EventStatusCodes')

const EventFilterSchema = z
  .strictObject({
    continuationToken: PagedResultsPublicContinuationTokenSchema.exactOptional(),
    eventStatusCode: EventStatusCodesSchema.exactOptional(),
    maxCreationDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    minCreationDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    modifiedSince: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    textToSearch: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventFilter')

const EventSeveritiesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('EventSeverities')

const EventSourceEndpointTypesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('EventSourceEndpointTypes')

const EventSourceEndpointInfoSchema = z
  .strictObject({
    address: z.string().nullable().exactOptional(),
    groupId: z.string().nullable().exactOptional(),
    lastEventRaised: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    type: EventSourceEndpointTypesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventSourceEndpointInfo')

const ScriptDescriptionDataSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    scriptType: z.string().nullable().exactOptional(),
    shortDescription: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScriptDescriptionData')

const ScriptLocalizationDetailSchema = z
  .strictObject({
    configMetadata: z.any().nullable().exactOptional(),
    data: ScriptDescriptionDataSchema.exactOptional(),
    language: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScriptLocalizationDetail')

const InventoryScriptInfoSchema = z
  .strictObject({
    config: z.any().nullable().exactOptional(),
    data: ScriptDescriptionDataSchema.exactOptional(),
    eventPattern: z.any().nullable().exactOptional(),
    scriptId: z.string().nullable().exactOptional(),
    scriptLocalizationDetails: z.array(ScriptLocalizationDetailSchema).nullable().exactOptional(),
    scriptName: z.string().nullable().exactOptional(),
    visibility: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InventoryScriptInfo')

const InvitedUserInfoSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    isInvite: z.boolean().exactOptional(),
    mail: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    roleId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvitedUserInfo')

const OverviewAlertSchema = z
  .strictObject({
    alertDeliveryStatus: AlertDeliveryStatusInfoSchema.exactOptional(),
    annotations: z.array(AlertAnnotationInfoSchema).nullable().exactOptional(),
    categoryId: z.string().nullable().exactOptional(),
    eventId: z.string().nullable().exactOptional(),
    flags: z.int32().exactOptional(),
    historyDetailed: AlertHistoryInfoDetailedSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).exactOptional(),
    requiredAcknowledgements: z.int32().exactOptional(),
    status: AlertStatusCodesSchema.exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverviewAlert')

const OverviewAlertPagedResultsPublicSchema = z
  .strictObject({
    continuationToken: PagedResultsPublicContinuationTokenSchema.exactOptional(),
    hasMore: z.boolean().exactOptional().openapi({ readOnly: true }),
    results: z.array(OverviewAlertSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverviewAlertPagedResultsPublic')

const OverviewEventSchema = z
  .strictObject({
    acknowledgedAlerts: z.array(z.string()).nullable().exactOptional(),
    alertId: z.string().nullable().exactOptional(),
    categoryId: z.string().nullable().exactOptional(),
    closedAlerts: z.array(z.string()).nullable().exactOptional(),
    creationTime: z.iso.datetime({ offset: true }).exactOptional(),
    eventSourceType: EventSourceTypesSchema.exactOptional(),
    eventStatus: EventStatusCodesSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).exactOptional(),
    severity: EventSeveritiesSchema.exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverviewEvent')

const OverviewEventPagedResultsPublicSchema = z
  .strictObject({
    continuationToken: PagedResultsPublicContinuationTokenSchema.exactOptional(),
    hasMore: z.boolean().exactOptional().openapi({ readOnly: true }),
    results: z.array(OverviewEventSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverviewEventPagedResultsPublic')

const PrepaidBalanceInfoSchema = z
  .strictObject({
    balance: z.int32().exactOptional(),
    latestTopUp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pendingTransaction: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrepaidBalanceInfo')

const PrepaidSettingsInfoSchema = z
  .strictObject({
    topUpAmount: z.int32().exactOptional(),
    topUpEnabled: z.boolean().exactOptional(),
    topUpLimit: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrepaidSettingsInfo')

const PrepaidTransactionInfoSchema = z
  .strictObject({
    autoTopUpId: z.string().nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: z.string().nullable().exactOptional(),
    credits: z.int32().exactOptional(),
    currency: z.string().nullable().exactOptional(),
    modified: z.iso.datetime({ offset: true }).exactOptional(),
    packageCode: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
    statusCode: z.int32().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    transactionId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrepaidTransactionInfo')

const RaiseAlertInfoSchema = z
  .strictObject({
    attachments: z.array(AlertAttachmentSchema).nullable().exactOptional(),
    category: z.string().nullable().exactOptional(),
    externalId: z.string().nullable().exactOptional(),
    flags: z.int32().exactOptional(),
    parameters: z.array(EventParameterInfoSchema).nullable().exactOptional(),
    severity: AlertSeveritiesSchema.exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RaiseAlertInfo')

const ScheduleInfoSchema = z
  .strictObject({
    end: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().nullable().exactOptional(),
    options: z.int32().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleInfo')

const ScriptInstanceCustomUserDataSchema = z
  .strictObject({
    customScriptDescription: z.string().nullable().exactOptional(),
    customScriptName: z.string().nullable().exactOptional(),
    instanceId: z.string().nullable().exactOptional(),
    scriptId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScriptInstanceCustomUserData')

const ScriptInstanceInfoRuntimeStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(-1)])
  .openapi('ScriptInstanceInfoRuntimeStatus')

const ScriptInstanceInfoRuntimeInformationModelSchema = z
  .strictObject({
    status: ScriptInstanceInfoRuntimeStatusSchema.exactOptional(),
    statusMessage: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScriptInstanceInfoRuntimeInformationModel')

const ScriptInstanceDetailsSchema = z
  .strictObject({
    config: z.any().nullable().exactOptional(),
    customScriptDescription: z.string().nullable().exactOptional(),
    customScriptName: z.string().nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
    eventPattern: z.any().nullable().exactOptional(),
    instanceId: z.string().nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    runtimeInformation: ScriptInstanceInfoRuntimeInformationModelSchema.exactOptional(),
    scriptId: z.string().nullable().exactOptional(),
    scriptName: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScriptInstanceDetails')

const StringItemsWrapperSchema = z
  .strictObject({ items: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('StringItemsWrapper')

const SubscriptionFeatureSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    type: z.int32().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionFeature')

const SubscriptionInfoSchema = z
  .strictObject({
    branchId: z.string().nullable().exactOptional(),
    country: z.string().nullable().exactOptional(),
    currency: z.string().nullable().exactOptional(),
    externalAccountId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nextBilling: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    ownerId: z.string().nullable().exactOptional(),
    planCode: z.string().nullable().exactOptional(),
    planState: z.int32().exactOptional(),
    referralEnabled: z.boolean().exactOptional(),
    status: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionInfo')

const SubscriptionProfileSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('SubscriptionProfile')

const TeamDutySummaryInfoSchema = z
  .strictObject({
    dutyAssistEnabled: z.boolean().exactOptional(),
    dutySummaries: z.array(DutySummaryInfoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamDutySummaryInfo')

const TeamInfoSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    memberIds: z.array(z.string()).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    timezone: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamInfo')

const TeamProfileSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('TeamProfile')

const TeamSetupProgressSchema = z
  .strictObject({
    completedSteps: z.array(z.string()).nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSetupProgress')

const UpdatePasswordInfoSchema = z
  .strictObject({
    currentPassword: z.string().nullable().exactOptional(),
    newPassword: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePasswordInfo')

const UserDutyInfoSchema = z
  .strictObject({
    lastStatusChange: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    onDuty: z.boolean().exactOptional(),
    onManagerDuty: z.boolean().exactOptional(),
    overdue: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDutyInfo')

const UserImageSchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    contentDisposition: z.string().nullable().exactOptional(),
    contentEncoding: z.string().nullable().exactOptional(),
    contentType: z.string().nullable().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserImage')

const UserInfoSchema = z
  .strictObject({
    colorIndex: z.int32().exactOptional(),
    contactAddresses: z.array(ContactAddressInfoSchema).nullable().exactOptional(),
    dutyInfo: UserDutyInfoSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    isDeactivated: z.boolean().exactOptional(),
    isInvite: z.boolean().exactOptional(),
    mail: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    roleId: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    timeZone: z.string().nullable().exactOptional(),
    userImageLastModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserInfo')

const UserInvitationInfoSchema = z
  .strictObject({
    inviterId: z.string().nullable().exactOptional(),
    userMail: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserInvitationInfo')

const UserInvitationResultSchema = z
  .strictObject({
    errorCode: z.int32().nullable().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    invitedUser: InvitedUserInfoSchema.exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserInvitationResult')

const UserInviteSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    roleId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserInvite')

const UserLicenseInfoSchema = z
  .strictObject({
    currentUsers: z.int32().exactOptional(),
    isFree: z.boolean().exactOptional(),
    isTrial: z.boolean().exactOptional(),
    licensedUsers: z.int32().exactOptional(),
    planCode: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserLicenseInfo')

const UserMembershipSchema = z
  .strictObject({
    isValid: z.boolean().exactOptional().openapi({ readOnly: true }),
    roleId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserMembership')

const UserProfileSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserProfile')

const UserSetupProgressSchema = z
  .strictObject({
    completedSteps: z.array(z.string()).nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSetupProgress')

const UsersInvitationSchema = z
  .strictObject({
    inviterId: z.string().nullable().exactOptional(),
    invites: z.array(UserInviteSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersInvitation')

const WebhookBaseInfoSchema = z
  .strictObject({
    externalAddress: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebhookBaseInfo')

const WebhookInfoSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional(),
    externalAddress: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    teamId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebhookInfo')

const Oauth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://connect.signl4.com/identity/connect/authorize',
      refreshUrl: 'https://connect.signl4.com/identity/connect/token',
      scopes: {
        offline_access: 'Access write operations',
        public_api_read: 'Access write operations',
        public_api_write: 'Access read operations',
      },
      tokenUrl: 'https://connect.signl4.com/identity/connect/token',
    },
  },
  type: 'oauth2',
}

export const postAlertsRoute = createRoute({
  method: 'post',
  path: '/alerts',
  tags: ['Alerts'],
  summary: 'Trigger Alert',
  description:
    'Triggers a new alert for your team. All team members on duty will receive alert notifications.',
  request: {
    body: {
      description: 'Alert to raise.',
      content: {
        'application/*+json': { schema: RaiseAlertInfoSchema },
        'application/json': { schema: RaiseAlertInfoSchema },
        'application/json-patch+json': { schema: RaiseAlertInfoSchema },
        'text/json': { schema: RaiseAlertInfoSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertInfoSchema },
        'text/json': { schema: AlertInfoSchema },
        'text/plain': { schema: AlertInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAcknowledgeAllRoute = createRoute({
  method: 'post',
  path: '/alerts/acknowledgeAll',
  tags: ['Alerts'],
  summary: 'Confirms all visible alerts',
  description:
    'This method confirms all unhandled alerts your team currently has by a specific user.',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User ID of the user to be used to acknowledge the alarms.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusFilterInfoSchema },
        'application/json': { schema: ChangeAlertStatusFilterInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusFilterInfoSchema },
        'text/json': { schema: ChangeAlertStatusFilterInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: { description: 'Internal general error occured.' },
  },
})

export const postAlertsAcknowledgeMultipleRoute = createRoute({
  method: 'post',
  path: '/alerts/acknowledgeMultiple',
  tags: ['Alerts'],
  summary: 'Acknowlegde multiple alerts',
  description: 'This method confirms all alerts provided.',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'text/json': { schema: ChangeAlertStatusMultipleInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsCloseAllRoute = createRoute({
  method: 'post',
  path: '/alerts/closeAll',
  tags: ['Alerts'],
  summary: 'Close all acknowledged alerts.',
  description: 'This method closes all acknowledged alerts your team currently has.',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User ID of the user to be used to close the alarms.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusFilterInfoSchema },
        'application/json': { schema: ChangeAlertStatusFilterInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusFilterInfoSchema },
        'text/json': { schema: ChangeAlertStatusFilterInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsCloseMultipleRoute = createRoute({
  method: 'post',
  path: '/alerts/closeMultiple',
  tags: ['Alerts'],
  summary: 'Close multiple alerts',
  description: 'This method closes all alerts provided.',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'text/json': { schema: ChangeAlertStatusMultipleInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsPagedRoute = createRoute({
  method: 'post',
  path: '/alerts/paged',
  tags: ['Alerts'],
  summary: 'Gets alerts paged',
  request: {
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.\r\n                Number of alerts could be less if filtered but at least 1.',
            in: 'query',
            name: 'maxResults',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User ID of the user you want to get alerts for.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The filter defines which alerts are supposed to be retrieved.',
      content: {
        'application/*+json': { schema: AlertFilterPublicSchema },
        'application/json': { schema: AlertFilterPublicSchema },
        'application/json-patch+json': { schema: AlertFilterPublicSchema },
        'text/json': { schema: AlertFilterPublicSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns a paged result with found alerts and continuation token if more alerts are in the database.',
      content: {
        'application/json': { schema: OverviewAlertPagedResultsPublicSchema },
        'text/json': { schema: OverviewAlertPagedResultsPublicSchema },
        'text/plain': { schema: OverviewAlertPagedResultsPublicSchema },
      },
    },
    204: { description: 'There were no alerts found for the specified filter.' },
    400: {
      description: 'Required parameters could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Authorization failed',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsReportRoute = createRoute({
  method: 'get',
  path: '/alerts/report',
  tags: ['Alerts'],
  summary: 'Get Alert Report',
  description:
    'Returns information about the occurred alert volume in different time periods as well as information about the\r\nresponse behaviour (amount of confirmed and unhandled alerts) of your team members.',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User ID of the user for whom you want a report.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertReportSchema },
        'text/json': { schema: AlertReportSchema },
        'text/plain': { schema: AlertReportSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsUndoAcknowledgeMultipleRoute = createRoute({
  method: 'post',
  path: '/alerts/undoAcknowledgeMultiple',
  tags: ['Alerts'],
  summary: 'Queue undo of multiple acknowledgments.',
  description:
    'This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.',
  request: {
    body: {
      description: 'Configure which user should be undone for which alerts.',
      content: {
        'application/*+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'text/json': { schema: ChangeAlertStatusMultipleInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsUndoCloseMultipleRoute = createRoute({
  method: 'post',
  path: '/alerts/undoCloseMultiple',
  tags: ['Alerts'],
  summary: 'Withdraw closure of multiple alerts',
  description:
    'This method tries to undo multiple alert closes. The operation is handled in the background.',
  request: {
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusMultipleInfoSchema },
        'text/json': { schema: ChangeAlertStatusMultipleInfoSchema },
      },
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}',
  tags: ['Alerts'],
  summary: 'Get Alert',
  description: 'Gets an alert by id.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested Alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertInfoSchema },
        'text/json': { schema: AlertInfoSchema },
        'text/plain': { schema: AlertInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAlertIdAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/alerts/{alertId}/acknowledge',
  tags: ['Alerts'],
  summary: 'Acknowledge an alert',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id to acknowledge an alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusInfoSchema },
        'application/json': { schema: ChangeAlertStatusInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusInfoSchema },
        'text/json': { schema: ChangeAlertStatusInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertInfoSchema },
        'text/json': { schema: AlertInfoSchema },
        'text/plain': { schema: AlertInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'No alert with id was found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description: "Alert can't be acknowledged because it is against the defined alert lifecycle.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAlertIdAnnotateRoute = createRoute({
  method: 'post',
  path: '/alerts/{alertId}/annotate',
  tags: ['Alerts'],
  summary: 'Annotate Alert',
  description: 'Annotates an alert by given Annotation Info.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the alert to annotate.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Annotation Information.',
      content: {
        'application/*+json': { schema: AlertAnnotationInfoSchema },
        'application/json': { schema: AlertAnnotationInfoSchema },
        'application/json-patch+json': { schema: AlertAnnotationInfoSchema },
        'text/json': { schema: AlertAnnotationInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertAnnotationInfoSchema },
        'text/json': { schema: AlertAnnotationInfoSchema },
        'text/plain': { schema: AlertAnnotationInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdAnnotationsRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}/annotations',
  tags: ['Alerts'],
  summary: 'Get annotations of an alert',
  description: 'Get annotations of an alert by id.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested Alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlertAnnotationInfoSchema) },
        'text/json': { schema: z.array(AlertAnnotationInfoSchema) },
        'text/plain': { schema: z.array(AlertAnnotationInfoSchema) },
      },
    },
    204: { description: 'No annotations were found for the alert.' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}/attachments',
  tags: ['Alerts'],
  summary: 'Get attachments of an alert',
  description: 'Get attachments of an alert by id.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested Alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlertAttachmentInfoSchema) },
        'text/json': { schema: z.array(AlertAttachmentInfoSchema) },
        'text/plain': { schema: z.array(AlertAttachmentInfoSchema) },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}/attachments/{attachmentId}',
  tags: ['Alerts'],
  summary: 'Gets a specified attachment of a specified alert.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the alert that contains the wanted attachment.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the attachment, that you want to retrieve.',
            in: 'path',
            name: 'attachmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter defining the wanted width of the picture that is retrieved.',
            in: 'query',
            name: 'width',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter defining the wanted height of the picture that is retrieved.',
            in: 'query',
            name: 'height',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      scale: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional parameter defining whether it's wanted to scale the retrieved image. Default is set to\r\ntrue.",
            in: 'query',
            name: 'scale',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the attachment image with additional meta information.',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    204: { description: 'The image of the attachment was not uploaded yet.' },
    400: {
      description: 'A passed parameter was either empty or invalid.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: { description: 'Authorization failed.' },
    404: {
      description: 'The attachment image was not found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAlertIdCloseRoute = createRoute({
  method: 'post',
  path: '/alerts/{alertId}/close',
  tags: ['Alerts'],
  summary: 'Close an alert',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id to acknowledge an alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusInfoSchema },
        'application/json': { schema: ChangeAlertStatusInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusInfoSchema },
        'text/json': { schema: ChangeAlertStatusInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertInfoSchema },
        'text/json': { schema: AlertInfoSchema },
        'text/plain': { schema: AlertInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'No alert with id was found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description: "Alert can't be closed because it is against the defined alert lifecycle.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdNotificationsRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}/notifications',
  tags: ['Alerts'],
  summary: 'Get alert notifications',
  description: 'Get notifications of all users by alert id.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested Alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlertNotificationInfoSchema) },
        'text/json': { schema: z.array(AlertNotificationInfoSchema) },
        'text/plain': { schema: z.array(AlertNotificationInfoSchema) },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getAlertsAlertIdOverviewRoute = createRoute({
  method: 'get',
  path: '/alerts/{alertId}/overview',
  tags: ['Alerts'],
  summary: 'Get an overview alert.',
  description: 'Get overview alert by id.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested Alert.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns alert with all information attached.',
      content: {
        'application/json': { schema: OverviewAlertSchema },
        'text/json': { schema: OverviewAlertSchema },
        'text/plain': { schema: OverviewAlertSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAlertIdUndoAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/alerts/{alertId}/undoAcknowledge',
  tags: ['Alerts'],
  summary: 'Undo the acknowledgement of an alert.',
  description: 'This method tries to undo an alert acknowledgement.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'alertId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusInfoSchema },
        'application/json': { schema: ChangeAlertStatusInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusInfoSchema },
        'text/json': { schema: ChangeAlertStatusInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns updated alert.',
      content: {
        'application/json': { schema: OverviewAlertSchema },
        'text/json': { schema: OverviewAlertSchema },
        'text/plain': { schema: OverviewAlertSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'User is not allowed to undo the acknowledgement.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postAlertsAlertIdUndoCloseRoute = createRoute({
  method: 'post',
  path: '/alerts/{alertId}/undoClose',
  tags: ['Alerts'],
  summary: 'Undo the closure of an alert.',
  description: 'This method tries to undo an alert close.',
  request: {
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'alertId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ChangeAlertStatusInfoSchema },
        'application/json': { schema: ChangeAlertStatusInfoSchema },
        'application/json-patch+json': { schema: ChangeAlertStatusInfoSchema },
        'text/json': { schema: ChangeAlertStatusInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: OverviewAlertSchema },
        'text/json': { schema: OverviewAlertSchema },
        'text/plain': { schema: OverviewAlertSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'User is not allowed to undo the close.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesImagesRoute = createRoute({
  method: 'get',
  path: '/categories/images',
  tags: ['Categories'],
  summary:
    'Gets the names of all alert category images.\r\nYou can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg',
  responses: {
    200: {
      description: 'Returns the alert categories.',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
    204: { description: 'Request was canceled.' },
    403: {
      description: 'If you have no permission to access the resource.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'No categories were found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesTeamIdRoute = createRoute({
  method: 'get',
  path: '/categories/{teamId}',
  tags: ['Categories'],
  summary: 'Get all categories',
  description:
    'Sample Request:\r\n            \r\n    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the categories belong to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the category infos',
      content: {
        'application/json': { schema: z.array(CategoryInfoSchema) },
        'text/json': { schema: z.array(CategoryInfoSchema) },
        'text/plain': { schema: z.array(CategoryInfoSchema) },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postCategoriesTeamIdRoute = createRoute({
  method: 'post',
  path: '/categories/{teamId}',
  tags: ['Categories'],
  summary: 'Create a new category',
  description:
    'Sample Request:\r\n            \r\n    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7\r\n    {\r\n        "name": "Water",\r\n        "imageName": "water.svg",\r\n        "color": "#0000cc",\r\n        "keywordMatching": "Any",\r\n        "keywords": [\r\n            {\r\n                "value": "H2O"\r\n            },\r\n            {\r\n                "value": "Water"\r\n            }\r\n        ]\r\n    }',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Category to be created',
      content: {
        'application/*+json': { schema: CategoryInfoSchema },
        'application/json': { schema: CategoryInfoSchema },
        'application/json-patch+json': { schema: CategoryInfoSchema },
        'text/json': { schema: CategoryInfoSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Returns the newly created category',
      content: {
        'application/json': { schema: CategoryInfoSchema },
        'text/json': { schema: CategoryInfoSchema },
        'text/plain': { schema: CategoryInfoSchema },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesTeamIdMetricsRoute = createRoute({
  method: 'get',
  path: '/categories/{teamId}/metrics',
  tags: ['Categories'],
  summary: 'Get metrics for all categories',
  description:
    'Sample Request:\r\n            \r\n    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the categories belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of category metrics',
      content: {
        'application/json': { schema: z.array(CategoryMetricsSchema) },
        'text/json': { schema: z.array(CategoryMetricsSchema) },
        'text/plain': { schema: z.array(CategoryMetricsSchema) },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesTeamIdCategoryIdRoute = createRoute({
  method: 'get',
  path: '/categories/{teamId}/{categoryId}',
  tags: ['Categories'],
  summary: 'Get a specific category',
  description:
    'Sample Request:\r\n            \r\n    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the category to get',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the category details',
      content: {
        'application/json': { schema: CategoryInfoSchema },
        'text/json': { schema: CategoryInfoSchema },
        'text/plain': { schema: CategoryInfoSchema },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putCategoriesTeamIdCategoryIdRoute = createRoute({
  method: 'put',
  path: '/categories/{teamId}/{categoryId}',
  tags: ['Categories'],
  summary: 'Update an existing category',
  description:
    'Sample Request:\r\n            \r\n    PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e\r\n    {\r\n        "name": "Water-Updated",\r\n        "imageName": "water.svg",\r\n        "color": "#0000cc",\r\n        "keywordMatching": "All",\r\n        "keywords": [\r\n            {\r\n                "value": "H2O"\r\n            },\r\n            {\r\n                "value": "Water"\r\n            },\r\n            {\r\n                "value": "Wet"\r\n            }\r\n        ]\r\n    }',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'categoryId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description: 'Category to be updated',
      content: {
        'application/*+json': { schema: CategoryInfoSchema },
        'application/json': { schema: CategoryInfoSchema },
        'application/json-patch+json': { schema: CategoryInfoSchema },
        'text/json': { schema: CategoryInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns the updated category',
      content: {
        'application/json': { schema: CategoryInfoSchema },
        'text/json': { schema: CategoryInfoSchema },
        'text/plain': { schema: CategoryInfoSchema },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const deleteCategoriesTeamIdCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/categories/{teamId}/{categoryId}',
  tags: ['Categories'],
  summary: 'Delete an existing category',
  description:
    'Sample Request:\r\n            \r\n    DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the category to delete',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'If the delete operation was successful' },
    204: { description: 'Success' },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesTeamIdCategoryIdMetricsRoute = createRoute({
  method: 'get',
  path: '/categories/{teamId}/{categoryId}/metrics',
  tags: ['Categories'],
  summary: 'Get metrics for a specific category',
  description:
    'Sample Request:\r\n            \r\n    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the category to get',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the category metrics',
      content: {
        'application/json': { schema: CategoryMetricsSchema },
        'text/json': { schema: CategoryMetricsSchema },
        'text/plain': { schema: CategoryMetricsSchema },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'If the resource was not found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getCategoriesTeamIdCategoryIdSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/categories/{teamId}/{categoryId}/subscriptions',
  tags: ['Categories'],
  summary: 'Get category subscriptions',
  description:
    'Sample Request:\r\n            \r\n    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions\r\n    {\r\n    }',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'Category to get subscriptions for',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the category subscriptions',
      content: {
        'application/json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'text/json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'text/plain': { schema: z.array(CategorySubscriptionInfoSchema) },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: { description: 'If the resource was not found' },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postCategoriesTeamIdCategoryIdSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/categories/{teamId}/{categoryId}/subscriptions',
  tags: ['Categories'],
  summary: 'Set category subscriptions',
  description:
    'Sample Request:\r\n            \r\n    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions\r\n    {\r\n    }',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the category belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'Category to be updated',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'application/json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'application/json-patch+json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'text/json': { schema: z.array(CategorySubscriptionInfoSchema) },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns the updated category subscriptions',
      content: {
        'application/json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'text/json': { schema: z.array(CategorySubscriptionInfoSchema) },
        'text/plain': { schema: z.array(CategorySubscriptionInfoSchema) },
      },
    },
    400: {
      description: 'If the input is not valid',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'If you have no permission to access this resource',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: { description: 'If the resource was not found' },
    500: {
      description: 'If any server side errors occur',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postEventsPagedRoute = createRoute({
  method: 'post',
  path: '/events/paged',
  tags: ['Events'],
  summary: 'Get overview event paged.',
  description:
    'Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.',
  request: {
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the limit of retrieved alert details per request. 1 to 100 are allowed per request.\r\n                 Number of alerts could be less if filtered but at least 1.',
            in: 'query',
            name: 'maxResults',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The filter defines which alerts are supposed to be retrieved.',
      content: {
        'application/*+json': { schema: EventFilterSchema },
        'application/json': { schema: EventFilterSchema },
        'application/json-patch+json': { schema: EventFilterSchema },
        'text/json': { schema: EventFilterSchema },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns paged result with found events and continuation token, if database holds more events.',
      content: {
        'application/json': { schema: OverviewEventPagedResultsPublicSchema },
        'text/json': { schema: OverviewEventPagedResultsPublicSchema },
        'text/plain': { schema: OverviewEventPagedResultsPublicSchema },
      },
    },
    204: { description: 'No event could be found (with passed filter)' },
    400: {
      description: 'Required parameters could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getEventsEventIdOverviewRoute = createRoute({
  method: 'get',
  path: '/events/{eventId}/overview',
  tags: ['Events'],
  summary: 'Get overview event',
  description: 'Get overview event by id.',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'Id of event to get.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns overview event with specific id.',
      content: {
        'application/json': { schema: OverviewEventSchema },
        'text/json': { schema: OverviewEventSchema },
        'text/plain': { schema: OverviewEventSchema },
      },
    },
    400: {
      description: 'Required parameters could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Event with specified id could not be found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getEventsEventIdParametersRoute = createRoute({
  method: 'get',
  path: '/events/{eventId}/parameters',
  tags: ['Events'],
  summary: 'Get event parameters',
  description: 'Get parameters of an event by id.',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'Event Id of the requested Alert.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(EventParameterInfoSchema) },
        'text/json': { schema: z.array(EventParameterInfoSchema) },
        'text/plain': { schema: z.array(EventParameterInfoSchema) },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getPrepaidBalanceRoute = createRoute({
  method: 'get',
  path: '/prepaid/balance',
  tags: ['Prepaid'],
  summary: "Get your subscription's current prepaid balance.",
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidBalanceInfoSchema },
        'text/json': { schema: PrepaidBalanceInfoSchema },
        'text/plain': { schema: PrepaidBalanceInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getPrepaidSettingsRoute = createRoute({
  method: 'get',
  path: '/prepaid/settings',
  tags: ['Prepaid'],
  summary: "Get your subscription's current prepaid settings.",
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
        'text/plain': { schema: PrepaidSettingsInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putPrepaidSettingsRoute = createRoute({
  method: 'put',
  path: '/prepaid/settings',
  tags: ['Prepaid'],
  summary: "Update your subscription's current prepaid settings.",
  request: {
    body: {
      description: 'Settings object containing the new values.',
      content: {
        'application/*+json': { schema: PrepaidSettingsInfoSchema },
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'application/json-patch+json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
        'text/plain': { schema: PrepaidSettingsInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getPrepaidTransactionsRoute = createRoute({
  method: 'get',
  path: '/prepaid/transactions',
  tags: ['Prepaid'],
  summary: "Get your subscription's prepaid transactions.",
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PrepaidTransactionInfoSchema) },
        'text/json': { schema: z.array(PrepaidTransactionInfoSchema) },
        'text/plain': { schema: z.array(PrepaidTransactionInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getScriptsInstancesRoute = createRoute({
  method: 'get',
  path: '/scripts/instances',
  tags: ['Scripts'],
  summary: 'Returns all script instances of the SIGNL4 team',
  description: 'Returns all script instances in the subscription.',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'teamId', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScriptInstanceDetailsSchema) },
        'text/json': { schema: z.array(ScriptInstanceDetailsSchema) },
        'text/plain': { schema: z.array(ScriptInstanceDetailsSchema) },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postScriptsInstancesRoute = createRoute({
  method: 'post',
  path: '/scripts/instances',
  tags: ['Scripts'],
  summary: 'Creates a new script instance in the in the SIGNL4 team.',
  description: 'Creates a new script instance of the script specified in the request body.',
  request: {
    body: {
      description: 'Script instance to be created.',
      content: {
        'application/*+json': { schema: ScriptInstanceDetailsSchema },
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'application/json-patch+json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Existing script instance was updated as specified in body.',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    201: {
      description: 'New script instance was updated as specified in body.',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'An internal error has occurred during instance creation.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getScriptsInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/scripts/instances/{instanceId}',
  tags: ['Scripts'],
  summary:
    'Returns all information about a given script instance which includes its runtime status.',
  description: 'Gets the script instance specified by the passed instance id.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'Instance Id of script instance to be returned.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database or in memory.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putScriptsInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/scripts/instances/{instanceId}',
  tags: ['Scripts'],
  summary:
    'Updates a given script instance, typically used for updating the configuration of a script.',
  description: 'Updates the specified script instance.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'InstanceId of the script to be updated.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Script instance to be updated.',
      content: {
        'application/*+json': { schema: ScriptInstanceDetailsSchema },
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'application/json-patch+json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'An internal error has occurred during instance creation.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const deleteScriptsInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/scripts/instances/{instanceId}',
  tags: ['Scripts'],
  summary: 'Deletes a script instance.',
  description: 'Gets the script instance specified by the passed instance id.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'Instance Id of script instance to be returned.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database or in memory.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putScriptsInstancesInstanceIdDataRoute = createRoute({
  method: 'put',
  path: '/scripts/instances/{instanceId}/data',
  tags: ['Scripts'],
  summary: 'Updates custom data of a given script instance which includes its display name.',
  description: 'Updates the specified script instance.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'InstanceId of the script to be updated.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Script instance to be updated.',
      content: {
        'application/*+json': { schema: ScriptInstanceCustomUserDataSchema },
        'application/json': { schema: ScriptInstanceCustomUserDataSchema },
        'application/json-patch+json': { schema: ScriptInstanceCustomUserDataSchema },
        'text/json': { schema: ScriptInstanceCustomUserDataSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'An internal error has occurred during instance creation.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postScriptsInstancesInstanceIdDisableRoute = createRoute({
  method: 'post',
  path: '/scripts/instances/{instanceId}/disable',
  tags: ['Scripts'],
  summary: 'Disables a given script instance.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the instance to be disabled.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postScriptsInstancesInstanceIdEnableRoute = createRoute({
  method: 'post',
  path: '/scripts/instances/{instanceId}/enable',
  tags: ['Scripts'],
  summary: 'Enables a script instance.',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the instance to be enabled.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getScriptsInventoryRoute = createRoute({
  method: 'get',
  path: '/scripts/inventory',
  tags: ['Scripts'],
  summary: 'Returns all available inventory scripts which can be added to a SIGNL4 subscription.',
  description:
    'Returns all available inventory scripts which can be added to a SIGNL4 subscription.',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(InventoryScriptInfoSchema) },
        'text/json': { schema: z.array(InventoryScriptInfoSchema) },
        'text/plain': { schema: z.array(InventoryScriptInfoSchema) },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'An internal error orccurred while loading all inventory scripts.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getScriptsInventoryParsedRoute = createRoute({
  method: 'get',
  path: '/scripts/inventory/parsed',
  tags: ['Scripts'],
  summary: 'Returns all inventory scripts.',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(InventoryScriptInfoSchema) },
        'text/json': { schema: z.array(InventoryScriptInfoSchema) },
        'text/plain': { schema: z.array(InventoryScriptInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getScriptsInventoryParsedScriptIdRoute = createRoute({
  method: 'get',
  path: '/scripts/inventory/parsed/{scriptId}',
  tags: ['Scripts'],
  summary: 'Returns an inventory script by its id.',
  description: 'Gets the script specified by the passed script id.',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'The Id of the script to be returned.',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'language', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScriptInstanceDetailsSchema },
        'text/json': { schema: ScriptInstanceDetailsSchema },
        'text/plain': { schema: ScriptInstanceDetailsSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database or in memory.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['Subscriptions'],
  summary: 'Get infos of all available/managed subscriptions.',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SubscriptionInfoSchema) },
        'text/json': { schema: z.array(SubscriptionInfoSchema) },
        'text/plain': { schema: z.array(SubscriptionInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Get infos of a specific subscription.',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: "Id of the subscription that's to be retrieved.",
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SubscriptionInfoSchema },
        'text/json': { schema: SubscriptionInfoSchema },
        'text/plain': { schema: SubscriptionInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdChannelPricesRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/channelPrices',
  tags: ['Subscriptions'],
  summary: "Returns the subscription's channel price information.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the subscription that needs to be retrieved.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ChannelPriceInfoSchema },
        'text/json': { schema: ChannelPriceInfoSchema },
        'text/plain': { schema: ChannelPriceInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdFeaturesRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/features',
  tags: ['Subscriptions'],
  summary: 'Returns the features of a specified subscription.',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the subscription from which the features need to be retrieved.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SubscriptionFeatureSchema) },
        'text/json': { schema: z.array(SubscriptionFeatureSchema) },
        'text/plain': { schema: z.array(SubscriptionFeatureSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdPrepaidBalanceRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/prepaidBalance',
  tags: ['Prepaid'],
  summary: "Get a subscription's current prepaid balance.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidBalanceInfoSchema },
        'text/json': { schema: PrepaidBalanceInfoSchema },
        'text/plain': { schema: PrepaidBalanceInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdPrepaidSettingsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/prepaidSettings',
  tags: ['Prepaid'],
  summary: "Get a subscription's current prepaid settings.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
        'text/plain': { schema: PrepaidSettingsInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putSubscriptionsSubscriptionIdPrepaidSettingsRoute = createRoute({
  method: 'put',
  path: '/subscriptions/{subscriptionId}/prepaidSettings',
  tags: ['Prepaid'],
  summary: "Update a subscription's current prepaid settings.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subscription',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Settings object containing the new values.',
      content: {
        'application/*+json': { schema: PrepaidSettingsInfoSchema },
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'application/json-patch+json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrepaidSettingsInfoSchema },
        'text/json': { schema: PrepaidSettingsInfoSchema },
        'text/plain': { schema: PrepaidSettingsInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdPrepaidTransactionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/prepaidTransactions',
  tags: ['Prepaid'],
  summary: "Get a subscription's prepaid transactions.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subscription to get transactions for',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PrepaidTransactionInfoSchema) },
        'text/json': { schema: z.array(PrepaidTransactionInfoSchema) },
        'text/plain': { schema: z.array(PrepaidTransactionInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putSubscriptionsSubscriptionIdProfileRoute = createRoute({
  method: 'put',
  path: '/subscriptions/{subscriptionId}/profile',
  tags: ['Subscriptions'],
  summary: 'Updates a subscriptions profile.',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subscription to be updated',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Profile data to update subscription with',
      content: {
        'application/*+json': { schema: SubscriptionProfileSchema },
        'application/json': { schema: SubscriptionProfileSchema },
        'application/json-patch+json': { schema: SubscriptionProfileSchema },
        'text/json': { schema: SubscriptionProfileSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SubscriptionInfoSchema },
        'text/json': { schema: SubscriptionInfoSchema },
        'text/plain': { schema: SubscriptionInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdTeamsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/teams',
  tags: ['Teams'],
  summary: 'Get infos for all teams of the subscription.',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TeamInfoSchema) },
        'text/json': { schema: z.array(TeamInfoSchema) },
        'text/plain': { schema: z.array(TeamInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdUserLicensesRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/userLicenses',
  tags: ['Subscriptions'],
  summary: "Gets a subscription's user licenses.",
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subscription',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserLicenseInfoSchema },
        'text/json': { schema: UserLicenseInfoSchema },
        'text/plain': { schema: UserLicenseInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsRoute = createRoute({
  method: 'get',
  path: '/teams',
  tags: ['Teams'],
  summary: 'Get infos of all teams.',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TeamInfoSchema) },
        'text/json': { schema: z.array(TeamInfoSchema) },
        'text/plain': { schema: z.array(TeamInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}',
  tags: ['Teams'],
  summary: 'Gets infos of a specific team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team that should be retrieved.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TeamInfoSchema },
        'text/json': { schema: TeamInfoSchema },
        'text/plain': { schema: TeamInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdAlertReportsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/alertReports',
  tags: ['Teams'],
  summary: 'Get information about downloadable alert reports',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of team you want to download reports from.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlertAuditReportFileInfoSchema) },
        'text/json': { schema: z.array(AlertAuditReportFileInfoSchema) },
        'text/plain': { schema: z.array(AlertAuditReportFileInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdAlertReportsFileNameRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/alertReports/{fileName}',
  tags: ['Teams'],
  summary: 'Returns Alert Report',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of team you want to get the duty report file infos for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'File name of file you want to download.',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdAlertSettingsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/alertSettings',
  tags: ['Teams'],
  summary: 'Gets alert settings of a specific team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the settings should be retrieved for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertSettingsSchema },
        'text/json': { schema: AlertSettingsSchema },
        'text/plain': { schema: AlertSettingsSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdAlertSettingsRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/alertSettings',
  tags: ['Teams'],
  summary: 'Sets alert settings of a specific team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the settings should be set for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Alert settings to be set',
      content: {
        'application/*+json': { schema: AlertSettingsSchema },
        'application/json': { schema: AlertSettingsSchema },
        'application/json-patch+json': { schema: AlertSettingsSchema },
        'text/json': { schema: AlertSettingsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlertSettingsSchema },
        'text/json': { schema: AlertSettingsSchema },
        'text/plain': { schema: AlertSettingsSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdDutyReportsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/dutyReports',
  tags: ['Duties'],
  summary: 'Get Information about downloadable reports',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of team you want to get the duty report file infos for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(DutyAuditReportFileInfoSchema) },
        'text/json': { schema: z.array(DutyAuditReportFileInfoSchema) },
        'text/plain': { schema: z.array(DutyAuditReportFileInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdDutyReportsFileNameRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/dutyReports/{fileName}',
  tags: ['Duties'],
  summary: 'Download duty report with a specific fileName',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of team you want to download the duty report for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'Filename of the csv to download.',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdDutysummaryRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/dutysummary',
  tags: ['Duties'],
  summary: 'Get duty assistant info for a team',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the duty belongs to.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lastTwoDuties: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastTwoDuties',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TeamDutySummaryInfoSchema },
        'text/json': { schema: TeamDutySummaryInfoSchema },
        'text/plain': { schema: TeamDutySummaryInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdEventSourcesRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/eventSources',
  tags: ['Teams'],
  summary: 'Gets event sources of a specific team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the sources should be retrieved for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(EventSourceEndpointInfoSchema) },
        'text/json': { schema: z.array(EventSourceEndpointInfoSchema) },
        'text/plain': { schema: z.array(EventSourceEndpointInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/memberships',
  tags: ['TeamsMemberships'],
  summary: 'Get all invites of a team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team ID of team you want to request.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User invitations are returned.',
      content: {
        'application/json': { schema: z.array(InvitedUserInfoSchema) },
        'text/json': { schema: z.array(InvitedUserInfoSchema) },
        'text/plain': { schema: z.array(InvitedUserInfoSchema) },
      },
    },
    204: { description: 'Request was canceled.' },
    400: {
      description:
        'Required parameters or authentifaction info could not be found in the request/claims.',
    },
    403: {
      description: "You're not allowed to request the access all required entities.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdMembershipsRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/memberships',
  tags: ['TeamsMemberships'],
  summary: 'Invite users to a team',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Id of team the user should be invited to.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information about user to invite and inviter id.',
      content: {
        'application/*+json': { schema: UsersInvitationSchema },
        'application/json': { schema: UsersInvitationSchema },
        'application/json-patch+json': { schema: UsersInvitationSchema },
        'text/json': { schema: UsersInvitationSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'User invitation results are returned.',
      content: {
        'application/json': { schema: z.array(UserInvitationResultSchema) },
        'text/json': { schema: z.array(UserInvitationResultSchema) },
        'text/plain': { schema: z.array(UserInvitationResultSchema) },
      },
    },
    204: { description: 'Request was canceled.' },
    400: {
      description:
        'Required parameters or authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: "You're not allowed to request the access all required entities.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: { description: 'Required entities could not be found in the database.' },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdMembershipsResendInviteMailRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/memberships/resendInviteMail',
  tags: ['TeamsMemberships'],
  summary: 'Sends invite email again if an invite exists',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team ID of team with invited user.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information which user should be invited again.',
      content: {
        'application/*+json': { schema: UserInvitationInfoSchema },
        'application/json': { schema: UserInvitationInfoSchema },
        'application/json-patch+json': { schema: UserInvitationInfoSchema },
        'text/json': { schema: UserInvitationInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putTeamsTeamIdMembershipsUserIdRoute = createRoute({
  method: 'put',
  path: '/teams/{teamId}/memberships/{userId}',
  tags: ['TeamsMemberships'],
  summary: "Update user's team membership.",
  description:
    "Updates the user's team membership. You can move the user to another team within the subscription\r\nand/or change the user's role.",
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team the user you want to update belongs to at the moment.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'User ID of user you want to update.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      requesterUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'User ID of user which you want to change role with. This must be provided when using an api key. This user must have role administrator (for setting administrator role) or team administrator (for setting  rights.',
            in: 'query',
            name: 'requesterUserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Information about role id and target team id.',
      content: {
        'application/*+json': { schema: UserMembershipSchema },
        'application/json': { schema: UserMembershipSchema },
        'application/json-patch+json': { schema: UserMembershipSchema },
        'text/json': { schema: UserMembershipSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'User was successfully updated.',
      content: {
        'application/json': { schema: UserInfoSchema },
        'text/json': { schema: UserInfoSchema },
        'text/plain': { schema: UserInfoSchema },
      },
    },
    204: {
      description: 'Request was canceled.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    400: {
      description:
        'Required parameters or authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: "You're not allowed to request the access all required entities.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const deleteTeamsTeamIdMembershipsUserIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{teamId}/memberships/{userId}',
  tags: ['TeamsMemberships'],
  summary:
    'Removes a user or invitation from a team, and may delete the user if he is not in any team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the user should be deleted from',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the user that should be deleted',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      requesterUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User ID of user which will remove the other user.',
            in: 'query',
            name: 'requesterUserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success message',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    204: { description: 'Request was canceled.' },
    400: {
      description:
        'Required parameters or authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: "You're not allowed to request the access all required entities.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putTeamsTeamIdProfileRoute = createRoute({
  method: 'put',
  path: '/teams/{teamId}/profile',
  tags: ['Teams'],
  summary: 'Updates team profile of a team',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team ID of team which should be updated.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: TeamProfileSchema },
        'application/json': { schema: TeamProfileSchema },
        'application/json-patch+json': { schema: TeamProfileSchema },
        'text/json': { schema: TeamProfileSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TeamInfoSchema },
        'text/json': { schema: TeamInfoSchema },
        'text/plain': { schema: TeamInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdSchedulesRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/schedules',
  tags: ['Duties'],
  summary: 'Returns information about all duties that belong to the team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the team the schedules user belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      UserId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'UserId', schema: { type: 'string' }, required: false },
        }),
      MinDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'MinDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      Limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScheduleInfoSchema) },
        'text/json': { schema: z.array(ScheduleInfoSchema) },
        'text/plain': { schema: z.array(ScheduleInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdSchedulesRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/schedules',
  tags: ['Duties'],
  summary: 'Create/Update given duty schedule.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the team the duty is to be assigned to.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'information about the duty schedule to be created',
      content: {
        'application/*+json': { schema: ScheduleInfoSchema },
        'application/json': { schema: ScheduleInfoSchema },
        'application/json-patch+json': { schema: ScheduleInfoSchema },
        'text/json': { schema: ScheduleInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScheduleInfoSchema },
        'text/json': { schema: ScheduleInfoSchema },
        'text/plain': { schema: ScheduleInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdSchedulesDeleteRangeRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/schedules/deleteRange',
  tags: ['Duties'],
  summary: 'Delete duty schedules in range',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team ID you want to delete',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information with date range to delete from to',
      content: {
        'application/*+json': { schema: DeleteRangeInfoSchema },
        'application/json': { schema: DeleteRangeInfoSchema },
        'application/json-patch+json': { schema: DeleteRangeInfoSchema },
        'text/json': { schema: DeleteRangeInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScheduleInfoSchema) },
        'text/json': { schema: z.array(ScheduleInfoSchema) },
        'text/plain': { schema: z.array(ScheduleInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postTeamsTeamIdSchedulesMultipleRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/schedules/multiple',
  tags: ['Duties'],
  summary: 'Save multiple schedules. It is possible to override existing schedules if you wish',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Team ID to set',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      overrideExisting: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Override or cut existing schedules if set to true.',
            in: 'query',
            name: 'overrideExisting',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'List of schedules to save',
      content: {
        'application/*+json': { schema: z.array(ScheduleInfoSchema) },
        'application/json': { schema: z.array(ScheduleInfoSchema) },
        'application/json-patch+json': { schema: z.array(ScheduleInfoSchema) },
        'text/json': { schema: z.array(ScheduleInfoSchema) },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScheduleInfoSchema) },
        'text/json': { schema: z.array(ScheduleInfoSchema) },
        'text/plain': { schema: z.array(ScheduleInfoSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const deleteTeamsTeamIdSchedulesDutyIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{teamId}/schedules/{dutyId}',
  tags: ['Duties'],
  summary: 'Delete a specific duty.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the duty belongs to.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dutyId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the duty to be deleted.',
            in: 'path',
            name: 'dutyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdSchedulesScheduleIdRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/schedules/{scheduleId}',
  tags: ['Duties'],
  summary: 'Returns information of the duty schedule with the specified Id.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the team the duty belongs to',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the requested duty schedule.',
            in: 'path',
            name: 'scheduleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScheduleInfoSchema },
        'text/json': { schema: ScheduleInfoSchema },
        'text/plain': { schema: ScheduleInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getTeamsTeamIdSetupProgressRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/setupProgress',
  tags: ['Teams'],
  summary: 'Gets setup progress of a specific team.',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the team the progress should be retrieved for.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TeamSetupProgressSchema },
        'text/json': { schema: TeamSetupProgressSchema },
        'text/plain': { schema: TeamSetupProgressSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Get all Users',
  description:
    'Returns a list of user objects with details such as their email address and duty information. Only users who\r\nare part of your team will be returned.',
  responses: {
    200: {
      description: 'User could be successfully identified.',
      content: {
        'application/json': { schema: z.array(UserInfoSchema) },
        'text/json': { schema: z.array(UserInfoSchema) },
        'text/plain': { schema: z.array(UserInfoSchema) },
      },
    },
    400: {
      description: 'Required authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: { description: "You're not allowed to request the users with their information." },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Get User by Id',
  description: 'Returns a user object with details such as his email address and duty information.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.\r\nCan also be an email address of a user in the team or the unique id of an according user object.”",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User could be successfully identified.',
      content: {
        'application/json': { schema: UserInfoSchema },
        'text/json': { schema: UserInfoSchema },
        'text/plain': { schema: UserInfoSchema },
      },
    },
    400: {
      description: 'Required authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: { description: "You're not allowed to request that user's information." },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putUsersUserIdChangePasswordRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/changePassword',
  tags: ['Users'],
  summary: 'Updates the password of a user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'User ID of user whose password should be changed.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdatePasswordInfoSchema },
        'application/json': { schema: UpdatePasswordInfoSchema },
        'application/json-patch+json': { schema: UpdatePasswordInfoSchema },
        'text/json': { schema: UpdatePasswordInfoSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postUsersUserIdCheckPermissionsRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/checkPermissions',
  tags: ['Users'],
  summary: 'Checks if a user has the provided permission.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the user to check permissions for.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'teamId', schema: { type: 'string' }, required: false },
        }),
    }),
    body: {
      description: 'List of permissions to check',
      content: {
        'application/*+json': { schema: StringItemsWrapperSchema },
        'application/json': { schema: StringItemsWrapperSchema },
        'application/json-patch+json': { schema: StringItemsWrapperSchema },
        'text/json': { schema: StringItemsWrapperSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserImageSchema },
        'text/json': { schema: UserImageSchema },
        'text/plain': { schema: UserImageSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getUsersUserIdDutyStatusRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/dutyStatus',
  tags: ['Users'],
  summary: 'Get duty status by user Id',
  description: 'Returns a object with duty information.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "Identifier of the user to get. Use 'Me' to get information about the currently logged in user. This is not possible with an api key.\r\nCan also be an email address of a user in the team or the unique id of an according user object.”",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Duty successfully loaded.',
      content: {
        'application/json': { schema: UserDutyInfoSchema },
        'text/json': { schema: UserDutyInfoSchema },
        'text/plain': { schema: UserDutyInfoSchema },
      },
    },
    400: {
      description: 'Required authentifaction info could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: { description: "You're not allowed to request that duty information." },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getUsersUserIdImageRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/image',
  tags: ['Users'],
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'height',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'width',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserImageSchema },
        'text/json': { schema: UserImageSchema },
        'text/plain': { schema: UserImageSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postUsersUserIdImageRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/image',
  tags: ['Users'],
  summary: 'Uploaded a profile image for a specified user.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    204: { description: 'The image was successfully uploaded.' },
    400: {
      description:
        "Either a passed parameter was either empty/null or the request's multipart does not contain a\r\nfile.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'User is not allowed to upoload an image for the specified user.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: "Either the user was not found or they aren't activated yet.",
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal general error occured.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putUsersUserIdProfileRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/profile',
  tags: ['Users'],
  summary: 'Updates user profile of an user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of user to update.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UserProfileSchema },
        'application/json': { schema: UserProfileSchema },
        'application/json-patch+json': { schema: UserProfileSchema },
        'text/json': { schema: UserProfileSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserInfoSchema },
        'text/json': { schema: UserInfoSchema },
        'text/plain': { schema: UserInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postUsersUserIdPunchInRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/punchIn',
  tags: ['Users'],
  summary: 'Punch User in',
  description: 'The specified user will be punched in to duty.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "Identifier of the user to punch in. Use 'Me' to get information about the currently logged in\r\nuser. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserDutyInfoSchema },
        'text/json': { schema: UserDutyInfoSchema },
        'text/plain': { schema: UserDutyInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'The user tried to change the punch in a different user.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postUsersUserIdPunchInAsManagerRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/punchInAsManager',
  tags: ['Users'],
  summary: 'Punch User in as Manager',
  description: 'The specified user will be punched in to duty as a manager.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "Identifier of the user to punch in. Use 'Me' to get information about the currently logged in\r\nuser. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserDutyInfoSchema },
        'text/json': { schema: UserDutyInfoSchema },
        'text/plain': { schema: UserDutyInfoSchema },
      },
    },
    400: {
      description: 'Required information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'The user tried to change the punch in a different user.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Required entities could not be found in the database.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postUsersUserIdPunchOutRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/punchOut',
  tags: ['Users'],
  summary: 'Punch User out',
  description: 'The specified user will be punched out from duty.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "Identifier of the user to punch out. Use 'Me' to get information about the currently logged in\r\nuser. This is not possible with an api key. Can also be an email address of a user in the team or the unique id of an according user object.”",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The user was punched out successfully.',
      content: {
        'application/json': { schema: UserDutyInfoSchema },
        'text/json': { schema: UserDutyInfoSchema },
        'text/plain': { schema: UserDutyInfoSchema },
      },
    },
    400: {
      description: 'Required authentifaction information could not be found in the request/claims.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'The requesting user tried to punch out someone else, which is not allowed.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'The desired user was not found by passed id.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    409: {
      description:
        'The desired user was not punched out because it would violate  the minumum on-duty members setting\r\nfrom the team.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getUsersUserIdSetupProgressRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/setupProgress',
  tags: ['Users'],
  summary: 'Gets setup progress of a specific user.',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the user the progress should be retrieved for.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserSetupProgressSchema },
        'text/json': { schema: UserSetupProgressSchema },
        'text/plain': { schema: UserSetupProgressSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Get Webhooks',
  description: 'Returns a collection of defined outbound webhooks in the system.',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'teamId', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Request was successful and response body contains information about all outbound webhooks in the subscription.',
      content: {
        'application/json': { schema: z.array(WebhookInfoSchema) },
        'text/json': { schema: z.array(WebhookInfoSchema) },
        'text/plain': { schema: z.array(WebhookInfoSchema) },
      },
    },
    404: {
      description: 'The subscription does not have any outbound webhooks.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Create Webhook',
  description: 'Creates a new outbound webhook that will be notified when certain events occur.',
  request: {
    body: {
      description: 'Json object that contains the external URL of the webhook.',
      content: {
        'application/*+json': { schema: WebhookBaseInfoSchema },
        'application/json': { schema: WebhookBaseInfoSchema },
        'application/json-patch+json': { schema: WebhookBaseInfoSchema },
        'text/json': { schema: WebhookBaseInfoSchema },
      },
    },
  },
  responses: {
    201: {
      description:
        'Action was successful and response contains the id of the newly created webhook.',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    400: {
      description: 'Either the webhook object or a necessary property was invalid or empty.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Get Webhook by Id',
  description: 'Returns information of the webhook specified by the passed id.',
  operationId: 'GetWebhookById',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the outbound webhook to be retrieved.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Request was successful and response body contains information about the requested webhook.',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    400: {
      description: 'The passed webhook id was either empty or null.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'The webhook was not found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const putWebhooksWebhookIdRoute = createRoute({
  method: 'put',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Update Webhook by Id',
  description: 'Updates the specified webhook.',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the outbound webhook to be updated.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Json object containing the updated URL of the webhook.',
      content: {
        'application/*+json': { schema: WebhookBaseInfoSchema },
        'application/json': { schema: WebhookBaseInfoSchema },
        'application/json-patch+json': { schema: WebhookBaseInfoSchema },
        'text/json': { schema: WebhookBaseInfoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Update was successful and response body contains the updated webhook details.',
      content: {
        'application/json': { schema: WebhookInfoSchema },
        'text/json': { schema: WebhookInfoSchema },
        'text/plain': { schema: WebhookInfoSchema },
      },
    },
    400: {
      description: 'A passed parameter was either empty or null.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Webhook with specified id was not found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Delete Webhook by Id',
  description: 'Deletes the specified webhook so that it will no longer be notified.',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the outbound webhook that will be deleted.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Webhook was successfully deleted.' },
    400: {
      description: 'The passed webhook id was invalid or empty.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Webhook with specified id was not found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postWebhooksWebhookIdDisableRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhookId}/disable',
  tags: ['Webhooks'],
  summary: 'Ability to enable a webHook.',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Webhook ID for webhook which should be disabled.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Disable was successful and response body contains the webhook details.',
      content: {
        'application/json': { schema: WebhookInfoSchema },
        'text/json': { schema: WebhookInfoSchema },
        'text/plain': { schema: WebhookInfoSchema },
      },
    },
    400: {
      description: 'A passed parameter was either empty or null.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Webhook with specified id was not found.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Internal has occured. The response body may contain more information.',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

export const postWebhooksWebhookIdEnableRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhookId}/enable',
  tags: ['Webhooks'],
  summary: 'Ability to disable a webHook.',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Webhook ID for webhook which should be enabled.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: WebhookInfoSchema },
        'text/json': { schema: WebhookInfoSchema },
        'text/plain': { schema: WebhookInfoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': { schema: ErrorResponseContentSchema },
        'text/json': { schema: ErrorResponseContentSchema },
        'text/plain': { schema: ErrorResponseContentSchema },
      },
    },
  },
})

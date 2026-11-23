import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AudiencesKeyMembersRoute,
  deleteV1MessagesMessageIdArchivedRoute,
  deleteV1MessagesMessageIdReadRoute,
  deleteV1MessagesMessageIdSeenRoute,
  deleteV1MessagesMessageIdUnarchivedRoute,
  deleteV1MessagesMessageIdUnreadRoute,
  deleteV1MessagesMessageIdUnseenRoute,
  deleteV1ObjectsCollectionIdRoute,
  deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  deleteV1ObjectsCollectionObjectIdPreferencesIdRoute,
  deleteV1ObjectsCollectionObjectIdSubscriptionsRoute,
  deleteV1SchedulesRoute,
  deleteV1TenantsIdRoute,
  deleteV1UsersUserIdChannelDataChannelIdRoute,
  deleteV1UsersUserIdGuidesMessagesArchivedRoute,
  deleteV1UsersUserIdPreferencesIdRoute,
  deleteV1UsersUserIdRoute,
  getV1AudiencesKeyMembersRoute,
  getV1BulkOperationsIdRoute,
  getV1MessagesBatchContentRoute,
  getV1MessagesMessageIdActivitiesRoute,
  getV1MessagesMessageIdContentRoute,
  getV1MessagesMessageIdDeliveryLogsRoute,
  getV1MessagesMessageIdEventsRoute,
  getV1MessagesMessageIdRoute,
  getV1MessagesRoute,
  getV1ObjectsCollectionIdMessagesRoute,
  getV1ObjectsCollectionIdRoute,
  getV1ObjectsCollectionIdSchedulesRoute,
  getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  getV1ObjectsCollectionObjectIdPreferencesIdRoute,
  getV1ObjectsCollectionObjectIdPreferencesRoute,
  getV1ObjectsCollectionObjectIdSubscriptionsRoute,
  getV1ObjectsCollectionRoute,
  getV1ProvidersMsTeamsChannelIdAuthCheckRoute,
  getV1ProvidersMsTeamsChannelIdChannelsRoute,
  getV1ProvidersMsTeamsChannelIdTeamsRoute,
  getV1ProvidersSlackChannelIdAuthCheckRoute,
  getV1ProvidersSlackChannelIdChannelsRoute,
  getV1SchedulesRoute,
  getV1TenantsIdRoute,
  getV1TenantsRoute,
  getV1UsersRoute,
  getV1UsersUserIdChannelDataChannelIdRoute,
  getV1UsersUserIdFeedsIdRoute,
  getV1UsersUserIdFeedsIdSettingsRoute,
  getV1UsersUserIdGuidesChannelIdRoute,
  getV1UsersUserIdMessagesRoute,
  getV1UsersUserIdPreferenceCenterConfigRoute,
  getV1UsersUserIdPreferencesIdRoute,
  getV1UsersUserIdPreferencesRoute,
  getV1UsersUserIdRoute,
  getV1UsersUserIdSchedulesRoute,
  getV1UsersUserIdSubscriptionsRoute,
  getV1WorkflowRecipientRunsIdRoute,
  getV1WorkflowRecipientRunsRoute,
  postV1AudiencesKeyMembersRoute,
  postV1ChannelsChannelIdMessagesBulkActionRoute,
  postV1IntegrationsCensusCustomDestinationRoute,
  postV1IntegrationsHightouchEmbeddedDestinationRoute,
  postV1MessagesBatchArchivedRoute,
  postV1MessagesBatchInteractedRoute,
  postV1MessagesBatchReadRoute,
  postV1MessagesBatchSeenRoute,
  postV1MessagesBatchUnarchivedRoute,
  postV1MessagesBatchUnreadRoute,
  postV1MessagesBatchUnseenRoute,
  postV1NotifyCancelRoute,
  postV1NotifyRoute,
  postV1ObjectsCollectionBulkDeleteRoute,
  postV1ObjectsCollectionBulkSetRoute,
  postV1ObjectsCollectionBulkSubscriptionsAddRoute,
  postV1ObjectsCollectionBulkSubscriptionsDeleteRoute,
  postV1ObjectsCollectionObjectIdSubscriptionsRoute,
  postV1SchedulesBulkCreateRoute,
  postV1SchedulesRoute,
  postV1TenantsBulkDeleteRoute,
  postV1TenantsBulkSetRoute,
  postV1UsersBulkDeleteRoute,
  postV1UsersBulkIdentifyRoute,
  postV1UsersBulkPreferencesRoute,
  postV1UsersUserIdMergeRoute,
  postV1UsersUserIdPreferenceCenterSignedUrlRoute,
  postV1WorkflowsKeyCancelRoute,
  postV1WorkflowsKeyTriggerRoute,
  putV1MessagesMessageIdArchivedRoute,
  putV1MessagesMessageIdInteractedRoute,
  putV1MessagesMessageIdReadRoute,
  putV1MessagesMessageIdSeenRoute,
  putV1ObjectsCollectionIdRoute,
  putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute,
  putV1ProvidersMsTeamsChannelIdRevokeAccessRoute,
  putV1ProvidersSlackChannelIdRevokeAccessRoute,
  putV1SchedulesRoute,
  putV1TenantsIdRoute,
  putV1UsersUserIdChannelDataChannelIdRoute,
  putV1UsersUserIdGuidesEngagementsResetRoute,
  putV1UsersUserIdGuidesMessagesArchivedRoute,
  putV1UsersUserIdGuidesMessagesInteractedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute,
  putV1UsersUserIdGuidesMessagesMessageIdSeenRoute,
  putV1UsersUserIdGuidesMessagesSeenRoute,
  putV1UsersUserIdPreferencesIdCategoriesKeyRoute,
  putV1UsersUserIdPreferencesIdCategoriesRoute,
  putV1UsersUserIdPreferencesIdChannelTypesRoute,
  putV1UsersUserIdPreferencesIdChannelTypesTypeRoute,
  putV1UsersUserIdPreferencesIdRoute,
  putV1UsersUserIdPreferencesIdWorkflowsKeyRoute,
  putV1UsersUserIdPreferencesIdWorkflowsRoute,
  putV1UsersUserIdRoute,
} from '../routes'

export const deleteV1ObjectsCollectionIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionIdRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionIdRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesInteractedRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesInteractedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationsCensusCustomDestinationRouteHandler: RouteHandler<
  typeof postV1IntegrationsCensusCustomDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdSubscriptionsRouteHandler: RouteHandler<
  typeof getV1UsersUserIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsKeyCancelRouteHandler: RouteHandler<
  typeof postV1WorkflowsKeyCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdGuidesMessagesArchivedRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdGuidesMessagesArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesArchivedRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdChannelTypesRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdChannelTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesRouteHandler: RouteHandler<typeof getV1MessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdChannelTypesTypeRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdChannelTypesTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProvidersMsTeamsChannelIdChannelsRouteHandler: RouteHandler<
  typeof getV1ProvidersMsTeamsChannelIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessagesMessageIdInteractedRouteHandler: RouteHandler<
  typeof putV1MessagesMessageIdInteractedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesMessageIdEventsRouteHandler: RouteHandler<
  typeof getV1MessagesMessageIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdMessagesRouteHandler: RouteHandler<
  typeof getV1UsersUserIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProvidersSlackChannelIdRevokeAccessRouteHandler: RouteHandler<
  typeof putV1ProvidersSlackChannelIdRevokeAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectsCollectionBulkDeleteRouteHandler: RouteHandler<
  typeof postV1ObjectsCollectionBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdWorkflowsRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdGuidesChannelIdRouteHandler: RouteHandler<
  typeof getV1UsersUserIdGuidesChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdSchedulesRouteHandler: RouteHandler<
  typeof getV1UsersUserIdSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdCategoriesKeyRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdCategoriesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesMessageIdContentRouteHandler: RouteHandler<
  typeof getV1MessagesMessageIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProvidersMsTeamsChannelIdAuthCheckRouteHandler: RouteHandler<
  typeof getV1ProvidersMsTeamsChannelIdAuthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProvidersMsTeamsChannelIdRevokeAccessRouteHandler: RouteHandler<
  typeof putV1ProvidersMsTeamsChannelIdRevokeAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdFeedsIdSettingsRouteHandler: RouteHandler<
  typeof getV1UsersUserIdFeedsIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesEngagementsResetRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesEngagementsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionObjectIdPreferencesRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionObjectIdPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesMessageIdActivitiesRouteHandler: RouteHandler<
  typeof getV1MessagesMessageIdActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TenantsRouteHandler: RouteHandler<typeof getV1TenantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionIdMessagesRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NotifyRouteHandler: RouteHandler<typeof postV1NotifyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchArchivedRouteHandler: RouteHandler<
  typeof postV1MessagesBatchArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdFeedsIdRouteHandler: RouteHandler<
  typeof getV1UsersUserIdFeedsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchUnarchivedRouteHandler: RouteHandler<
  typeof postV1MessagesBatchUnarchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProvidersMsTeamsChannelIdTeamsRouteHandler: RouteHandler<
  typeof getV1ProvidersMsTeamsChannelIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersUserIdMergeRouteHandler: RouteHandler<
  typeof postV1UsersUserIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectsCollectionBulkSubscriptionsDeleteRouteHandler: RouteHandler<
  typeof postV1ObjectsCollectionBulkSubscriptionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdCategoriesRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersRouteHandler: RouteHandler<typeof getV1UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowRecipientRunsIdRouteHandler: RouteHandler<
  typeof getV1WorkflowRecipientRunsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdSeenRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessagesMessageIdSeenRouteHandler: RouteHandler<
  typeof putV1MessagesMessageIdSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProvidersSlackChannelIdAuthCheckRouteHandler: RouteHandler<
  typeof getV1ProvidersSlackChannelIdAuthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersBulkDeleteRouteHandler: RouteHandler<
  typeof postV1UsersBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NotifyCancelRouteHandler: RouteHandler<typeof postV1NotifyCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersBulkIdentifyRouteHandler: RouteHandler<
  typeof postV1UsersBulkIdentifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TenantsBulkSetRouteHandler: RouteHandler<
  typeof postV1TenantsBulkSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AudiencesKeyMembersRouteHandler: RouteHandler<
  typeof deleteV1AudiencesKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudiencesKeyMembersRouteHandler: RouteHandler<
  typeof getV1AudiencesKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AudiencesKeyMembersRouteHandler: RouteHandler<
  typeof postV1AudiencesKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdArchivedRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessagesMessageIdArchivedRouteHandler: RouteHandler<
  typeof putV1MessagesMessageIdArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsKeyTriggerRouteHandler: RouteHandler<
  typeof postV1WorkflowsKeyTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesMessageIdArchivedRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TenantsBulkDeleteRouteHandler: RouteHandler<
  typeof postV1TenantsBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdUnreadRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdRouteHandler: RouteHandler<typeof getV1UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdRouteHandler: RouteHandler<typeof putV1UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchInteractedRouteHandler: RouteHandler<
  typeof postV1MessagesBatchInteractedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TenantsIdRouteHandler: RouteHandler<typeof deleteV1TenantsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TenantsIdRouteHandler: RouteHandler<typeof getV1TenantsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TenantsIdRouteHandler: RouteHandler<typeof putV1TenantsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesSeenRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdUnseenRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdUnseenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectsCollectionObjectIdSubscriptionsRouteHandler: RouteHandler<
  typeof deleteV1ObjectsCollectionObjectIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionObjectIdSubscriptionsRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionObjectIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectsCollectionObjectIdSubscriptionsRouteHandler: RouteHandler<
  typeof postV1ObjectsCollectionObjectIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdReadRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessagesMessageIdReadRouteHandler: RouteHandler<
  typeof putV1MessagesMessageIdReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdPreferenceCenterConfigRouteHandler: RouteHandler<
  typeof getV1UsersUserIdPreferenceCenterConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof getV1UsersUserIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof putV1UsersUserIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdWorkflowsKeyRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdWorkflowsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SchedulesRouteHandler: RouteHandler<typeof deleteV1SchedulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SchedulesRouteHandler: RouteHandler<typeof getV1SchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SchedulesRouteHandler: RouteHandler<typeof postV1SchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SchedulesRouteHandler: RouteHandler<typeof putV1SchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectsCollectionObjectIdPreferencesIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectsCollectionObjectIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionObjectIdPreferencesIdRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionObjectIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdPreferencesIdRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesMessageIdSeenRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesMessageIdSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectsCollectionBulkSetRouteHandler: RouteHandler<
  typeof postV1ObjectsCollectionBulkSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationsHightouchEmbeddedDestinationRouteHandler: RouteHandler<
  typeof postV1IntegrationsHightouchEmbeddedDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchUnseenRouteHandler: RouteHandler<
  typeof postV1MessagesBatchUnseenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionIdSchedulesRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionIdSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SchedulesBulkCreateRouteHandler: RouteHandler<
  typeof postV1SchedulesBulkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler: RouteHandler<
  typeof putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchUnreadRouteHandler: RouteHandler<
  typeof postV1MessagesBatchUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProvidersSlackChannelIdChannelsRouteHandler: RouteHandler<
  typeof getV1ProvidersSlackChannelIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowRecipientRunsRouteHandler: RouteHandler<
  typeof getV1WorkflowRecipientRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchSeenRouteHandler: RouteHandler<
  typeof postV1MessagesBatchSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersBulkPreferencesRouteHandler: RouteHandler<
  typeof postV1UsersBulkPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesBatchReadRouteHandler: RouteHandler<
  typeof postV1MessagesBatchReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesBatchContentRouteHandler: RouteHandler<
  typeof getV1MessagesBatchContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesMessageIdDeliveryLogsRouteHandler: RouteHandler<
  typeof getV1MessagesMessageIdDeliveryLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdGuidesMessagesMessageIdInteractedRouteHandler: RouteHandler<
  typeof putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessagesMessageIdRouteHandler: RouteHandler<
  typeof getV1MessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ChannelsChannelIdMessagesBulkActionRouteHandler: RouteHandler<
  typeof postV1ChannelsChannelIdMessagesBulkActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MessagesMessageIdUnarchivedRouteHandler: RouteHandler<
  typeof deleteV1MessagesMessageIdUnarchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkOperationsIdRouteHandler: RouteHandler<
  typeof getV1BulkOperationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdPreferencesRouteHandler: RouteHandler<
  typeof getV1UsersUserIdPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1UsersUserIdPreferencesIdRouteHandler: RouteHandler<
  typeof deleteV1UsersUserIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsersUserIdPreferencesIdRouteHandler: RouteHandler<
  typeof getV1UsersUserIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1UsersUserIdPreferencesIdRouteHandler: RouteHandler<
  typeof putV1UsersUserIdPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ObjectsCollectionBulkSubscriptionsAddRouteHandler: RouteHandler<
  typeof postV1ObjectsCollectionBulkSubscriptionsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UsersUserIdPreferenceCenterSignedUrlRouteHandler: RouteHandler<
  typeof postV1UsersUserIdPreferenceCenterSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

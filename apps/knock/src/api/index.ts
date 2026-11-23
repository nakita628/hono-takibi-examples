import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteV1AudiencesKeyMembersRouteHandler,
  deleteV1MessagesMessageIdArchivedRouteHandler,
  deleteV1MessagesMessageIdReadRouteHandler,
  deleteV1MessagesMessageIdSeenRouteHandler,
  deleteV1MessagesMessageIdUnarchivedRouteHandler,
  deleteV1MessagesMessageIdUnreadRouteHandler,
  deleteV1MessagesMessageIdUnseenRouteHandler,
  deleteV1ObjectsCollectionIdRouteHandler,
  deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  deleteV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  deleteV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  deleteV1SchedulesRouteHandler,
  deleteV1TenantsIdRouteHandler,
  deleteV1UsersUserIdChannelDataChannelIdRouteHandler,
  deleteV1UsersUserIdGuidesMessagesArchivedRouteHandler,
  deleteV1UsersUserIdPreferencesIdRouteHandler,
  deleteV1UsersUserIdRouteHandler,
  getV1AudiencesKeyMembersRouteHandler,
  getV1BulkOperationsIdRouteHandler,
  getV1MessagesBatchContentRouteHandler,
  getV1MessagesMessageIdActivitiesRouteHandler,
  getV1MessagesMessageIdContentRouteHandler,
  getV1MessagesMessageIdDeliveryLogsRouteHandler,
  getV1MessagesMessageIdEventsRouteHandler,
  getV1MessagesMessageIdRouteHandler,
  getV1MessagesRouteHandler,
  getV1ObjectsCollectionIdMessagesRouteHandler,
  getV1ObjectsCollectionIdRouteHandler,
  getV1ObjectsCollectionIdSchedulesRouteHandler,
  getV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  getV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  getV1ObjectsCollectionObjectIdPreferencesRouteHandler,
  getV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  getV1ObjectsCollectionRouteHandler,
  getV1ProvidersMsTeamsChannelIdAuthCheckRouteHandler,
  getV1ProvidersMsTeamsChannelIdChannelsRouteHandler,
  getV1ProvidersMsTeamsChannelIdTeamsRouteHandler,
  getV1ProvidersSlackChannelIdAuthCheckRouteHandler,
  getV1ProvidersSlackChannelIdChannelsRouteHandler,
  getV1SchedulesRouteHandler,
  getV1TenantsIdRouteHandler,
  getV1TenantsRouteHandler,
  getV1UsersRouteHandler,
  getV1UsersUserIdChannelDataChannelIdRouteHandler,
  getV1UsersUserIdFeedsIdRouteHandler,
  getV1UsersUserIdFeedsIdSettingsRouteHandler,
  getV1UsersUserIdGuidesChannelIdRouteHandler,
  getV1UsersUserIdMessagesRouteHandler,
  getV1UsersUserIdPreferenceCenterConfigRouteHandler,
  getV1UsersUserIdPreferencesIdRouteHandler,
  getV1UsersUserIdPreferencesRouteHandler,
  getV1UsersUserIdRouteHandler,
  getV1UsersUserIdSchedulesRouteHandler,
  getV1UsersUserIdSubscriptionsRouteHandler,
  getV1WorkflowRecipientRunsIdRouteHandler,
  getV1WorkflowRecipientRunsRouteHandler,
  postV1AudiencesKeyMembersRouteHandler,
  postV1ChannelsChannelIdMessagesBulkActionRouteHandler,
  postV1IntegrationsCensusCustomDestinationRouteHandler,
  postV1IntegrationsHightouchEmbeddedDestinationRouteHandler,
  postV1MessagesBatchArchivedRouteHandler,
  postV1MessagesBatchInteractedRouteHandler,
  postV1MessagesBatchReadRouteHandler,
  postV1MessagesBatchSeenRouteHandler,
  postV1MessagesBatchUnarchivedRouteHandler,
  postV1MessagesBatchUnreadRouteHandler,
  postV1MessagesBatchUnseenRouteHandler,
  postV1NotifyCancelRouteHandler,
  postV1NotifyRouteHandler,
  postV1ObjectsCollectionBulkDeleteRouteHandler,
  postV1ObjectsCollectionBulkSetRouteHandler,
  postV1ObjectsCollectionBulkSubscriptionsAddRouteHandler,
  postV1ObjectsCollectionBulkSubscriptionsDeleteRouteHandler,
  postV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  postV1SchedulesBulkCreateRouteHandler,
  postV1SchedulesRouteHandler,
  postV1TenantsBulkDeleteRouteHandler,
  postV1TenantsBulkSetRouteHandler,
  postV1UsersBulkDeleteRouteHandler,
  postV1UsersBulkIdentifyRouteHandler,
  postV1UsersBulkPreferencesRouteHandler,
  postV1UsersUserIdMergeRouteHandler,
  postV1UsersUserIdPreferenceCenterSignedUrlRouteHandler,
  postV1WorkflowsKeyCancelRouteHandler,
  postV1WorkflowsKeyTriggerRouteHandler,
  putV1MessagesMessageIdArchivedRouteHandler,
  putV1MessagesMessageIdInteractedRouteHandler,
  putV1MessagesMessageIdReadRouteHandler,
  putV1MessagesMessageIdSeenRouteHandler,
  putV1ObjectsCollectionIdRouteHandler,
  putV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRouteHandler,
  putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRouteHandler,
  putV1ProvidersMsTeamsChannelIdRevokeAccessRouteHandler,
  putV1ProvidersSlackChannelIdRevokeAccessRouteHandler,
  putV1SchedulesRouteHandler,
  putV1TenantsIdRouteHandler,
  putV1UsersUserIdChannelDataChannelIdRouteHandler,
  putV1UsersUserIdGuidesEngagementsResetRouteHandler,
  putV1UsersUserIdGuidesMessagesArchivedRouteHandler,
  putV1UsersUserIdGuidesMessagesInteractedRouteHandler,
  putV1UsersUserIdGuidesMessagesMessageIdArchivedRouteHandler,
  putV1UsersUserIdGuidesMessagesMessageIdInteractedRouteHandler,
  putV1UsersUserIdGuidesMessagesMessageIdSeenRouteHandler,
  putV1UsersUserIdGuidesMessagesSeenRouteHandler,
  putV1UsersUserIdPreferencesIdCategoriesKeyRouteHandler,
  putV1UsersUserIdPreferencesIdCategoriesRouteHandler,
  putV1UsersUserIdPreferencesIdChannelTypesRouteHandler,
  putV1UsersUserIdPreferencesIdChannelTypesTypeRouteHandler,
  putV1UsersUserIdPreferencesIdRouteHandler,
  putV1UsersUserIdPreferencesIdWorkflowsKeyRouteHandler,
  putV1UsersUserIdPreferencesIdWorkflowsRouteHandler,
  putV1UsersUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1ObjectsCollectionIdRoute, deleteV1ObjectsCollectionIdRouteHandler)
  .openapi(getV1ObjectsCollectionIdRoute, getV1ObjectsCollectionIdRouteHandler)
  .openapi(putV1ObjectsCollectionIdRoute, putV1ObjectsCollectionIdRouteHandler)
  .openapi(
    putV1UsersUserIdGuidesMessagesInteractedRoute,
    putV1UsersUserIdGuidesMessagesInteractedRouteHandler,
  )
  .openapi(
    postV1IntegrationsCensusCustomDestinationRoute,
    postV1IntegrationsCensusCustomDestinationRouteHandler,
  )
  .openapi(getV1UsersUserIdSubscriptionsRoute, getV1UsersUserIdSubscriptionsRouteHandler)
  .openapi(postV1WorkflowsKeyCancelRoute, postV1WorkflowsKeyCancelRouteHandler)
  .openapi(
    deleteV1UsersUserIdGuidesMessagesArchivedRoute,
    deleteV1UsersUserIdGuidesMessagesArchivedRouteHandler,
  )
  .openapi(
    putV1UsersUserIdGuidesMessagesArchivedRoute,
    putV1UsersUserIdGuidesMessagesArchivedRouteHandler,
  )
  .openapi(
    putV1UsersUserIdPreferencesIdChannelTypesRoute,
    putV1UsersUserIdPreferencesIdChannelTypesRouteHandler,
  )
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRouteHandler,
  )
  .openapi(getV1MessagesRoute, getV1MessagesRouteHandler)
  .openapi(
    putV1UsersUserIdPreferencesIdChannelTypesTypeRoute,
    putV1UsersUserIdPreferencesIdChannelTypesTypeRouteHandler,
  )
  .openapi(
    getV1ProvidersMsTeamsChannelIdChannelsRoute,
    getV1ProvidersMsTeamsChannelIdChannelsRouteHandler,
  )
  .openapi(putV1MessagesMessageIdInteractedRoute, putV1MessagesMessageIdInteractedRouteHandler)
  .openapi(getV1MessagesMessageIdEventsRoute, getV1MessagesMessageIdEventsRouteHandler)
  .openapi(getV1UsersUserIdMessagesRoute, getV1UsersUserIdMessagesRouteHandler)
  .openapi(
    putV1ProvidersSlackChannelIdRevokeAccessRoute,
    putV1ProvidersSlackChannelIdRevokeAccessRouteHandler,
  )
  .openapi(postV1ObjectsCollectionBulkDeleteRoute, postV1ObjectsCollectionBulkDeleteRouteHandler)
  .openapi(
    putV1UsersUserIdPreferencesIdWorkflowsRoute,
    putV1UsersUserIdPreferencesIdWorkflowsRouteHandler,
  )
  .openapi(getV1UsersUserIdGuidesChannelIdRoute, getV1UsersUserIdGuidesChannelIdRouteHandler)
  .openapi(getV1UsersUserIdSchedulesRoute, getV1UsersUserIdSchedulesRouteHandler)
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRouteHandler,
  )
  .openapi(
    putV1UsersUserIdPreferencesIdCategoriesKeyRoute,
    putV1UsersUserIdPreferencesIdCategoriesKeyRouteHandler,
  )
  .openapi(getV1MessagesMessageIdContentRoute, getV1MessagesMessageIdContentRouteHandler)
  .openapi(
    getV1ProvidersMsTeamsChannelIdAuthCheckRoute,
    getV1ProvidersMsTeamsChannelIdAuthCheckRouteHandler,
  )
  .openapi(
    putV1ProvidersMsTeamsChannelIdRevokeAccessRoute,
    putV1ProvidersMsTeamsChannelIdRevokeAccessRouteHandler,
  )
  .openapi(getV1UsersUserIdFeedsIdSettingsRoute, getV1UsersUserIdFeedsIdSettingsRouteHandler)
  .openapi(
    putV1UsersUserIdGuidesEngagementsResetRoute,
    putV1UsersUserIdGuidesEngagementsResetRouteHandler,
  )
  .openapi(
    getV1ObjectsCollectionObjectIdPreferencesRoute,
    getV1ObjectsCollectionObjectIdPreferencesRouteHandler,
  )
  .openapi(getV1MessagesMessageIdActivitiesRoute, getV1MessagesMessageIdActivitiesRouteHandler)
  .openapi(getV1TenantsRoute, getV1TenantsRouteHandler)
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRouteHandler,
  )
  .openapi(getV1ObjectsCollectionIdMessagesRoute, getV1ObjectsCollectionIdMessagesRouteHandler)
  .openapi(postV1NotifyRoute, postV1NotifyRouteHandler)
  .openapi(postV1MessagesBatchArchivedRoute, postV1MessagesBatchArchivedRouteHandler)
  .openapi(getV1UsersUserIdFeedsIdRoute, getV1UsersUserIdFeedsIdRouteHandler)
  .openapi(postV1MessagesBatchUnarchivedRoute, postV1MessagesBatchUnarchivedRouteHandler)
  .openapi(
    getV1ProvidersMsTeamsChannelIdTeamsRoute,
    getV1ProvidersMsTeamsChannelIdTeamsRouteHandler,
  )
  .openapi(postV1UsersUserIdMergeRoute, postV1UsersUserIdMergeRouteHandler)
  .openapi(
    postV1ObjectsCollectionBulkSubscriptionsDeleteRoute,
    postV1ObjectsCollectionBulkSubscriptionsDeleteRouteHandler,
  )
  .openapi(
    putV1UsersUserIdPreferencesIdCategoriesRoute,
    putV1UsersUserIdPreferencesIdCategoriesRouteHandler,
  )
  .openapi(getV1ObjectsCollectionRoute, getV1ObjectsCollectionRouteHandler)
  .openapi(getV1UsersRoute, getV1UsersRouteHandler)
  .openapi(getV1WorkflowRecipientRunsIdRoute, getV1WorkflowRecipientRunsIdRouteHandler)
  .openapi(deleteV1MessagesMessageIdSeenRoute, deleteV1MessagesMessageIdSeenRouteHandler)
  .openapi(putV1MessagesMessageIdSeenRoute, putV1MessagesMessageIdSeenRouteHandler)
  .openapi(
    getV1ProvidersSlackChannelIdAuthCheckRoute,
    getV1ProvidersSlackChannelIdAuthCheckRouteHandler,
  )
  .openapi(postV1UsersBulkDeleteRoute, postV1UsersBulkDeleteRouteHandler)
  .openapi(postV1NotifyCancelRoute, postV1NotifyCancelRouteHandler)
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRouteHandler,
  )
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRouteHandler,
  )
  .openapi(postV1UsersBulkIdentifyRoute, postV1UsersBulkIdentifyRouteHandler)
  .openapi(postV1TenantsBulkSetRoute, postV1TenantsBulkSetRouteHandler)
  .openapi(deleteV1AudiencesKeyMembersRoute, deleteV1AudiencesKeyMembersRouteHandler)
  .openapi(getV1AudiencesKeyMembersRoute, getV1AudiencesKeyMembersRouteHandler)
  .openapi(postV1AudiencesKeyMembersRoute, postV1AudiencesKeyMembersRouteHandler)
  .openapi(deleteV1MessagesMessageIdArchivedRoute, deleteV1MessagesMessageIdArchivedRouteHandler)
  .openapi(putV1MessagesMessageIdArchivedRoute, putV1MessagesMessageIdArchivedRouteHandler)
  .openapi(postV1WorkflowsKeyTriggerRoute, postV1WorkflowsKeyTriggerRouteHandler)
  .openapi(
    putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute,
    putV1UsersUserIdGuidesMessagesMessageIdArchivedRouteHandler,
  )
  .openapi(postV1TenantsBulkDeleteRoute, postV1TenantsBulkDeleteRouteHandler)
  .openapi(deleteV1MessagesMessageIdUnreadRoute, deleteV1MessagesMessageIdUnreadRouteHandler)
  .openapi(deleteV1UsersUserIdRoute, deleteV1UsersUserIdRouteHandler)
  .openapi(getV1UsersUserIdRoute, getV1UsersUserIdRouteHandler)
  .openapi(putV1UsersUserIdRoute, putV1UsersUserIdRouteHandler)
  .openapi(postV1MessagesBatchInteractedRoute, postV1MessagesBatchInteractedRouteHandler)
  .openapi(deleteV1TenantsIdRoute, deleteV1TenantsIdRouteHandler)
  .openapi(getV1TenantsIdRoute, getV1TenantsIdRouteHandler)
  .openapi(putV1TenantsIdRoute, putV1TenantsIdRouteHandler)
  .openapi(putV1UsersUserIdGuidesMessagesSeenRoute, putV1UsersUserIdGuidesMessagesSeenRouteHandler)
  .openapi(deleteV1MessagesMessageIdUnseenRoute, deleteV1MessagesMessageIdUnseenRouteHandler)
  .openapi(
    deleteV1ObjectsCollectionObjectIdSubscriptionsRoute,
    deleteV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  )
  .openapi(
    getV1ObjectsCollectionObjectIdSubscriptionsRoute,
    getV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  )
  .openapi(
    postV1ObjectsCollectionObjectIdSubscriptionsRoute,
    postV1ObjectsCollectionObjectIdSubscriptionsRouteHandler,
  )
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRouteHandler,
  )
  .openapi(deleteV1MessagesMessageIdReadRoute, deleteV1MessagesMessageIdReadRouteHandler)
  .openapi(putV1MessagesMessageIdReadRoute, putV1MessagesMessageIdReadRouteHandler)
  .openapi(
    getV1UsersUserIdPreferenceCenterConfigRoute,
    getV1UsersUserIdPreferenceCenterConfigRouteHandler,
  )
  .openapi(
    deleteV1UsersUserIdChannelDataChannelIdRoute,
    deleteV1UsersUserIdChannelDataChannelIdRouteHandler,
  )
  .openapi(
    getV1UsersUserIdChannelDataChannelIdRoute,
    getV1UsersUserIdChannelDataChannelIdRouteHandler,
  )
  .openapi(
    putV1UsersUserIdChannelDataChannelIdRoute,
    putV1UsersUserIdChannelDataChannelIdRouteHandler,
  )
  .openapi(
    putV1UsersUserIdPreferencesIdWorkflowsKeyRoute,
    putV1UsersUserIdPreferencesIdWorkflowsKeyRouteHandler,
  )
  .openapi(deleteV1SchedulesRoute, deleteV1SchedulesRouteHandler)
  .openapi(getV1SchedulesRoute, getV1SchedulesRouteHandler)
  .openapi(postV1SchedulesRoute, postV1SchedulesRouteHandler)
  .openapi(putV1SchedulesRoute, putV1SchedulesRouteHandler)
  .openapi(
    deleteV1ObjectsCollectionObjectIdPreferencesIdRoute,
    deleteV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  )
  .openapi(
    getV1ObjectsCollectionObjectIdPreferencesIdRoute,
    getV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  )
  .openapi(
    putV1ObjectsCollectionObjectIdPreferencesIdRoute,
    putV1ObjectsCollectionObjectIdPreferencesIdRouteHandler,
  )
  .openapi(
    putV1UsersUserIdGuidesMessagesMessageIdSeenRoute,
    putV1UsersUserIdGuidesMessagesMessageIdSeenRouteHandler,
  )
  .openapi(postV1ObjectsCollectionBulkSetRoute, postV1ObjectsCollectionBulkSetRouteHandler)
  .openapi(
    postV1IntegrationsHightouchEmbeddedDestinationRoute,
    postV1IntegrationsHightouchEmbeddedDestinationRouteHandler,
  )
  .openapi(postV1MessagesBatchUnseenRoute, postV1MessagesBatchUnseenRouteHandler)
  .openapi(getV1ObjectsCollectionIdSchedulesRoute, getV1ObjectsCollectionIdSchedulesRouteHandler)
  .openapi(postV1SchedulesBulkCreateRoute, postV1SchedulesBulkCreateRouteHandler)
  .openapi(
    deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
    deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  )
  .openapi(
    getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
    getV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  )
  .openapi(
    putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute,
    putV1ObjectsCollectionObjectIdChannelDataChannelIdRouteHandler,
  )
  .openapi(postV1MessagesBatchUnreadRoute, postV1MessagesBatchUnreadRouteHandler)
  .openapi(
    getV1ProvidersSlackChannelIdChannelsRoute,
    getV1ProvidersSlackChannelIdChannelsRouteHandler,
  )
  .openapi(getV1WorkflowRecipientRunsRoute, getV1WorkflowRecipientRunsRouteHandler)
  .openapi(postV1MessagesBatchSeenRoute, postV1MessagesBatchSeenRouteHandler)
  .openapi(postV1UsersBulkPreferencesRoute, postV1UsersBulkPreferencesRouteHandler)
  .openapi(postV1MessagesBatchReadRoute, postV1MessagesBatchReadRouteHandler)
  .openapi(getV1MessagesBatchContentRoute, getV1MessagesBatchContentRouteHandler)
  .openapi(getV1MessagesMessageIdDeliveryLogsRoute, getV1MessagesMessageIdDeliveryLogsRouteHandler)
  .openapi(
    putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute,
    putV1UsersUserIdGuidesMessagesMessageIdInteractedRouteHandler,
  )
  .openapi(getV1MessagesMessageIdRoute, getV1MessagesMessageIdRouteHandler)
  .openapi(
    postV1ChannelsChannelIdMessagesBulkActionRoute,
    postV1ChannelsChannelIdMessagesBulkActionRouteHandler,
  )
  .openapi(
    deleteV1MessagesMessageIdUnarchivedRoute,
    deleteV1MessagesMessageIdUnarchivedRouteHandler,
  )
  .openapi(getV1BulkOperationsIdRoute, getV1BulkOperationsIdRouteHandler)
  .openapi(getV1UsersUserIdPreferencesRoute, getV1UsersUserIdPreferencesRouteHandler)
  .openapi(deleteV1UsersUserIdPreferencesIdRoute, deleteV1UsersUserIdPreferencesIdRouteHandler)
  .openapi(getV1UsersUserIdPreferencesIdRoute, getV1UsersUserIdPreferencesIdRouteHandler)
  .openapi(putV1UsersUserIdPreferencesIdRoute, putV1UsersUserIdPreferencesIdRouteHandler)
  .openapi(
    postV1ObjectsCollectionBulkSubscriptionsAddRoute,
    postV1ObjectsCollectionBulkSubscriptionsAddRouteHandler,
  )
  .openapi(
    postV1UsersUserIdPreferenceCenterSignedUrlRoute,
    postV1UsersUserIdPreferenceCenterSignedUrlRouteHandler,
  )

export default app

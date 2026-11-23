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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsCensusCustomDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkflowsKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdGuidesMessagesArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdChannelTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdChannelTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersMsTeamsChannelIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvidersSlackChannelIdRevokeAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdGuidesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdCategoriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersMsTeamsChannelIdAuthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvidersMsTeamsChannelIdRevokeAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdFeedsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesEngagementsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdFeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnarchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersMsTeamsChannelIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowRecipientRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersSlackChannelIdAuthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotifyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkIdentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TenantsBulkSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkflowsKeyTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TenantsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TenantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnseenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionObjectIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferenceCenterConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdWorkflowsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationsHightouchEmbeddedDestinationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnseenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulesBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectsCollectionObjectIdChannelDataChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersSlackChannelIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowRecipientRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesBatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdDeliveryLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdGuidesMessagesMessageIdInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelsChannelIdMessagesBulkActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnarchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectsCollectionBulkSubscriptionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdPreferenceCenterSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })

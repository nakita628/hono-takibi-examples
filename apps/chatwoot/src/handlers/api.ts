import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdAgentBotsIdRoute,
  deleteApiV1AccountsAccountIdAgentsIdRoute,
  deleteApiV1AccountsAccountIdAutomationRulesIdRoute,
  deleteApiV1AccountsAccountIdCampaignsIdRoute,
  deleteApiV1AccountsAccountIdCannedResponsesIdRoute,
  deleteApiV1AccountsAccountIdContactsIdRoute,
  deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute,
  deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  deleteApiV1AccountsAccountIdInboxMembersRoute,
  deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute,
  deleteApiV1AccountsAccountIdLabelsIdRoute,
  deleteApiV1AccountsAccountIdTeamsTeamIdRoute,
  deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute,
  getApiV1AccountsAccountIdAgentBotsIdRoute,
  getApiV1AccountsAccountIdAgentBotsRoute,
  getApiV1AccountsAccountIdAgentsRoute,
  getApiV1AccountsAccountIdAuditLogsRoute,
  getApiV1AccountsAccountIdAutomationRulesIdRoute,
  getApiV1AccountsAccountIdAutomationRulesRoute,
  getApiV1AccountsAccountIdBrandedEmailLayoutRoute,
  getApiV1AccountsAccountIdCampaignsIdRoute,
  getApiV1AccountsAccountIdCampaignsRoute,
  getApiV1AccountsAccountIdCannedResponsesRoute,
  getApiV1AccountsAccountIdContactsIdContactableInboxesRoute,
  getApiV1AccountsAccountIdContactsIdConversationsRoute,
  getApiV1AccountsAccountIdContactsIdLabelsRoute,
  getApiV1AccountsAccountIdContactsIdRoute,
  getApiV1AccountsAccountIdContactsRoute,
  getApiV1AccountsAccountIdContactsSearchRoute,
  getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute,
  getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute,
  getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute,
  getApiV1AccountsAccountIdConversationsConversationIdRoute,
  getApiV1AccountsAccountIdConversationsMetaRoute,
  getApiV1AccountsAccountIdConversationsRoute,
  getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute,
  getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  getApiV1AccountsAccountIdCustomFiltersRoute,
  getApiV1AccountsAccountIdInboxesIdAgentBotRoute,
  getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute,
  getApiV1AccountsAccountIdInboxesIdRoute,
  getApiV1AccountsAccountIdInboxesRoute,
  getApiV1AccountsAccountIdInboxMembersInboxIdRoute,
  getApiV1AccountsAccountIdIntegrationsAppsRoute,
  getApiV1AccountsAccountIdLabelsIdRoute,
  getApiV1AccountsAccountIdLabelsRoute,
  getApiV1AccountsAccountIdPortalsPortalSlugRoute,
  getApiV1AccountsAccountIdPortalsRoute,
  getApiV1AccountsAccountIdReportingEventsRoute,
  getApiV1AccountsAccountIdRoute,
  getApiV1AccountsAccountIdTeamsRoute,
  getApiV1AccountsAccountIdTeamsTeamIdRoute,
  getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  getApiV1AccountsAccountIdWebhooksRoute,
  getApiV1ProfileRoute,
  getApiV2AccountsAccountIdReportsConversationsIndexRoute,
  getApiV2AccountsAccountIdReportsConversationsRoute,
  getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute,
  getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute,
  getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute,
  getApiV2AccountsAccountIdReportsRoute,
  getApiV2AccountsAccountIdReportsSummaryRoute,
  getApiV2AccountsAccountIdSummaryReportsAgentRoute,
  getApiV2AccountsAccountIdSummaryReportsChannelRoute,
  getApiV2AccountsAccountIdSummaryReportsInboxRoute,
  getApiV2AccountsAccountIdSummaryReportsTeamRoute,
  patchApiV1AccountsAccountIdAgentBotsIdRoute,
  patchApiV1AccountsAccountIdAgentsIdRoute,
  patchApiV1AccountsAccountIdAutomationRulesIdRoute,
  patchApiV1AccountsAccountIdBrandedEmailLayoutRoute,
  patchApiV1AccountsAccountIdCampaignsIdRoute,
  patchApiV1AccountsAccountIdCannedResponsesIdRoute,
  patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute,
  patchApiV1AccountsAccountIdConversationsConversationIdRoute,
  patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  patchApiV1AccountsAccountIdInboxesIdRoute,
  patchApiV1AccountsAccountIdInboxMembersRoute,
  patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute,
  patchApiV1AccountsAccountIdLabelsIdRoute,
  patchApiV1AccountsAccountIdPortalsPortalSlugRoute,
  patchApiV1AccountsAccountIdRoute,
  patchApiV1AccountsAccountIdTeamsTeamIdRoute,
  patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  patchApiV1AccountsAccountIdWebhooksWebhookIdRoute,
  postApiV1AccountsAccountIdActionsContactMergeRoute,
  postApiV1AccountsAccountIdAgentBotsRoute,
  postApiV1AccountsAccountIdAgentsRoute,
  postApiV1AccountsAccountIdAutomationRulesRoute,
  postApiV1AccountsAccountIdCampaignsRoute,
  postApiV1AccountsAccountIdCannedResponsesRoute,
  postApiV1AccountsAccountIdContactsFilterRoute,
  postApiV1AccountsAccountIdContactsIdContactInboxesRoute,
  postApiV1AccountsAccountIdContactsIdLabelsRoute,
  postApiV1AccountsAccountIdContactsRoute,
  postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute,
  postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute,
  postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute,
  postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute,
  postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute,
  postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute,
  postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute,
  postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute,
  postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute,
  postApiV1AccountsAccountIdConversationsFilterRoute,
  postApiV1AccountsAccountIdConversationsRoute,
  postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute,
  postApiV1AccountsAccountIdCustomFiltersRoute,
  postApiV1AccountsAccountIdDataExportsRoute,
  postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute,
  postApiV1AccountsAccountIdInboxesRoute,
  postApiV1AccountsAccountIdInboxMembersRoute,
  postApiV1AccountsAccountIdIntegrationsHooksRoute,
  postApiV1AccountsAccountIdLabelsRoute,
  postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute,
  postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute,
  postApiV1AccountsAccountIdPortalsRoute,
  postApiV1AccountsAccountIdTeamsRoute,
  postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute,
  postApiV1AccountsAccountIdWebhooksRoute,
  putApiV1AccountsAccountIdContactsIdRoute,
  putApiV1ProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsIdContactInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdContactableInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdDataExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdActionsContactMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAutomationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAutomationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdPortalsPortalSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdPortalsPortalSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdBrandedEmailLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdBrandedEmailLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdAgentBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxMembersInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdIntegrationsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdIntegrationsHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCustomFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdReportingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsConversationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdSummaryReportsTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

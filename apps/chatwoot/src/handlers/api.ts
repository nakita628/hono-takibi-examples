import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiV1AccountsAccountIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAuditLogsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAgentBotsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAgentBotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdAgentBotsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdAgentBotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAgentBotsIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAgentBotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdAgentBotsIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdAgentBotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdAgentBotsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdAgentBotsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAgentsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdAgentsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdAgentsIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdAgentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdAgentsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdAgentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCannedResponsesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCannedResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdCannedResponsesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdCannedResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdCannedResponsesIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdCannedResponsesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdCannedResponsesIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdCannedResponsesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCustomAttributeDefinitionsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdCustomAttributeDefinitionsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdContactsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AccountsAccountIdContactsIdRouteHandler: RouteHandler<
  typeof putApiV1AccountsAccountIdContactsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdContactsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdContactsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsIdConversationsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsIdConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsIdLabelsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdContactsIdLabelsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdContactsIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsSearchRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdContactsFilterRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdContactsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdContactsIdContactInboxesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdContactsIdContactInboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdContactsIdContactableInboxesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdContactsIdContactableInboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdDataExportsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdDataExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdActionsContactMergeRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdActionsContactMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAutomationRulesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAutomationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdAutomationRulesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdAutomationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdAutomationRulesIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdAutomationRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdAutomationRulesIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdAutomationRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdAutomationRulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdAutomationRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdPortalsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdPortalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdPortalsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdPortalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdPortalsPortalSlugRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdPortalsPortalSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdPortalsPortalSlugRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdPortalsPortalSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdPortalsPortalSlugArticlesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsMetaRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsFilterRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsConversationIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdConversationsConversationIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdConversationsConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsConversationIdLabelsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdLabelsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdBrandedEmailLayoutRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdBrandedEmailLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdBrandedEmailLayoutRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdBrandedEmailLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdInboxesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdInboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdInboxesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdInboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdInboxesIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdInboxesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdInboxesIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdInboxesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdInboxesIdMessageTemplatesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdInboxesIdAgentBotRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdInboxesIdAgentBotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdInboxesIdSetAgentBotRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdInboxMembersInboxIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdInboxMembersInboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdInboxMembersRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdInboxMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdInboxMembersRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdInboxMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdInboxMembersRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdInboxMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdLabelsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdLabelsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdLabelsIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdLabelsIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdLabelsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdIntegrationsAppsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdIntegrationsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdIntegrationsHooksRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdIntegrationsHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdIntegrationsHooksHookIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdIntegrationsHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdIntegrationsHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProfileRouteHandler: RouteHandler<typeof getApiV1ProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ProfileRouteHandler: RouteHandler<typeof putApiV1ProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdTeamsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdTeamsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdTeamsTeamIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdTeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdTeamsTeamIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdTeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdTeamsTeamIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdTeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCustomFiltersRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCustomFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdCustomFiltersRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdCustomFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdWebhooksRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdWebhooksRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdReportingEventsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdReportingEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsSummaryRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsConversationsRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsConversationsIndexRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsConversationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdSummaryReportsChannelRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdSummaryReportsChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdSummaryReportsInboxRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdSummaryReportsInboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdSummaryReportsAgentRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdSummaryReportsAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdSummaryReportsTeamRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdSummaryReportsTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsFirstResponseTimeDistributionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsInboxLabelMatrixRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsInboxLabelMatrixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAccountIdReportsOutgoingMessagesCountRouteHandler: RouteHandler<
  typeof getApiV2AccountsAccountIdReportsOutgoingMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCampaignsRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AccountsAccountIdCampaignsRouteHandler: RouteHandler<
  typeof postApiV1AccountsAccountIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AccountsAccountIdCampaignsIdRouteHandler: RouteHandler<
  typeof getApiV1AccountsAccountIdCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1AccountsAccountIdCampaignsIdRouteHandler: RouteHandler<
  typeof patchApiV1AccountsAccountIdCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AccountsAccountIdCampaignsIdRouteHandler: RouteHandler<
  typeof deleteApiV1AccountsAccountIdCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

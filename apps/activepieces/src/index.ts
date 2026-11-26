import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1FoldersRoute,
  getV1FoldersRoute,
  postV1FoldersIdRoute,
  getV1FoldersIdRoute,
  deleteV1FoldersIdRoute,
  postV1FlowsRoute,
  getV1FlowsRoute,
  postV1FlowsIdRoute,
  getV1FlowsIdRoute,
  deleteV1FlowsIdRoute,
  getV1FlowsIdTemplateRoute,
  postV1SampleDataTestStepRoute,
  getV1SampleDataRoute,
  getV1FlowRunsRoute,
  getV1FlowRunsCountByStatusRoute,
  getV1FlowRunsIdRoute,
  postV1FlowRunsCancelRoute,
  postV1AppConnectionsRoute,
  getV1AppConnectionsRoute,
  getV1AppConnectionsIdRoute,
  postV1AppConnectionsIdRoute,
  deleteV1AppConnectionsIdRoute,
  getV1AppConnectionsOwnersRoute,
  postV1AppConnectionsReplaceRoute,
  postV1AppConnectionsOauth2AuthorizationUrlRoute,
  postV1VariablesRoute,
  getV1VariablesRoute,
  postV1VariablesIdRoute,
  deleteV1VariablesIdRoute,
  getV1PlatformsIdRoute,
  getV1ProjectsProjectIdMcpServerRoute,
  postV1ProjectsProjectIdMcpServerRoute,
  postV1ProjectsProjectIdMcpServerRotateRoute,
  getV1McpServerRoute,
  postV1McpServerRoute,
  postV1McpServerRotateRoute,
  postV1McpOauthApproveRoute,
  postV1ProjectsProjectIdAgentToolsMcpValidateRoute,
  getV1UsersRoute,
  postV1UsersIdRoute,
  deleteV1UsersIdRoute,
  getV1UsersIdRoute,
  postV1UserInvitationsRoute,
  getV1UserInvitationsRoute,
  deleteV1UserInvitationsIdRoute,
  getV1WorkerMachinesQueueMetricsRoute,
  postV1TablesIdRoute,
  deleteV1TablesIdRoute,
  getV1TablesIdRoute,
  getV1TablesRoute,
  getV1TablesIdTemplateRoute,
  getV1TablesCountRoute,
  getV1TablesIdExportRoute,
  postV1TablesIdWebhooksRoute,
  deleteV1TablesIdWebhooksWebhookIdRoute,
  postV1TablesIdClearRoute,
  postV1RecordsIdRoute,
  deleteV1RecordsRoute,
  getV1RecordsRoute,
  postV1KnowledgeBaseFilesRoute,
  getV1KnowledgeBaseFilesRoute,
  postV1KnowledgeBaseFilesUploadRoute,
  deleteV1KnowledgeBaseFilesIdRoute,
  getV1KnowledgeBaseFilesIdChunksCountRoute,
  postV1KnowledgeBaseFilesIdExtractChunksRoute,
  postV1KnowledgeBaseFilesIdStoreChunksRoute,
  getV1KnowledgeBaseFilesIdChunksRoute,
  postV1KnowledgeBaseFilesSearchRoute,
  getV1TemplatesIdRoute,
  postV1TemplatesIdRoute,
  deleteV1TemplatesIdRoute,
  getV1TemplatesCategoriesRoute,
  getV1TemplatesRoute,
  postV1TemplatesRoute,
  postV1ProjectsRoute,
  getV1ProjectsRoute,
  postV1ProjectsIdRoute,
  deleteV1ProjectsIdRoute,
  getV1ProjectMembersRoute,
  deleteV1ProjectMembersIdRoute,
  postV1PiecesRoute,
  postV1GitReposRoute,
  getV1EventDestinationsRoute,
  getV1ProjectRolesIdProjectMembersRoute,
  postV1ProjectReleasesRoute,
  postV1GlobalConnectionsRoute,
  getV1GlobalConnectionsRoute,
  postV1GlobalConnectionsIdRoute,
  deleteV1GlobalConnectionsIdRoute,
  postV1EmbedSubdomainAllowedEmbedOriginsRoute,
  postV1AgentsConversationsRoute,
  getV1AgentsConversationsRoute,
  getV1AgentsConversationsIdRoute,
  postV1AgentsConversationsIdRoute,
  deleteV1AgentsConversationsIdRoute,
  getV1AgentsConversationsIdMessagesRoute,
  postV1AgentsConversationsIdMessagesRoute,
  postV1AgentsToolApprovalsGateIdRoute,
  postV1PlatformConfigurationsRoute,
  getV1AiProvidersConfigsRoute,
  getV1AiProvidersConfigsIdModelsRoute,
  getV1AiProvidersConfigsIdSuggestedModelsRoute,
  getV1AiProvidersModelOptionsPlatformRoute,
  postV1AiProvidersRoute,
  postV1AiProvidersIdRecheckRoute,
  postV1AiProvidersIdRoute,
  deleteV1AiProvidersIdRoute,
  getV1PlatformModelTiersAdminRoute,
  postV1PlatformModelTiersRoute,
  postV1PlatformModelTiersReorderRoute,
  postV1PlatformModelTiersIdRoute,
  deleteV1PlatformModelTiersIdRoute,
  getV1AiToolsRoute,
  postV1AiToolsRoute,
  postV1AiToolsIdRoute,
  deleteV1AiToolsIdRoute,
  getV1AiUsageOverviewRoute,
  getV1AiUsageItemsRoute,
  getV1AiUsageItemsDimensionIdRoute,
} from './routes'
import {
  postV1FoldersRouteHandler,
  getV1FoldersRouteHandler,
  postV1FoldersIdRouteHandler,
  getV1FoldersIdRouteHandler,
  deleteV1FoldersIdRouteHandler,
  postV1FlowsRouteHandler,
  getV1FlowsRouteHandler,
  postV1FlowsIdRouteHandler,
  getV1FlowsIdRouteHandler,
  deleteV1FlowsIdRouteHandler,
  getV1FlowsIdTemplateRouteHandler,
  postV1SampleDataTestStepRouteHandler,
  getV1SampleDataRouteHandler,
  getV1FlowRunsRouteHandler,
  getV1FlowRunsCountByStatusRouteHandler,
  getV1FlowRunsIdRouteHandler,
  postV1FlowRunsCancelRouteHandler,
  postV1AppConnectionsRouteHandler,
  getV1AppConnectionsRouteHandler,
  getV1AppConnectionsIdRouteHandler,
  postV1AppConnectionsIdRouteHandler,
  deleteV1AppConnectionsIdRouteHandler,
  getV1AppConnectionsOwnersRouteHandler,
  postV1AppConnectionsReplaceRouteHandler,
  postV1AppConnectionsOauth2AuthorizationUrlRouteHandler,
  postV1VariablesRouteHandler,
  getV1VariablesRouteHandler,
  postV1VariablesIdRouteHandler,
  deleteV1VariablesIdRouteHandler,
  getV1PlatformsIdRouteHandler,
  getV1ProjectsProjectIdMcpServerRouteHandler,
  postV1ProjectsProjectIdMcpServerRouteHandler,
  postV1ProjectsProjectIdMcpServerRotateRouteHandler,
  getV1McpServerRouteHandler,
  postV1McpServerRouteHandler,
  postV1McpServerRotateRouteHandler,
  postV1McpOauthApproveRouteHandler,
  postV1ProjectsProjectIdAgentToolsMcpValidateRouteHandler,
  getV1UsersRouteHandler,
  postV1UsersIdRouteHandler,
  deleteV1UsersIdRouteHandler,
  getV1UsersIdRouteHandler,
  postV1UserInvitationsRouteHandler,
  getV1UserInvitationsRouteHandler,
  deleteV1UserInvitationsIdRouteHandler,
  getV1WorkerMachinesQueueMetricsRouteHandler,
  postV1TablesIdRouteHandler,
  deleteV1TablesIdRouteHandler,
  getV1TablesIdRouteHandler,
  getV1TablesRouteHandler,
  getV1TablesIdTemplateRouteHandler,
  getV1TablesCountRouteHandler,
  getV1TablesIdExportRouteHandler,
  postV1TablesIdWebhooksRouteHandler,
  deleteV1TablesIdWebhooksWebhookIdRouteHandler,
  postV1TablesIdClearRouteHandler,
  postV1RecordsIdRouteHandler,
  deleteV1RecordsRouteHandler,
  getV1RecordsRouteHandler,
  postV1KnowledgeBaseFilesRouteHandler,
  getV1KnowledgeBaseFilesRouteHandler,
  postV1KnowledgeBaseFilesUploadRouteHandler,
  deleteV1KnowledgeBaseFilesIdRouteHandler,
  getV1KnowledgeBaseFilesIdChunksCountRouteHandler,
  postV1KnowledgeBaseFilesIdExtractChunksRouteHandler,
  postV1KnowledgeBaseFilesIdStoreChunksRouteHandler,
  getV1KnowledgeBaseFilesIdChunksRouteHandler,
  postV1KnowledgeBaseFilesSearchRouteHandler,
  getV1TemplatesIdRouteHandler,
  postV1TemplatesIdRouteHandler,
  deleteV1TemplatesIdRouteHandler,
  getV1TemplatesCategoriesRouteHandler,
  getV1TemplatesRouteHandler,
  postV1TemplatesRouteHandler,
  postV1ProjectsRouteHandler,
  getV1ProjectsRouteHandler,
  postV1ProjectsIdRouteHandler,
  deleteV1ProjectsIdRouteHandler,
  getV1ProjectMembersRouteHandler,
  deleteV1ProjectMembersIdRouteHandler,
  postV1PiecesRouteHandler,
  postV1GitReposRouteHandler,
  getV1EventDestinationsRouteHandler,
  getV1ProjectRolesIdProjectMembersRouteHandler,
  postV1ProjectReleasesRouteHandler,
  postV1GlobalConnectionsRouteHandler,
  getV1GlobalConnectionsRouteHandler,
  postV1GlobalConnectionsIdRouteHandler,
  deleteV1GlobalConnectionsIdRouteHandler,
  postV1EmbedSubdomainAllowedEmbedOriginsRouteHandler,
  postV1AgentsConversationsRouteHandler,
  getV1AgentsConversationsRouteHandler,
  getV1AgentsConversationsIdRouteHandler,
  postV1AgentsConversationsIdRouteHandler,
  deleteV1AgentsConversationsIdRouteHandler,
  getV1AgentsConversationsIdMessagesRouteHandler,
  postV1AgentsConversationsIdMessagesRouteHandler,
  postV1AgentsToolApprovalsGateIdRouteHandler,
  postV1PlatformConfigurationsRouteHandler,
  getV1AiProvidersConfigsRouteHandler,
  getV1AiProvidersConfigsIdModelsRouteHandler,
  getV1AiProvidersConfigsIdSuggestedModelsRouteHandler,
  getV1AiProvidersModelOptionsPlatformRouteHandler,
  postV1AiProvidersRouteHandler,
  postV1AiProvidersIdRecheckRouteHandler,
  postV1AiProvidersIdRouteHandler,
  deleteV1AiProvidersIdRouteHandler,
  getV1PlatformModelTiersAdminRouteHandler,
  postV1PlatformModelTiersRouteHandler,
  postV1PlatformModelTiersReorderRouteHandler,
  postV1PlatformModelTiersIdRouteHandler,
  deleteV1PlatformModelTiersIdRouteHandler,
  getV1AiToolsRouteHandler,
  postV1AiToolsRouteHandler,
  postV1AiToolsIdRouteHandler,
  deleteV1AiToolsIdRouteHandler,
  getV1AiUsageOverviewRouteHandler,
  getV1AiUsageItemsRouteHandler,
  getV1AiUsageItemsDimensionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1FoldersRoute, postV1FoldersRouteHandler)
  .openapi(getV1FoldersRoute, getV1FoldersRouteHandler)
  .openapi(postV1FoldersIdRoute, postV1FoldersIdRouteHandler)
  .openapi(getV1FoldersIdRoute, getV1FoldersIdRouteHandler)
  .openapi(deleteV1FoldersIdRoute, deleteV1FoldersIdRouteHandler)
  .openapi(postV1FlowsRoute, postV1FlowsRouteHandler)
  .openapi(getV1FlowsRoute, getV1FlowsRouteHandler)
  .openapi(postV1FlowsIdRoute, postV1FlowsIdRouteHandler)
  .openapi(getV1FlowsIdRoute, getV1FlowsIdRouteHandler)
  .openapi(deleteV1FlowsIdRoute, deleteV1FlowsIdRouteHandler)
  .openapi(getV1FlowsIdTemplateRoute, getV1FlowsIdTemplateRouteHandler)
  .openapi(postV1SampleDataTestStepRoute, postV1SampleDataTestStepRouteHandler)
  .openapi(getV1SampleDataRoute, getV1SampleDataRouteHandler)
  .openapi(getV1FlowRunsRoute, getV1FlowRunsRouteHandler)
  .openapi(getV1FlowRunsCountByStatusRoute, getV1FlowRunsCountByStatusRouteHandler)
  .openapi(getV1FlowRunsIdRoute, getV1FlowRunsIdRouteHandler)
  .openapi(postV1FlowRunsCancelRoute, postV1FlowRunsCancelRouteHandler)
  .openapi(postV1AppConnectionsRoute, postV1AppConnectionsRouteHandler)
  .openapi(getV1AppConnectionsRoute, getV1AppConnectionsRouteHandler)
  .openapi(getV1AppConnectionsIdRoute, getV1AppConnectionsIdRouteHandler)
  .openapi(postV1AppConnectionsIdRoute, postV1AppConnectionsIdRouteHandler)
  .openapi(deleteV1AppConnectionsIdRoute, deleteV1AppConnectionsIdRouteHandler)
  .openapi(getV1AppConnectionsOwnersRoute, getV1AppConnectionsOwnersRouteHandler)
  .openapi(postV1AppConnectionsReplaceRoute, postV1AppConnectionsReplaceRouteHandler)
  .openapi(
    postV1AppConnectionsOauth2AuthorizationUrlRoute,
    postV1AppConnectionsOauth2AuthorizationUrlRouteHandler,
  )
  .openapi(postV1VariablesRoute, postV1VariablesRouteHandler)
  .openapi(getV1VariablesRoute, getV1VariablesRouteHandler)
  .openapi(postV1VariablesIdRoute, postV1VariablesIdRouteHandler)
  .openapi(deleteV1VariablesIdRoute, deleteV1VariablesIdRouteHandler)
  .openapi(getV1PlatformsIdRoute, getV1PlatformsIdRouteHandler)
  .openapi(getV1ProjectsProjectIdMcpServerRoute, getV1ProjectsProjectIdMcpServerRouteHandler)
  .openapi(postV1ProjectsProjectIdMcpServerRoute, postV1ProjectsProjectIdMcpServerRouteHandler)
  .openapi(
    postV1ProjectsProjectIdMcpServerRotateRoute,
    postV1ProjectsProjectIdMcpServerRotateRouteHandler,
  )
  .openapi(getV1McpServerRoute, getV1McpServerRouteHandler)
  .openapi(postV1McpServerRoute, postV1McpServerRouteHandler)
  .openapi(postV1McpServerRotateRoute, postV1McpServerRotateRouteHandler)
  .openapi(postV1McpOauthApproveRoute, postV1McpOauthApproveRouteHandler)
  .openapi(
    postV1ProjectsProjectIdAgentToolsMcpValidateRoute,
    postV1ProjectsProjectIdAgentToolsMcpValidateRouteHandler,
  )
  .openapi(getV1UsersRoute, getV1UsersRouteHandler)
  .openapi(postV1UsersIdRoute, postV1UsersIdRouteHandler)
  .openapi(deleteV1UsersIdRoute, deleteV1UsersIdRouteHandler)
  .openapi(getV1UsersIdRoute, getV1UsersIdRouteHandler)
  .openapi(postV1UserInvitationsRoute, postV1UserInvitationsRouteHandler)
  .openapi(getV1UserInvitationsRoute, getV1UserInvitationsRouteHandler)
  .openapi(deleteV1UserInvitationsIdRoute, deleteV1UserInvitationsIdRouteHandler)
  .openapi(getV1WorkerMachinesQueueMetricsRoute, getV1WorkerMachinesQueueMetricsRouteHandler)
  .openapi(postV1TablesIdRoute, postV1TablesIdRouteHandler)
  .openapi(deleteV1TablesIdRoute, deleteV1TablesIdRouteHandler)
  .openapi(getV1TablesIdRoute, getV1TablesIdRouteHandler)
  .openapi(getV1TablesRoute, getV1TablesRouteHandler)
  .openapi(getV1TablesIdTemplateRoute, getV1TablesIdTemplateRouteHandler)
  .openapi(getV1TablesCountRoute, getV1TablesCountRouteHandler)
  .openapi(getV1TablesIdExportRoute, getV1TablesIdExportRouteHandler)
  .openapi(postV1TablesIdWebhooksRoute, postV1TablesIdWebhooksRouteHandler)
  .openapi(deleteV1TablesIdWebhooksWebhookIdRoute, deleteV1TablesIdWebhooksWebhookIdRouteHandler)
  .openapi(postV1TablesIdClearRoute, postV1TablesIdClearRouteHandler)
  .openapi(postV1RecordsIdRoute, postV1RecordsIdRouteHandler)
  .openapi(deleteV1RecordsRoute, deleteV1RecordsRouteHandler)
  .openapi(getV1RecordsRoute, getV1RecordsRouteHandler)
  .openapi(postV1KnowledgeBaseFilesRoute, postV1KnowledgeBaseFilesRouteHandler)
  .openapi(getV1KnowledgeBaseFilesRoute, getV1KnowledgeBaseFilesRouteHandler)
  .openapi(postV1KnowledgeBaseFilesUploadRoute, postV1KnowledgeBaseFilesUploadRouteHandler)
  .openapi(deleteV1KnowledgeBaseFilesIdRoute, deleteV1KnowledgeBaseFilesIdRouteHandler)
  .openapi(
    getV1KnowledgeBaseFilesIdChunksCountRoute,
    getV1KnowledgeBaseFilesIdChunksCountRouteHandler,
  )
  .openapi(
    postV1KnowledgeBaseFilesIdExtractChunksRoute,
    postV1KnowledgeBaseFilesIdExtractChunksRouteHandler,
  )
  .openapi(
    postV1KnowledgeBaseFilesIdStoreChunksRoute,
    postV1KnowledgeBaseFilesIdStoreChunksRouteHandler,
  )
  .openapi(getV1KnowledgeBaseFilesIdChunksRoute, getV1KnowledgeBaseFilesIdChunksRouteHandler)
  .openapi(postV1KnowledgeBaseFilesSearchRoute, postV1KnowledgeBaseFilesSearchRouteHandler)
  .openapi(getV1TemplatesIdRoute, getV1TemplatesIdRouteHandler)
  .openapi(postV1TemplatesIdRoute, postV1TemplatesIdRouteHandler)
  .openapi(deleteV1TemplatesIdRoute, deleteV1TemplatesIdRouteHandler)
  .openapi(getV1TemplatesCategoriesRoute, getV1TemplatesCategoriesRouteHandler)
  .openapi(getV1TemplatesRoute, getV1TemplatesRouteHandler)
  .openapi(postV1TemplatesRoute, postV1TemplatesRouteHandler)
  .openapi(postV1ProjectsRoute, postV1ProjectsRouteHandler)
  .openapi(getV1ProjectsRoute, getV1ProjectsRouteHandler)
  .openapi(postV1ProjectsIdRoute, postV1ProjectsIdRouteHandler)
  .openapi(deleteV1ProjectsIdRoute, deleteV1ProjectsIdRouteHandler)
  .openapi(getV1ProjectMembersRoute, getV1ProjectMembersRouteHandler)
  .openapi(deleteV1ProjectMembersIdRoute, deleteV1ProjectMembersIdRouteHandler)
  .openapi(postV1PiecesRoute, postV1PiecesRouteHandler)
  .openapi(postV1GitReposRoute, postV1GitReposRouteHandler)
  .openapi(getV1EventDestinationsRoute, getV1EventDestinationsRouteHandler)
  .openapi(getV1ProjectRolesIdProjectMembersRoute, getV1ProjectRolesIdProjectMembersRouteHandler)
  .openapi(postV1ProjectReleasesRoute, postV1ProjectReleasesRouteHandler)
  .openapi(postV1GlobalConnectionsRoute, postV1GlobalConnectionsRouteHandler)
  .openapi(getV1GlobalConnectionsRoute, getV1GlobalConnectionsRouteHandler)
  .openapi(postV1GlobalConnectionsIdRoute, postV1GlobalConnectionsIdRouteHandler)
  .openapi(deleteV1GlobalConnectionsIdRoute, deleteV1GlobalConnectionsIdRouteHandler)
  .openapi(
    postV1EmbedSubdomainAllowedEmbedOriginsRoute,
    postV1EmbedSubdomainAllowedEmbedOriginsRouteHandler,
  )
  .openapi(postV1AgentsConversationsRoute, postV1AgentsConversationsRouteHandler)
  .openapi(getV1AgentsConversationsRoute, getV1AgentsConversationsRouteHandler)
  .openapi(getV1AgentsConversationsIdRoute, getV1AgentsConversationsIdRouteHandler)
  .openapi(postV1AgentsConversationsIdRoute, postV1AgentsConversationsIdRouteHandler)
  .openapi(deleteV1AgentsConversationsIdRoute, deleteV1AgentsConversationsIdRouteHandler)
  .openapi(getV1AgentsConversationsIdMessagesRoute, getV1AgentsConversationsIdMessagesRouteHandler)
  .openapi(
    postV1AgentsConversationsIdMessagesRoute,
    postV1AgentsConversationsIdMessagesRouteHandler,
  )
  .openapi(postV1AgentsToolApprovalsGateIdRoute, postV1AgentsToolApprovalsGateIdRouteHandler)
  .openapi(postV1PlatformConfigurationsRoute, postV1PlatformConfigurationsRouteHandler)
  .openapi(getV1AiProvidersConfigsRoute, getV1AiProvidersConfigsRouteHandler)
  .openapi(getV1AiProvidersConfigsIdModelsRoute, getV1AiProvidersConfigsIdModelsRouteHandler)
  .openapi(
    getV1AiProvidersConfigsIdSuggestedModelsRoute,
    getV1AiProvidersConfigsIdSuggestedModelsRouteHandler,
  )
  .openapi(
    getV1AiProvidersModelOptionsPlatformRoute,
    getV1AiProvidersModelOptionsPlatformRouteHandler,
  )
  .openapi(postV1AiProvidersRoute, postV1AiProvidersRouteHandler)
  .openapi(postV1AiProvidersIdRecheckRoute, postV1AiProvidersIdRecheckRouteHandler)
  .openapi(postV1AiProvidersIdRoute, postV1AiProvidersIdRouteHandler)
  .openapi(deleteV1AiProvidersIdRoute, deleteV1AiProvidersIdRouteHandler)
  .openapi(getV1PlatformModelTiersAdminRoute, getV1PlatformModelTiersAdminRouteHandler)
  .openapi(postV1PlatformModelTiersRoute, postV1PlatformModelTiersRouteHandler)
  .openapi(postV1PlatformModelTiersReorderRoute, postV1PlatformModelTiersReorderRouteHandler)
  .openapi(postV1PlatformModelTiersIdRoute, postV1PlatformModelTiersIdRouteHandler)
  .openapi(deleteV1PlatformModelTiersIdRoute, deleteV1PlatformModelTiersIdRouteHandler)
  .openapi(getV1AiToolsRoute, getV1AiToolsRouteHandler)
  .openapi(postV1AiToolsRoute, postV1AiToolsRouteHandler)
  .openapi(postV1AiToolsIdRoute, postV1AiToolsIdRouteHandler)
  .openapi(deleteV1AiToolsIdRoute, deleteV1AiToolsIdRouteHandler)
  .openapi(getV1AiUsageOverviewRoute, getV1AiUsageOverviewRouteHandler)
  .openapi(getV1AiUsageItemsRoute, getV1AiUsageItemsRouteHandler)
  .openapi(getV1AiUsageItemsDimensionIdRoute, getV1AiUsageItemsDimensionIdRouteHandler)

export default app

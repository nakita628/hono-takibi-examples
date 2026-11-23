import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FilesFileKeyCommentsCommentIdReactionsRoute,
  deleteV1FilesFileKeyCommentsCommentIdRoute,
  deleteV1FilesFileKeyDevResourcesDevResourceIdRoute,
  deleteV2WebhooksWebhookIdRoute,
  getV1ActivityLogsRoute,
  getV1AiUsageDailyRoute,
  getV1AnalyticsLibrariesFileKeyComponentActionsRoute,
  getV1AnalyticsLibrariesFileKeyComponentUsagesRoute,
  getV1AnalyticsLibrariesFileKeyStyleActionsRoute,
  getV1AnalyticsLibrariesFileKeyStyleUsagesRoute,
  getV1AnalyticsLibrariesFileKeyVariableActionsRoute,
  getV1AnalyticsLibrariesFileKeyVariableUsagesRoute,
  getV1ComponentSetsKeyRoute,
  getV1ComponentsKeyRoute,
  getV1FilesFileKeyCommentsCommentIdReactionsRoute,
  getV1FilesFileKeyCommentsRoute,
  getV1FilesFileKeyComponentSetsRoute,
  getV1FilesFileKeyComponentsRoute,
  getV1FilesFileKeyDevResourcesRoute,
  getV1FilesFileKeyImagesRoute,
  getV1FilesFileKeyMetaRoute,
  getV1FilesFileKeyNodesRoute,
  getV1FilesFileKeyRoute,
  getV1FilesFileKeyStylesRoute,
  getV1FilesFileKeyVariablesLocalRoute,
  getV1FilesFileKeyVariablesPublishedRoute,
  getV1FilesFileKeyVersionsRoute,
  getV1ImagesFileKeyRoute,
  getV1MeRoute,
  getV1OembedRoute,
  getV1PaymentsRoute,
  getV1ProjectsProjectIdFilesRoute,
  getV1ProjectsProjectIdMetaRoute,
  getV1StylesKeyRoute,
  getV1TeamsTeamIdComponentSetsRoute,
  getV1TeamsTeamIdComponentsRoute,
  getV1TeamsTeamIdProjectsRoute,
  getV1TeamsTeamIdRoute,
  getV1TeamsTeamIdStylesRoute,
  getV2FoldersFolderIdFilesRoute,
  getV2FoldersFolderIdFoldersRoute,
  getV2FoldersFolderIdMetaRoute,
  getV2TeamsTeamIdFoldersRoute,
  getV2TeamsTeamIdWebhooksRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRequestsRoute,
  getV2WebhooksWebhookIdRoute,
  postV1DeveloperLogsRoute,
  postV1DevResourcesRoute,
  postV1FilesFileKeyCommentsCommentIdReactionsRoute,
  postV1FilesFileKeyCommentsRoute,
  postV1FilesFileKeyDuplicateRoute,
  postV1FilesFileKeyVariablesRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdFoldersRoute,
  postV1TeamsTeamIdInvitesRoute,
  postV2WebhooksRoute,
  putV1DevResourcesRoute,
  putV2WebhooksWebhookIdRoute,
} from './routes'
import {
  deleteV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  deleteV1FilesFileKeyCommentsCommentIdRouteHandler,
  deleteV1FilesFileKeyDevResourcesDevResourceIdRouteHandler,
  deleteV2WebhooksWebhookIdRouteHandler,
  getV1ActivityLogsRouteHandler,
  getV1AiUsageDailyRouteHandler,
  getV1AnalyticsLibrariesFileKeyComponentActionsRouteHandler,
  getV1AnalyticsLibrariesFileKeyComponentUsagesRouteHandler,
  getV1AnalyticsLibrariesFileKeyStyleActionsRouteHandler,
  getV1AnalyticsLibrariesFileKeyStyleUsagesRouteHandler,
  getV1AnalyticsLibrariesFileKeyVariableActionsRouteHandler,
  getV1AnalyticsLibrariesFileKeyVariableUsagesRouteHandler,
  getV1ComponentSetsKeyRouteHandler,
  getV1ComponentsKeyRouteHandler,
  getV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  getV1FilesFileKeyCommentsRouteHandler,
  getV1FilesFileKeyComponentSetsRouteHandler,
  getV1FilesFileKeyComponentsRouteHandler,
  getV1FilesFileKeyDevResourcesRouteHandler,
  getV1FilesFileKeyImagesRouteHandler,
  getV1FilesFileKeyMetaRouteHandler,
  getV1FilesFileKeyNodesRouteHandler,
  getV1FilesFileKeyRouteHandler,
  getV1FilesFileKeyStylesRouteHandler,
  getV1FilesFileKeyVariablesLocalRouteHandler,
  getV1FilesFileKeyVariablesPublishedRouteHandler,
  getV1FilesFileKeyVersionsRouteHandler,
  getV1ImagesFileKeyRouteHandler,
  getV1MeRouteHandler,
  getV1OembedRouteHandler,
  getV1PaymentsRouteHandler,
  getV1ProjectsProjectIdFilesRouteHandler,
  getV1ProjectsProjectIdMetaRouteHandler,
  getV1StylesKeyRouteHandler,
  getV1TeamsTeamIdComponentSetsRouteHandler,
  getV1TeamsTeamIdComponentsRouteHandler,
  getV1TeamsTeamIdProjectsRouteHandler,
  getV1TeamsTeamIdRouteHandler,
  getV1TeamsTeamIdStylesRouteHandler,
  getV2FoldersFolderIdFilesRouteHandler,
  getV2FoldersFolderIdFoldersRouteHandler,
  getV2FoldersFolderIdMetaRouteHandler,
  getV2TeamsTeamIdFoldersRouteHandler,
  getV2TeamsTeamIdWebhooksRouteHandler,
  getV2WebhooksRouteHandler,
  getV2WebhooksWebhookIdRequestsRouteHandler,
  getV2WebhooksWebhookIdRouteHandler,
  postV1DeveloperLogsRouteHandler,
  postV1DevResourcesRouteHandler,
  postV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  postV1FilesFileKeyCommentsRouteHandler,
  postV1FilesFileKeyDuplicateRouteHandler,
  postV1FilesFileKeyVariablesRouteHandler,
  postV1TeamsRouteHandler,
  postV1TeamsTeamIdFoldersRouteHandler,
  postV1TeamsTeamIdInvitesRouteHandler,
  postV2WebhooksRouteHandler,
  putV1DevResourcesRouteHandler,
  putV2WebhooksWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1FilesFileKeyRoute, getV1FilesFileKeyRouteHandler)
  .openapi(getV1FilesFileKeyNodesRoute, getV1FilesFileKeyNodesRouteHandler)
  .openapi(getV1ImagesFileKeyRoute, getV1ImagesFileKeyRouteHandler)
  .openapi(getV1FilesFileKeyImagesRoute, getV1FilesFileKeyImagesRouteHandler)
  .openapi(getV1FilesFileKeyMetaRoute, getV1FilesFileKeyMetaRouteHandler)
  .openapi(postV1FilesFileKeyDuplicateRoute, postV1FilesFileKeyDuplicateRouteHandler)
  .openapi(postV1TeamsRoute, postV1TeamsRouteHandler)
  .openapi(getV1TeamsTeamIdRoute, getV1TeamsTeamIdRouteHandler)
  .openapi(postV1TeamsTeamIdInvitesRoute, postV1TeamsTeamIdInvitesRouteHandler)
  .openapi(getV1TeamsTeamIdProjectsRoute, getV1TeamsTeamIdProjectsRouteHandler)
  .openapi(getV1ProjectsProjectIdMetaRoute, getV1ProjectsProjectIdMetaRouteHandler)
  .openapi(getV1ProjectsProjectIdFilesRoute, getV1ProjectsProjectIdFilesRouteHandler)
  .openapi(postV1TeamsTeamIdFoldersRoute, postV1TeamsTeamIdFoldersRouteHandler)
  .openapi(getV2TeamsTeamIdFoldersRoute, getV2TeamsTeamIdFoldersRouteHandler)
  .openapi(getV2FoldersFolderIdFoldersRoute, getV2FoldersFolderIdFoldersRouteHandler)
  .openapi(getV2FoldersFolderIdFilesRoute, getV2FoldersFolderIdFilesRouteHandler)
  .openapi(getV2FoldersFolderIdMetaRoute, getV2FoldersFolderIdMetaRouteHandler)
  .openapi(getV1FilesFileKeyVersionsRoute, getV1FilesFileKeyVersionsRouteHandler)
  .openapi(getV1FilesFileKeyCommentsRoute, getV1FilesFileKeyCommentsRouteHandler)
  .openapi(postV1FilesFileKeyCommentsRoute, postV1FilesFileKeyCommentsRouteHandler)
  .openapi(
    deleteV1FilesFileKeyCommentsCommentIdRoute,
    deleteV1FilesFileKeyCommentsCommentIdRouteHandler,
  )
  .openapi(
    getV1FilesFileKeyCommentsCommentIdReactionsRoute,
    getV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  )
  .openapi(
    postV1FilesFileKeyCommentsCommentIdReactionsRoute,
    postV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  )
  .openapi(
    deleteV1FilesFileKeyCommentsCommentIdReactionsRoute,
    deleteV1FilesFileKeyCommentsCommentIdReactionsRouteHandler,
  )
  .openapi(getV1MeRoute, getV1MeRouteHandler)
  .openapi(getV1TeamsTeamIdComponentsRoute, getV1TeamsTeamIdComponentsRouteHandler)
  .openapi(getV1FilesFileKeyComponentsRoute, getV1FilesFileKeyComponentsRouteHandler)
  .openapi(getV1ComponentsKeyRoute, getV1ComponentsKeyRouteHandler)
  .openapi(getV1TeamsTeamIdComponentSetsRoute, getV1TeamsTeamIdComponentSetsRouteHandler)
  .openapi(getV1FilesFileKeyComponentSetsRoute, getV1FilesFileKeyComponentSetsRouteHandler)
  .openapi(getV1ComponentSetsKeyRoute, getV1ComponentSetsKeyRouteHandler)
  .openapi(getV1TeamsTeamIdStylesRoute, getV1TeamsTeamIdStylesRouteHandler)
  .openapi(getV1FilesFileKeyStylesRoute, getV1FilesFileKeyStylesRouteHandler)
  .openapi(getV1StylesKeyRoute, getV1StylesKeyRouteHandler)
  .openapi(getV2WebhooksRoute, getV2WebhooksRouteHandler)
  .openapi(postV2WebhooksRoute, postV2WebhooksRouteHandler)
  .openapi(getV2WebhooksWebhookIdRoute, getV2WebhooksWebhookIdRouteHandler)
  .openapi(putV2WebhooksWebhookIdRoute, putV2WebhooksWebhookIdRouteHandler)
  .openapi(deleteV2WebhooksWebhookIdRoute, deleteV2WebhooksWebhookIdRouteHandler)
  .openapi(getV2TeamsTeamIdWebhooksRoute, getV2TeamsTeamIdWebhooksRouteHandler)
  .openapi(getV2WebhooksWebhookIdRequestsRoute, getV2WebhooksWebhookIdRequestsRouteHandler)
  .openapi(getV1ActivityLogsRoute, getV1ActivityLogsRouteHandler)
  .openapi(postV1DeveloperLogsRoute, postV1DeveloperLogsRouteHandler)
  .openapi(getV1AiUsageDailyRoute, getV1AiUsageDailyRouteHandler)
  .openapi(getV1PaymentsRoute, getV1PaymentsRouteHandler)
  .openapi(getV1FilesFileKeyVariablesLocalRoute, getV1FilesFileKeyVariablesLocalRouteHandler)
  .openapi(
    getV1FilesFileKeyVariablesPublishedRoute,
    getV1FilesFileKeyVariablesPublishedRouteHandler,
  )
  .openapi(postV1FilesFileKeyVariablesRoute, postV1FilesFileKeyVariablesRouteHandler)
  .openapi(getV1FilesFileKeyDevResourcesRoute, getV1FilesFileKeyDevResourcesRouteHandler)
  .openapi(postV1DevResourcesRoute, postV1DevResourcesRouteHandler)
  .openapi(putV1DevResourcesRoute, putV1DevResourcesRouteHandler)
  .openapi(
    deleteV1FilesFileKeyDevResourcesDevResourceIdRoute,
    deleteV1FilesFileKeyDevResourcesDevResourceIdRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyComponentActionsRoute,
    getV1AnalyticsLibrariesFileKeyComponentActionsRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyComponentUsagesRoute,
    getV1AnalyticsLibrariesFileKeyComponentUsagesRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyStyleActionsRoute,
    getV1AnalyticsLibrariesFileKeyStyleActionsRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyStyleUsagesRoute,
    getV1AnalyticsLibrariesFileKeyStyleUsagesRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyVariableActionsRoute,
    getV1AnalyticsLibrariesFileKeyVariableActionsRouteHandler,
  )
  .openapi(
    getV1AnalyticsLibrariesFileKeyVariableUsagesRoute,
    getV1AnalyticsLibrariesFileKeyVariableUsagesRouteHandler,
  )
  .openapi(getV1OembedRoute, getV1OembedRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FilesFileKeyCommentsCommentIdReactionsRoute,
  deleteV1FilesFileKeyCommentsCommentIdRoute,
  deleteV1FilesFileKeyDevResourcesDevResourceIdRoute,
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
  postV1DeveloperLogsRoute,
  postV1DevResourcesRoute,
  postV1FilesFileKeyCommentsCommentIdReactionsRoute,
  postV1FilesFileKeyCommentsRoute,
  postV1FilesFileKeyDuplicateRoute,
  postV1FilesFileKeyVariablesRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdFoldersRoute,
  postV1TeamsTeamIdInvitesRoute,
  putV1DevResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1FilesFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ComponentsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdComponentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyComponentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ComponentSetsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdStylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyStylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StylesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ActivityLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeveloperLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AiUsageDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyVariablesLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyVariablesPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyDevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyDevResourcesDevResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyComponentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyComponentUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyStyleActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyStyleUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyVariableActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyVariableUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OembedRoute, (c) => {
    throw new Error('Not implemented')
  })

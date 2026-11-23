import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagmanagerV2PathRoute,
  getTagmanagerV2AccountsContainersLookupRoute,
  getTagmanagerV2AccountsRoute,
  getTagmanagerV2ParentBuiltInVariablesRoute,
  getTagmanagerV2ParentClientsRoute,
  getTagmanagerV2ParentContainersRoute,
  getTagmanagerV2ParentDestinationsRoute,
  getTagmanagerV2ParentEnvironmentsRoute,
  getTagmanagerV2ParentFoldersRoute,
  getTagmanagerV2ParentGtagConfigRoute,
  getTagmanagerV2ParentTagsRoute,
  getTagmanagerV2ParentTemplatesRoute,
  getTagmanagerV2ParentTriggersRoute,
  getTagmanagerV2ParentUserPermissionsRoute,
  getTagmanagerV2ParentVariablesRoute,
  getTagmanagerV2ParentVersionHeadersLatestRoute,
  getTagmanagerV2ParentVersionHeadersRoute,
  getTagmanagerV2ParentVersionsLiveRoute,
  getTagmanagerV2ParentWorkspacesRoute,
  getTagmanagerV2ParentZonesRoute,
  getTagmanagerV2PathRoute,
  getTagmanagerV2PathSnippetRoute,
  getTagmanagerV2PathStatusRoute,
  postTagmanagerV2ParentBuiltInVariablesRoute,
  postTagmanagerV2ParentClientsRoute,
  postTagmanagerV2ParentContainersRoute,
  postTagmanagerV2ParentDestinationsLinkRoute,
  postTagmanagerV2ParentEnvironmentsRoute,
  postTagmanagerV2ParentFoldersRoute,
  postTagmanagerV2ParentGtagConfigRoute,
  postTagmanagerV2ParentTagsRoute,
  postTagmanagerV2ParentTemplatesRoute,
  postTagmanagerV2ParentTriggersRoute,
  postTagmanagerV2ParentUserPermissionsRoute,
  postTagmanagerV2ParentVariablesRoute,
  postTagmanagerV2ParentWorkspacesRoute,
  postTagmanagerV2ParentZonesRoute,
  postTagmanagerV2PathBuiltInVariablesRevertRoute,
  postTagmanagerV2PathCombineRoute,
  postTagmanagerV2PathCreateVersionRoute,
  postTagmanagerV2PathEntitiesRoute,
  postTagmanagerV2PathMoveEntitiesToFolderRoute,
  postTagmanagerV2PathMoveTagIdRoute,
  postTagmanagerV2PathPublishRoute,
  postTagmanagerV2PathQuickPreviewRoute,
  postTagmanagerV2PathReauthorizeRoute,
  postTagmanagerV2PathResolveConflictRoute,
  postTagmanagerV2PathRevertRoute,
  postTagmanagerV2PathSetLatestRoute,
  postTagmanagerV2PathSyncRoute,
  postTagmanagerV2PathUndeleteRoute,
  putTagmanagerV2PathRoute,
} from './routes'
import {
  deleteTagmanagerV2PathRouteHandler,
  getTagmanagerV2AccountsContainersLookupRouteHandler,
  getTagmanagerV2AccountsRouteHandler,
  getTagmanagerV2ParentBuiltInVariablesRouteHandler,
  getTagmanagerV2ParentClientsRouteHandler,
  getTagmanagerV2ParentContainersRouteHandler,
  getTagmanagerV2ParentDestinationsRouteHandler,
  getTagmanagerV2ParentEnvironmentsRouteHandler,
  getTagmanagerV2ParentFoldersRouteHandler,
  getTagmanagerV2ParentGtagConfigRouteHandler,
  getTagmanagerV2ParentTagsRouteHandler,
  getTagmanagerV2ParentTemplatesRouteHandler,
  getTagmanagerV2ParentTriggersRouteHandler,
  getTagmanagerV2ParentUserPermissionsRouteHandler,
  getTagmanagerV2ParentVariablesRouteHandler,
  getTagmanagerV2ParentVersionHeadersLatestRouteHandler,
  getTagmanagerV2ParentVersionHeadersRouteHandler,
  getTagmanagerV2ParentVersionsLiveRouteHandler,
  getTagmanagerV2ParentWorkspacesRouteHandler,
  getTagmanagerV2ParentZonesRouteHandler,
  getTagmanagerV2PathRouteHandler,
  getTagmanagerV2PathSnippetRouteHandler,
  getTagmanagerV2PathStatusRouteHandler,
  postTagmanagerV2ParentBuiltInVariablesRouteHandler,
  postTagmanagerV2ParentClientsRouteHandler,
  postTagmanagerV2ParentContainersRouteHandler,
  postTagmanagerV2ParentDestinationsLinkRouteHandler,
  postTagmanagerV2ParentEnvironmentsRouteHandler,
  postTagmanagerV2ParentFoldersRouteHandler,
  postTagmanagerV2ParentGtagConfigRouteHandler,
  postTagmanagerV2ParentTagsRouteHandler,
  postTagmanagerV2ParentTemplatesRouteHandler,
  postTagmanagerV2ParentTriggersRouteHandler,
  postTagmanagerV2ParentUserPermissionsRouteHandler,
  postTagmanagerV2ParentVariablesRouteHandler,
  postTagmanagerV2ParentWorkspacesRouteHandler,
  postTagmanagerV2ParentZonesRouteHandler,
  postTagmanagerV2PathBuiltInVariablesRevertRouteHandler,
  postTagmanagerV2PathCombineRouteHandler,
  postTagmanagerV2PathCreateVersionRouteHandler,
  postTagmanagerV2PathEntitiesRouteHandler,
  postTagmanagerV2PathMoveEntitiesToFolderRouteHandler,
  postTagmanagerV2PathMoveTagIdRouteHandler,
  postTagmanagerV2PathPublishRouteHandler,
  postTagmanagerV2PathQuickPreviewRouteHandler,
  postTagmanagerV2PathReauthorizeRouteHandler,
  postTagmanagerV2PathResolveConflictRouteHandler,
  postTagmanagerV2PathRevertRouteHandler,
  postTagmanagerV2PathSetLatestRouteHandler,
  postTagmanagerV2PathSyncRouteHandler,
  postTagmanagerV2PathUndeleteRouteHandler,
  putTagmanagerV2PathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTagmanagerV2AccountsRoute, getTagmanagerV2AccountsRouteHandler)
  .openapi(
    getTagmanagerV2AccountsContainersLookupRoute,
    getTagmanagerV2AccountsContainersLookupRouteHandler,
  )
  .openapi(
    getTagmanagerV2ParentBuiltInVariablesRoute,
    getTagmanagerV2ParentBuiltInVariablesRouteHandler,
  )
  .openapi(
    postTagmanagerV2ParentBuiltInVariablesRoute,
    postTagmanagerV2ParentBuiltInVariablesRouteHandler,
  )
  .openapi(getTagmanagerV2ParentClientsRoute, getTagmanagerV2ParentClientsRouteHandler)
  .openapi(postTagmanagerV2ParentClientsRoute, postTagmanagerV2ParentClientsRouteHandler)
  .openapi(getTagmanagerV2ParentContainersRoute, getTagmanagerV2ParentContainersRouteHandler)
  .openapi(postTagmanagerV2ParentContainersRoute, postTagmanagerV2ParentContainersRouteHandler)
  .openapi(getTagmanagerV2ParentDestinationsRoute, getTagmanagerV2ParentDestinationsRouteHandler)
  .openapi(
    postTagmanagerV2ParentDestinationsLinkRoute,
    postTagmanagerV2ParentDestinationsLinkRouteHandler,
  )
  .openapi(getTagmanagerV2ParentEnvironmentsRoute, getTagmanagerV2ParentEnvironmentsRouteHandler)
  .openapi(postTagmanagerV2ParentEnvironmentsRoute, postTagmanagerV2ParentEnvironmentsRouteHandler)
  .openapi(getTagmanagerV2ParentFoldersRoute, getTagmanagerV2ParentFoldersRouteHandler)
  .openapi(postTagmanagerV2ParentFoldersRoute, postTagmanagerV2ParentFoldersRouteHandler)
  .openapi(getTagmanagerV2ParentGtagConfigRoute, getTagmanagerV2ParentGtagConfigRouteHandler)
  .openapi(postTagmanagerV2ParentGtagConfigRoute, postTagmanagerV2ParentGtagConfigRouteHandler)
  .openapi(getTagmanagerV2ParentTagsRoute, getTagmanagerV2ParentTagsRouteHandler)
  .openapi(postTagmanagerV2ParentTagsRoute, postTagmanagerV2ParentTagsRouteHandler)
  .openapi(getTagmanagerV2ParentTemplatesRoute, getTagmanagerV2ParentTemplatesRouteHandler)
  .openapi(postTagmanagerV2ParentTemplatesRoute, postTagmanagerV2ParentTemplatesRouteHandler)
  .openapi(getTagmanagerV2ParentTriggersRoute, getTagmanagerV2ParentTriggersRouteHandler)
  .openapi(postTagmanagerV2ParentTriggersRoute, postTagmanagerV2ParentTriggersRouteHandler)
  .openapi(
    getTagmanagerV2ParentUserPermissionsRoute,
    getTagmanagerV2ParentUserPermissionsRouteHandler,
  )
  .openapi(
    postTagmanagerV2ParentUserPermissionsRoute,
    postTagmanagerV2ParentUserPermissionsRouteHandler,
  )
  .openapi(getTagmanagerV2ParentVariablesRoute, getTagmanagerV2ParentVariablesRouteHandler)
  .openapi(postTagmanagerV2ParentVariablesRoute, postTagmanagerV2ParentVariablesRouteHandler)
  .openapi(
    getTagmanagerV2ParentVersionHeadersRoute,
    getTagmanagerV2ParentVersionHeadersRouteHandler,
  )
  .openapi(
    getTagmanagerV2ParentVersionHeadersLatestRoute,
    getTagmanagerV2ParentVersionHeadersLatestRouteHandler,
  )
  .openapi(getTagmanagerV2ParentVersionsLiveRoute, getTagmanagerV2ParentVersionsLiveRouteHandler)
  .openapi(getTagmanagerV2ParentWorkspacesRoute, getTagmanagerV2ParentWorkspacesRouteHandler)
  .openapi(postTagmanagerV2ParentWorkspacesRoute, postTagmanagerV2ParentWorkspacesRouteHandler)
  .openapi(getTagmanagerV2ParentZonesRoute, getTagmanagerV2ParentZonesRouteHandler)
  .openapi(postTagmanagerV2ParentZonesRoute, postTagmanagerV2ParentZonesRouteHandler)
  .openapi(deleteTagmanagerV2PathRoute, deleteTagmanagerV2PathRouteHandler)
  .openapi(getTagmanagerV2PathRoute, getTagmanagerV2PathRouteHandler)
  .openapi(putTagmanagerV2PathRoute, putTagmanagerV2PathRouteHandler)
  .openapi(
    postTagmanagerV2PathBuiltInVariablesRevertRoute,
    postTagmanagerV2PathBuiltInVariablesRevertRouteHandler,
  )
  .openapi(getTagmanagerV2PathStatusRoute, getTagmanagerV2PathStatusRouteHandler)
  .openapi(postTagmanagerV2PathCombineRoute, postTagmanagerV2PathCombineRouteHandler)
  .openapi(postTagmanagerV2PathCreateVersionRoute, postTagmanagerV2PathCreateVersionRouteHandler)
  .openapi(postTagmanagerV2PathEntitiesRoute, postTagmanagerV2PathEntitiesRouteHandler)
  .openapi(
    postTagmanagerV2PathMoveEntitiesToFolderRoute,
    postTagmanagerV2PathMoveEntitiesToFolderRouteHandler,
  )
  .openapi(postTagmanagerV2PathMoveTagIdRoute, postTagmanagerV2PathMoveTagIdRouteHandler)
  .openapi(postTagmanagerV2PathPublishRoute, postTagmanagerV2PathPublishRouteHandler)
  .openapi(postTagmanagerV2PathQuickPreviewRoute, postTagmanagerV2PathQuickPreviewRouteHandler)
  .openapi(postTagmanagerV2PathReauthorizeRoute, postTagmanagerV2PathReauthorizeRouteHandler)
  .openapi(
    postTagmanagerV2PathResolveConflictRoute,
    postTagmanagerV2PathResolveConflictRouteHandler,
  )
  .openapi(postTagmanagerV2PathRevertRoute, postTagmanagerV2PathRevertRouteHandler)
  .openapi(postTagmanagerV2PathSetLatestRoute, postTagmanagerV2PathSetLatestRouteHandler)
  .openapi(getTagmanagerV2PathSnippetRoute, getTagmanagerV2PathSnippetRouteHandler)
  .openapi(postTagmanagerV2PathSyncRoute, postTagmanagerV2PathSyncRouteHandler)
  .openapi(postTagmanagerV2PathUndeleteRoute, postTagmanagerV2PathUndeleteRouteHandler)

export default app

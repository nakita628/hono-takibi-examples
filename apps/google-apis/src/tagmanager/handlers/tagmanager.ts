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
} from '../routes'

const app = new OpenAPIHono()

export const tagmanagerHandler = app
  .openapi(getTagmanagerV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2AccountsContainersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentBuiltInVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentBuiltInVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentDestinationsLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentGtagConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentGtagConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentUserPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentUserPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentVersionHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentVersionHeadersLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentVersionsLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2ParentZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2ParentZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagmanagerV2PathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2PathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagmanagerV2PathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathBuiltInVariablesRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2PathStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathCombineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathCreateVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathMoveEntitiesToFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathMoveTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathQuickPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathResolveConflictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathSetLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagmanagerV2PathSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagmanagerV2PathUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })

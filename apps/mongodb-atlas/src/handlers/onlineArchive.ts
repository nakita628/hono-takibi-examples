import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesQueryLogsGzRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onlineArchiveHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesQueryLogsGzRoute, (c) => {
    throw new Error('Not implemented')
  })

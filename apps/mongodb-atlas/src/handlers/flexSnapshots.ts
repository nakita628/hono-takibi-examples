import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshotsRoute,
  getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshotsSnapshotIdRoute,
  postApiAtlasV2GroupsGroupIdFlexClustersNameBackupDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flexSnapshotsHandler = app
  .openapi(postApiAtlasV2GroupsGroupIdFlexClustersNameBackupDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })

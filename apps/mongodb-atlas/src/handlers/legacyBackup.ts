import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpointsCheckpointIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpointsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsJobIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotScheduleRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotScheduleRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legacyBackupHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpointsCheckpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })

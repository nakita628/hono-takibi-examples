import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRestoreJobIdRoute,
  getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRoute,
  postApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flexRestoreJobsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRestoreJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  deleteDirectoryRecoveryRoute,
  deleteDirectoryRecoverySnapshotsSnapshotIdRoute,
  getDirectoryRecoveryJobsCountRoute,
  getDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  getDirectoryRecoveryJobsRoute,
  getDirectoryRecoveryRoute,
  getDirectoryRecoverySnapshotsCountRoute,
  getDirectoryRecoverySnapshotsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsCountRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRecoveryJobIdRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsCountRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRecoveryPreviewJobIdRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRoute,
  getDirectoryRecoverySnapshotsSnapshotIdRoute,
  patchDirectoryRecoveryJobsRecoveryJobBaseIdRoute,
  patchDirectoryRecoveryRoute,
  patchDirectoryRecoverySnapshotsSnapshotIdRoute,
  postDirectoryRecoveryJobsRecoveryJobBaseIdMicrosoftGraphEntraRecoveryServicesCancelRoute,
  postDirectoryRecoveryJobsRoute,
  postDirectoryRecoverySnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRecoveryHandler = app
  .openapi(getDirectoryRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoveryJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRecoveryJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoveryJobsRecoveryJobBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRecoveryJobsRecoveryJobBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRecoveryJobsRecoveryJobBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDirectoryRecoveryJobsRecoveryJobBaseIdMicrosoftGraphEntraRecoveryServicesCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRecoveryJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRecoverySnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRecoverySnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRecoverySnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsRecoveryJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRecoveryJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsRecoveryPreviewJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRecoverySnapshotsSnapshotIdRecoveryPreviewJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRecoverySnapshotsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

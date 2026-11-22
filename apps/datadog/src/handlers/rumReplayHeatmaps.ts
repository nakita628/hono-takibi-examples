import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ReplayHeatmapSnapshotsSnapshotIdRoute,
  getApiV2ReplayHeatmapSnapshotsRoute,
  patchApiV2ReplayHeatmapSnapshotsSnapshotIdRoute,
  postApiV2ReplayHeatmapSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumReplayHeatmapsHandler = app
  .openapi(getApiV2ReplayHeatmapSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReplayHeatmapSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReplayHeatmapSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ReplayHeatmapSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })

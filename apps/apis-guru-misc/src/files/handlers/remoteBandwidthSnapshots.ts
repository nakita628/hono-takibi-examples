import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemoteBandwidthSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const remoteBandwidthSnapshotsHandler = app.openapi(
  getRemoteBandwidthSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

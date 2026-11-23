import { OpenAPIHono } from '@hono/zod-openapi'
import { getBandwidthSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const bandwidthSnapshotsHandler = app.openapi(getBandwidthSnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})

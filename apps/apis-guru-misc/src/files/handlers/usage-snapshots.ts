import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageSnapshotsHandler = app.openapi(getUsageSnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})

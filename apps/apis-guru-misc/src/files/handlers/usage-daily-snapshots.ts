import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageDailySnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageDailySnapshotsHandler = app.openapi(getUsageDailySnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})

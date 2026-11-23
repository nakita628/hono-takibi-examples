import { OpenAPIHono } from '@hono/zod-openapi'
import { getDashboardSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardHandler = app.openapi(getDashboardSnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})

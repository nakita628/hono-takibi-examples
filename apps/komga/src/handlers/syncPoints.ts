import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1SyncpointsMeRoute } from '../routes'

const app = new OpenAPIHono()

export const syncPointsHandler = app.openapi(deleteApiV1SyncpointsMeRoute, (c) => {
  throw new Error('Not implemented')
})

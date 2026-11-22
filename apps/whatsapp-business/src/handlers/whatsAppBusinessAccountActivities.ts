import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWABAIDActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessAccountActivitiesHandler = app.openapi(
  getVersionWABAIDActivitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

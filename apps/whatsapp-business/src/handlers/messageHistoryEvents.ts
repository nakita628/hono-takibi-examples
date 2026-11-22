import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionMessageHistoryIDEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const messageHistoryEventsHandler = app.openapi(
  getVersionMessageHistoryIDEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWABAIDInProgressOnbehalfRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessAccountOnBehalfRequestsHandler = app.openapi(
  getVersionWABAIDInProgressOnbehalfRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

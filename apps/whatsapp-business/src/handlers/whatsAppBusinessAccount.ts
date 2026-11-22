import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWABAIDRoute, postVersionWABAIDRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessAccountHandler = app
  .openapi(getVersionWABAIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDRoute, (c) => {
    throw new Error('Not implemented')
  })

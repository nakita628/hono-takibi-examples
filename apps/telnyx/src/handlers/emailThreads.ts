import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailThreadsRoute, getEmailThreadsThreadIdRoute } from '../routes'

const app = new OpenAPIHono()

export const emailThreadsHandler = app
  .openapi(getEmailThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })

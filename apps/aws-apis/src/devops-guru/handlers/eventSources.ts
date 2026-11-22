import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventSourcesRoute, putEventSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const eventSourcesHandler = app
  .openapi(postEventSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

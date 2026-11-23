import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueuesPlayMediaRoute, postQueuesUpdateActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(postQueuesPlayMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesUpdateActivityRoute, (c) => {
    throw new Error('Not implemented')
  })

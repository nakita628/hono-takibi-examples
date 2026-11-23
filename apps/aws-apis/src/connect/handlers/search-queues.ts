import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchQueuesHandler = app.openapi(postSearchQueuesRoute, (c) => {
  throw new Error('Not implemented')
})

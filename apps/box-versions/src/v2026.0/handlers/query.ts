import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryInsightsRoute, postQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })

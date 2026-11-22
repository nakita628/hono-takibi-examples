import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609CommunicationsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609CommunicationsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

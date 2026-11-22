import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609TicketsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609TicketsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609SubscriptionsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609SubscriptionsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

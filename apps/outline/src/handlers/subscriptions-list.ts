import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsListHandler = app.openapi(postSubscriptionsListRoute, (c) => {
  throw new Error('Not implemented')
})

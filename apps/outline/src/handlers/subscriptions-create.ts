import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsCreateHandler = app.openapi(postSubscriptionsCreateRoute, (c) => {
  throw new Error('Not implemented')
})

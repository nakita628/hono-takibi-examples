import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsDeleteHandler = app.openapi(postSubscriptionsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

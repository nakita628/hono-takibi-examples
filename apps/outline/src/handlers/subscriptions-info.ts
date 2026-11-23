import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsInfoHandler = app.openapi(postSubscriptionsInfoRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRecurringDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const listRecurringDetailsHandler = app.openapi(postListRecurringDetailsRoute, (c) => {
  throw new Error('Not implemented')
})

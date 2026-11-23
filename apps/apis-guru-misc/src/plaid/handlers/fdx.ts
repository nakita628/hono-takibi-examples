import { OpenAPIHono } from '@hono/zod-openapi'
import { postFdxNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const fdxHandler = app.openapi(postFdxNotificationsRoute, (c) => {
  throw new Error('Not implemented')
})

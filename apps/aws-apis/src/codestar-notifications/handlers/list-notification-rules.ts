import { OpenAPIHono } from '@hono/zod-openapi'
import { postListNotificationRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const listNotificationRulesHandler = app.openapi(postListNotificationRulesRoute, (c) => {
  throw new Error('Not implemented')
})

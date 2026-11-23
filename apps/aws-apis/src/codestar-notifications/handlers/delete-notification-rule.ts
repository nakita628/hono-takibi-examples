import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteNotificationRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteNotificationRuleHandler = app.openapi(postDeleteNotificationRuleRoute, (c) => {
  throw new Error('Not implemented')
})

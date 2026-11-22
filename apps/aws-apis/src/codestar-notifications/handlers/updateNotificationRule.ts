import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateNotificationRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const updateNotificationRuleHandler = app.openapi(postUpdateNotificationRuleRoute, (c) => {
  throw new Error('Not implemented')
})

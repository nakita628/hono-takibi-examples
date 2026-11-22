import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateNotificationRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const createNotificationRuleHandler = app.openapi(postCreateNotificationRuleRoute, (c) => {
  throw new Error('Not implemented')
})

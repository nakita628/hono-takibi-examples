import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationRulesRuleIDQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app.openapi(getNotificationRulesRuleIDQueryRoute, (c) => {
  throw new Error('Not implemented')
})

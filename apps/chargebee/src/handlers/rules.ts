import { OpenAPIHono } from '@hono/zod-openapi'
import { getRulesRuleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app.openapi(getRulesRuleIdRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postRuleTriggersRuleTriggerGidRunRoute } from '../routes'

const app = new OpenAPIHono()

export const ruleTriggersHandler = app.openapi(postRuleTriggersRuleTriggerGidRunRoute, (c) => {
  throw new Error('Not implemented')
})

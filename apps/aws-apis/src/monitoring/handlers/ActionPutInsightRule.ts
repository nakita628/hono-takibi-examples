import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutInsightRuleRoute, postActionPutInsightRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutInsightRuleHandler = app
  .openapi(getActionPutInsightRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutInsightRuleRoute, (c) => {
    throw new Error('Not implemented')
  })

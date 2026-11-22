import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisableInsightRulesRoute, postActionDisableInsightRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDisableInsightRulesHandler = app
  .openapi(getActionDisableInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })

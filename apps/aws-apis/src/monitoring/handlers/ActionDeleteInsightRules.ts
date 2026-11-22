import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteInsightRulesRoute, postActionDeleteInsightRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteInsightRulesHandler = app
  .openapi(getActionDeleteInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })

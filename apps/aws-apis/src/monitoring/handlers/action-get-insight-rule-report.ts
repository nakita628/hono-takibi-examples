import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetInsightRuleReportRoute, postActionGetInsightRuleReportRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetInsightRuleReportHandler = app
  .openapi(getActionGetInsightRuleReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetInsightRuleReportRoute, (c) => {
    throw new Error('Not implemented')
  })

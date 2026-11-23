import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableInsightRulesRoute, postActionEnableInsightRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableInsightRulesHandler = app
  .openapi(getActionEnableInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })

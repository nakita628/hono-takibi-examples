import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCaseTypeGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCaseTypeGroupHandler = app.openapi(
  getCaseCountAnalyticsByCaseTypeGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

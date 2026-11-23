import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCaseTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCaseTypeHandler = app.openapi(
  getCaseCountAnalyticsByCaseTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

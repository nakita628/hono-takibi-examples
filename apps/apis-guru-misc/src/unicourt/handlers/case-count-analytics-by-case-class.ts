import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCaseClassRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCaseClassHandler = app.openapi(
  getCaseCountAnalyticsByCaseClassRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

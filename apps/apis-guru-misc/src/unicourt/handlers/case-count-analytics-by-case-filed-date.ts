import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCaseFiledDateRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCaseFiledDateHandler = app.openapi(
  getCaseCountAnalyticsByCaseFiledDateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

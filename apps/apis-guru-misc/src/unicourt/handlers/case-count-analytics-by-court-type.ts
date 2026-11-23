import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCourtTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCourtTypeHandler = app.openapi(
  getCaseCountAnalyticsByCourtTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

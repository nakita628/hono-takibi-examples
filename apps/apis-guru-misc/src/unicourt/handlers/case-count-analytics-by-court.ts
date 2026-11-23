import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCourtRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCourtHandler = app.openapi(
  getCaseCountAnalyticsByCourtRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

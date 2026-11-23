import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCourtSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCourtSystemHandler = app.openapi(
  getCaseCountAnalyticsByCourtSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

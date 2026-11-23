import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByCourtLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByCourtLocationHandler = app.openapi(
  getCaseCountAnalyticsByCourtLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByNormAttorneyRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByNormAttorneyHandler = app.openapi(
  getCaseCountAnalyticsByNormAttorneyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

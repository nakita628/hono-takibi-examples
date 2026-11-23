import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByAreaOfLawRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByAreaOfLawHandler = app.openapi(
  getCaseCountAnalyticsByAreaOfLawRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

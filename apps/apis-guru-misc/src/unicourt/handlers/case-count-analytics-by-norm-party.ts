import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByNormPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByNormPartyHandler = app.openapi(
  getCaseCountAnalyticsByNormPartyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByNormLawFirmRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByNormLawFirmHandler = app.openapi(
  getCaseCountAnalyticsByNormLawFirmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

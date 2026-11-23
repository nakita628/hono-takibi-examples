import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByJurisdictionGeoRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByJurisdictionGeoHandler = app.openapi(
  getCaseCountAnalyticsByJurisdictionGeoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

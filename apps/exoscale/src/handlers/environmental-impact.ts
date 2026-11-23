import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnvironmentalImpactReportRoute, postEnvironmentalImpactEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const environmentalImpactHandler = app
  .openapi(postEnvironmentalImpactEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentalImpactReportRoute, (c) => {
    throw new Error('Not implemented')
  })

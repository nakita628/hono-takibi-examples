import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthReportFeatureRoute, getHealthReportRoute } from '../routes'

const app = new OpenAPIHono()

export const healthReportHandler = app
  .openapi(getHealthReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthReportFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataQualityMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const getDataQualityMetricsHandler = app.openapi(postGetDataQualityMetricsRoute, (c) => {
  throw new Error('Not implemented')
})

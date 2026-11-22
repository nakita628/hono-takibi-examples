import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataQualityMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetDataQualityMetricsHandler = app.openapi(postGetDataQualityMetricsRoute, (c) => {
  throw new Error('Not implemented')
})

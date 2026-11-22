import { OpenAPIHono } from '@hono/zod-openapi'
import { postDetectMetricSetConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const DetectMetricSetConfigHandler = app.openapi(postDetectMetricSetConfigRoute, (c) => {
  throw new Error('Not implemented')
})

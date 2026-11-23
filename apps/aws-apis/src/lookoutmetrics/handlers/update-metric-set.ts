import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateMetricSetRoute } from '../routes'

const app = new OpenAPIHono()

export const updateMetricSetHandler = app.openapi(postUpdateMetricSetRoute, (c) => {
  throw new Error('Not implemented')
})

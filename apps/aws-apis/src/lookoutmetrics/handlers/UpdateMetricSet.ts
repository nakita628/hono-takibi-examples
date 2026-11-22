import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateMetricSetRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateMetricSetHandler = app.openapi(postUpdateMetricSetRoute, (c) => {
  throw new Error('Not implemented')
})

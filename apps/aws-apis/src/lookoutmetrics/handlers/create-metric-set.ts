import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateMetricSetRoute } from '../routes'

const app = new OpenAPIHono()

export const createMetricSetHandler = app.openapi(postCreateMetricSetRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postListMetricSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListMetricSetsHandler = app.openapi(postListMetricSetsRoute, (c) => {
  throw new Error('Not implemented')
})

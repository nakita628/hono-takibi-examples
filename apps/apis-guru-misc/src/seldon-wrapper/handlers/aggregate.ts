import { OpenAPIHono } from '@hono/zod-openapi'
import { getAggregateRoute, postAggregateRoute } from '../routes'

const app = new OpenAPIHono()

export const aggregateHandler = app
  .openapi(getAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })

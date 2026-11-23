import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryRangeCostRoute, postQueryRangeCostRoute } from '../routes'

const app = new OpenAPIHono()

export const queryRangeCostHandler = app
  .openapi(getQueryRangeCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRangeCostRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryCostRoute, postQueryCostRoute } from '../routes'

const app = new OpenAPIHono()

export const queryCostHandler = app
  .openapi(getQueryCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryCostRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryRangeRoute, postQueryRangeRoute } from '../routes'

const app = new OpenAPIHono()

export const queryRangeHandler = app
  .openapi(getQueryRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRangeRoute, (c) => {
    throw new Error('Not implemented')
  })

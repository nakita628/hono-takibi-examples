import { OpenAPIHono } from '@hono/zod-openapi'
import { getPayRunsPayRunIDRoute, getPayRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const payRunsHandler = app
  .openapi(getPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })

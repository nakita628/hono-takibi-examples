import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueriesQueryIdReportsRoute, getQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesQueryIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })

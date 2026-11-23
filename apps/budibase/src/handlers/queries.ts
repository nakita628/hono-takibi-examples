import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueriesQueryIdRoute, postQueriesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(postQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

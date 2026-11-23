import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueriesRoute, getQueriesSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })

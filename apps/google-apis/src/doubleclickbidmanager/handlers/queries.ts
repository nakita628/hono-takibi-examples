import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryQueryIdRoute,
  getQueriesRoute,
  getQueryQueryIdRoute,
  postQueryQueryIdRoute,
  postQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })

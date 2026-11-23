import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryQueryIdRoute,
  getQueryQueryIdRoute,
  postQueryQueryIdRoute,
  postQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
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

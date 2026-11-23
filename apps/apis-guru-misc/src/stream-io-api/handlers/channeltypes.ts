import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChanneltypesNameRoute,
  getChanneltypesNameRoute,
  getChanneltypesRoute,
  postChanneltypesRoute,
  putChanneltypesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channeltypesHandler = app
  .openapi(getChanneltypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChanneltypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })

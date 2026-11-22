import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTopicsIdRoute,
  getTopicsIdRoute,
  getTopicsRoute,
  patchTopicsIdRoute,
  postTopicsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app
  .openapi(postTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

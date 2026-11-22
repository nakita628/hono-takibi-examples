import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3StatusesRoute,
  getRestApi3StatusesRoute,
  getRestApi3StatusesSearchRoute,
  postRestApi3StatusesRoute,
  putRestApi3StatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(deleteRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

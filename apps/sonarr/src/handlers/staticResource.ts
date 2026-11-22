import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentPathRoute,
  getLoggedoutRoute,
  getLoginRoute,
  getPathRoute,
  getRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticResourceHandler = app
  .openapi(getLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoggedoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPathRoute, (c) => {
    throw new Error('Not implemented')
  })

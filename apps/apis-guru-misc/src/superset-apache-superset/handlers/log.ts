import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogIndexRoute, getLogPkRoute, postLogIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const logHandler = app
  .openapi(getLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogPkRoute, (c) => {
    throw new Error('Not implemented')
  })

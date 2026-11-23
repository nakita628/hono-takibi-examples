import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetSessionInfoRoute, postGetSessionInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getSessionInfoHandler = app
  .openapi(getGetSessionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetSessionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

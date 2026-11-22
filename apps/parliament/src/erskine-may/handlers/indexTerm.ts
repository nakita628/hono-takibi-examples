import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiIndexTermBrowseRoute, getApiIndexTermIndexTermIdRoute } from '../routes'

const app = new OpenAPIHono()

export const indexTermHandler = app
  .openapi(getApiIndexTermBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIndexTermIndexTermIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntitlementsRoute, postEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(getEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })

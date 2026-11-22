import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntitlementsDropsRoute, patchEntitlementsDropsRoute } from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(getEntitlementsDropsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEntitlementsDropsRoute, (c) => {
    throw new Error('Not implemented')
  })

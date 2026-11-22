import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbNodesRoute, getModulesRoute, getOpenapiJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModulesRoute, (c) => {
    throw new Error('Not implemented')
  })

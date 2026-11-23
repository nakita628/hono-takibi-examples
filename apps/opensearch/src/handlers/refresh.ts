import { OpenAPIHono } from '@hono/zod-openapi'
import { getRefreshRoute, postRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const refreshHandler = app
  .openapi(getRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })

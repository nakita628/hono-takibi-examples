import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListPlatformVersionsRoute, postActionListPlatformVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListPlatformVersionsHandler = app
  .openapi(getActionListPlatformVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPlatformVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2TokenNewIndexRoute, postApiV2TokenRefreshIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenHandler = app
  .openapi(postApiV2TokenNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokenRefreshIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

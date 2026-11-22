import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AuthAppPortalAccessAppIdRoute, postApiV1AuthLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postApiV1AuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthAppPortalAccessAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

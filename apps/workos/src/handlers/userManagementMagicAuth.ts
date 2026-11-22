import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserManagementMagicAuthIdRoute, postUserManagementMagicAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementMagicAuthHandler = app
  .openapi(postUserManagementMagicAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementMagicAuthIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminAuthUnlinkAllRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationAdminHandler = app.openapi(postAdminAuthUnlinkAllRoute, (c) => {
  throw new Error('Not implemented')
})

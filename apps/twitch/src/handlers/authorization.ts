import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthorizationUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationHandler = app.openapi(getAuthorizationUsersRoute, (c) => {
  throw new Error('Not implemented')
})

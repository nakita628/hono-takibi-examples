import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const usersIdentityHandler = app.openapi(getUsersIdentityRoute, (c) => {
  throw new Error('Not implemented')
})

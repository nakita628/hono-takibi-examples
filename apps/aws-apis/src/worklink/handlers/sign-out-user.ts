import { OpenAPIHono } from '@hono/zod-openapi'
import { postSignOutUserRoute } from '../routes'

const app = new OpenAPIHono()

export const signOutUserHandler = app.openapi(postSignOutUserRoute, (c) => {
  throw new Error('Not implemented')
})

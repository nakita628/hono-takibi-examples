import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1LogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const logoutHandler = app.openapi(postApiV1LogoutRoute, (c) => {
  throw new Error('Not implemented')
})

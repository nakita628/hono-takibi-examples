import { OpenAPIHono } from '@hono/zod-openapi'
import { postSignupRoute } from '../routes'

const app = new OpenAPIHono()

export const signupHandler = app.openapi(postSignupRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postSigninRoute } from '../routes'

const app = new OpenAPIHono()

export const signinHandler = app.openapi(postSigninRoute, (c) => {
  throw new Error('Not implemented')
})

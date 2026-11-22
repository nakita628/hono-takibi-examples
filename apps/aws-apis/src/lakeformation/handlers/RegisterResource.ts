import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const RegisterResourceHandler = app.openapi(postRegisterResourceRoute, (c) => {
  throw new Error('Not implemented')
})

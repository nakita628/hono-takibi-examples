import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const registerResourceHandler = app.openapi(postRegisterResourceRoute, (c) => {
  throw new Error('Not implemented')
})

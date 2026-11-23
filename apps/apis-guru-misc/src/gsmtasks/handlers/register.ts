import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const registerHandler = app.openapi(postRegisterIndexRoute, (c) => {
  throw new Error('Not implemented')
})

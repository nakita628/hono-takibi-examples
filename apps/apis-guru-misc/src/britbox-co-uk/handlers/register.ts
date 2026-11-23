import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const registerHandler = app.openapi(postRegisterRoute, (c) => {
  throw new Error('Not implemented')
})

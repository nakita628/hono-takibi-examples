import { OpenAPIHono } from '@hono/zod-openapi'
import { postClientRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const clientHandler = app.openapi(postClientRegisterRoute, (c) => {
  throw new Error('Not implemented')
})

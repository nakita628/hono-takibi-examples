import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationHandler = app.openapi(postRegisterRoute, (c) => {
  throw new Error('Not implemented')
})

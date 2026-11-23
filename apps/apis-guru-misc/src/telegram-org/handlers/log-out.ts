import { OpenAPIHono } from '@hono/zod-openapi'
import { postLogOutRoute } from '../routes'

const app = new OpenAPIHono()

export const logOutHandler = app.openapi(postLogOutRoute, (c) => {
  throw new Error('Not implemented')
})

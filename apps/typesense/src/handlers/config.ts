import { OpenAPIHono } from '@hono/zod-openapi'
import { postConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app.openapi(postConfigRoute, (c) => {
  throw new Error('Not implemented')
})

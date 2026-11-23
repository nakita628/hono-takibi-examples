import { OpenAPIHono } from '@hono/zod-openapi'
import { putConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app.openapi(putConfigRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postManagerLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const managerHandler = app.openapi(postManagerLoginRoute, (c) => {
  throw new Error('Not implemented')
})

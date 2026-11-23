import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateApplicationHandler = app.openapi(postUpdateApplicationRoute, (c) => {
  throw new Error('Not implemented')
})

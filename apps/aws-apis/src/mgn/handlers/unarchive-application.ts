import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnarchiveApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const unarchiveApplicationHandler = app.openapi(postUnarchiveApplicationRoute, (c) => {
  throw new Error('Not implemented')
})

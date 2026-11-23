import { OpenAPIHono } from '@hono/zod-openapi'
import { postDndEndSnoozeRoute } from '../routes'

const app = new OpenAPIHono()

export const dndEndSnoozeHandler = app.openapi(postDndEndSnoozeRoute, (c) => {
  throw new Error('Not implemented')
})

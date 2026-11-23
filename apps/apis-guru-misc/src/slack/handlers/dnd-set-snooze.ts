import { OpenAPIHono } from '@hono/zod-openapi'
import { postDndSetSnoozeRoute } from '../routes'

const app = new OpenAPIHono()

export const dndSetSnoozeHandler = app.openapi(postDndSetSnoozeRoute, (c) => {
  throw new Error('Not implemented')
})

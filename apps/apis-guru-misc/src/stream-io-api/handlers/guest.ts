import { OpenAPIHono } from '@hono/zod-openapi'
import { postGuestRoute } from '../routes'

const app = new OpenAPIHono()

export const guestHandler = app.openapi(postGuestRoute, (c) => {
  throw new Error('Not implemented')
})

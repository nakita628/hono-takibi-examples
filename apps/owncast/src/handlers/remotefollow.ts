import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemotefollowRoute } from '../routes'

const app = new OpenAPIHono()

export const remotefollowHandler = app.openapi(postRemotefollowRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postWorldTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const worldTimeHandler = app.openapi(postWorldTimeRoute, (c) => {
  throw new Error('Not implemented')
})

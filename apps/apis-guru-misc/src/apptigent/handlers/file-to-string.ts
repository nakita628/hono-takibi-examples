import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileToStringRoute } from '../routes'

const app = new OpenAPIHono()

export const fileToStringHandler = app.openapi(postFileToStringRoute, (c) => {
  throw new Error('Not implemented')
})

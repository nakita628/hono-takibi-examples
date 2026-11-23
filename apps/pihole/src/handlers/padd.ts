import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaddRoute } from '../routes'

const app = new OpenAPIHono()

export const paddHandler = app.openapi(getPaddRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getAccountIndexRoute, (c) => {
  throw new Error('Not implemented')
})

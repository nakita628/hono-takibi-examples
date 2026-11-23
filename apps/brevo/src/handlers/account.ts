import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getAccountRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getMeRoute, (c) => {
  throw new Error('Not implemented')
})

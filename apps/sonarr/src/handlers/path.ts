import { OpenAPIHono } from '@hono/zod-openapi'
import { getPathRoute } from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app.openapi(getPathRoute, (c) => {
  throw new Error('Not implemented')
})

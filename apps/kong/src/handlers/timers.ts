import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimersRoute } from '../routes'

const app = new OpenAPIHono()

export const timersHandler = app.openapi(getTimersRoute, (c) => {
  throw new Error('Not implemented')
})

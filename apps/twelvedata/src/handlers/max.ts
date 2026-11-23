import { OpenAPIHono } from '@hono/zod-openapi'
import { getMaxRoute } from '../routes'

const app = new OpenAPIHono()

export const maxHandler = app.openapi(getMaxRoute, (c) => {
  throw new Error('Not implemented')
})

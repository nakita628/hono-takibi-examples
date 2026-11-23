import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const deletionsHandler = app.openapi(getDeletionsRoute, (c) => {
  throw new Error('Not implemented')
})

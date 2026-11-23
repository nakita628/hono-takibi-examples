import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopicsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app.openapi(getTopicsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

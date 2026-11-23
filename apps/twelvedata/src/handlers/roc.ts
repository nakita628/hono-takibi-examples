import { OpenAPIHono } from '@hono/zod-openapi'
import { getRocRoute } from '../routes'

const app = new OpenAPIHono()

export const rocHandler = app.openapi(getRocRoute, (c) => {
  throw new Error('Not implemented')
})

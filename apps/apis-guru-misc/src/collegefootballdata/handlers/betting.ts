import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinesRoute } from '../routes'

const app = new OpenAPIHono()

export const bettingHandler = app.openapi(getLinesRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { optionsRoute } from '../routes'

const app = new OpenAPIHono()

export const __rootHandler = app.openapi(optionsRoute, (c) => {
  throw new Error('Not implemented')
})

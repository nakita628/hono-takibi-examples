import { OpenAPIHono } from '@hono/zod-openapi'
import { getFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const flagsHandler = app.openapi(getFlagsRoute, (c) => {
  throw new Error('Not implemented')
})

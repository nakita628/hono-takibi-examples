import { OpenAPIHono } from '@hono/zod-openapi'
import { getStandardRoute } from '../routes'

const app = new OpenAPIHono()

export const standardHandler = app.openapi(getStandardRoute, (c) => {
  throw new Error('Not implemented')
})

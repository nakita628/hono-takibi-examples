import { OpenAPIHono } from '@hono/zod-openapi'
import { putCartConfigUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartConfigUpdateJsonHandler = app.openapi(putCartConfigUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})

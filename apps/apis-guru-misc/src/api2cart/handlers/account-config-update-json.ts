import { OpenAPIHono } from '@hono/zod-openapi'
import { putAccountConfigUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const accountConfigUpdateJsonHandler = app.openapi(putAccountConfigUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})

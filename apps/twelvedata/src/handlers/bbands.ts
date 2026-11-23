import { OpenAPIHono } from '@hono/zod-openapi'
import { getBbandsRoute } from '../routes'

const app = new OpenAPIHono()

export const bbandsHandler = app.openapi(getBbandsRoute, (c) => {
  throw new Error('Not implemented')
})

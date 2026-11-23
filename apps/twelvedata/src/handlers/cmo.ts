import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmoRoute } from '../routes'

const app = new OpenAPIHono()

export const cmoHandler = app.openapi(getCmoRoute, (c) => {
  throw new Error('Not implemented')
})

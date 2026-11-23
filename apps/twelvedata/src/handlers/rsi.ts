import { OpenAPIHono } from '@hono/zod-openapi'
import { getRsiRoute } from '../routes'

const app = new OpenAPIHono()

export const rsiHandler = app.openapi(getRsiRoute, (c) => {
  throw new Error('Not implemented')
})

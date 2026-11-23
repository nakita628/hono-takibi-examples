import { OpenAPIHono } from '@hono/zod-openapi'
import { getRocpRoute } from '../routes'

const app = new OpenAPIHono()

export const rocpHandler = app.openapi(getRocpRoute, (c) => {
  throw new Error('Not implemented')
})

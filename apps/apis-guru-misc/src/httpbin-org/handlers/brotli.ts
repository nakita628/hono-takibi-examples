import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrotliRoute } from '../routes'

const app = new OpenAPIHono()

export const brotliHandler = app.openapi(getBrotliRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getIchimokuRoute } from '../routes'

const app = new OpenAPIHono()

export const ichimokuHandler = app.openapi(getIchimokuRoute, (c) => {
  throw new Error('Not implemented')
})

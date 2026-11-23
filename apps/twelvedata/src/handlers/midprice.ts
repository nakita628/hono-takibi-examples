import { OpenAPIHono } from '@hono/zod-openapi'
import { getMidpriceRoute } from '../routes'

const app = new OpenAPIHono()

export const midpriceHandler = app.openapi(getMidpriceRoute, (c) => {
  throw new Error('Not implemented')
})

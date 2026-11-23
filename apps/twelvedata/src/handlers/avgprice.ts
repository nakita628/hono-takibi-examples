import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvgpriceRoute } from '../routes'

const app = new OpenAPIHono()

export const avgpriceHandler = app.openapi(getAvgpriceRoute, (c) => {
  throw new Error('Not implemented')
})

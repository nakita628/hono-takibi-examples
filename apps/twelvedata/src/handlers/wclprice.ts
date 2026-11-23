import { OpenAPIHono } from '@hono/zod-openapi'
import { getWclpriceRoute } from '../routes'

const app = new OpenAPIHono()

export const wclpriceHandler = app.openapi(getWclpriceRoute, (c) => {
  throw new Error('Not implemented')
})

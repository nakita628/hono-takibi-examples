import { OpenAPIHono } from '@hono/zod-openapi'
import { getTyppriceRoute } from '../routes'

const app = new OpenAPIHono()

export const typpriceHandler = app.openapi(getTyppriceRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getListPriceRoute } from '../routes'

const app = new OpenAPIHono()

export const listPriceHandler = app.openapi(getListPriceRoute, (c) => {
  throw new Error('Not implemented')
})

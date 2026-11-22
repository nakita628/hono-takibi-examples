import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineTotalsHandler = app.openapi(getV1CartsMineTotalsRoute, (c) => {
  throw new Error('Not implemented')
})

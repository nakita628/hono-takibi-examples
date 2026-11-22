import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsSearchHandler = app.openapi(getV1CartsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

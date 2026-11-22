import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsHandler = app.openapi(postV1CartsIndexRoute, (c) => {
  throw new Error('Not implemented')
})

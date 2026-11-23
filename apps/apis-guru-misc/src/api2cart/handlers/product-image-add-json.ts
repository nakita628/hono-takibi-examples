import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductImageAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productImageAddJsonHandler = app.openapi(postProductImageAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})

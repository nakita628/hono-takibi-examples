import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderAddJsonHandler = app.openapi(postOrderAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})

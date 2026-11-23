import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductOptionAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionAddJsonHandler = app.openapi(postProductOptionAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})

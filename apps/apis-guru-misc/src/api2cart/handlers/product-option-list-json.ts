import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductOptionListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionListJsonHandler = app.openapi(getProductOptionListJsonRoute, (c) => {
  throw new Error('Not implemented')
})

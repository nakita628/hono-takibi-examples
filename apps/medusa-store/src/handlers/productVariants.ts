import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductVariantsRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantsHandler = app.openapi(getStoreProductVariantsRoute, (c) => {
  throw new Error('Not implemented')
})

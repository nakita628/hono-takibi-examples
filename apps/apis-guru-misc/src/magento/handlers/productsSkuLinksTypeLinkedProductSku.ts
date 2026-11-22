import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsSkuLinksTypeLinkedProductSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuLinksTypeLinkedProductSkuHandler = app.openapi(
  deleteV1ProductsSkuLinksTypeLinkedProductSkuRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

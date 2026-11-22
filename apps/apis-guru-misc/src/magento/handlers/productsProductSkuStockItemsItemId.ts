import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ProductsProductSkuStockItemsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsProductSkuStockItemsItemIdHandler = app.openapi(
  putV1ProductsProductSkuStockItemsItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

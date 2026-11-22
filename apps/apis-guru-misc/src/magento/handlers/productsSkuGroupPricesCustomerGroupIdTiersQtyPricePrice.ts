import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceHandler = app.openapi(
  postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

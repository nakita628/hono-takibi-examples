import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuGroupPricesCustomerGroupIdTiersQtyHandler = app.openapi(
  deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

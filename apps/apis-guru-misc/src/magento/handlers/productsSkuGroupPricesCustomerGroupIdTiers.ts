import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsSkuGroupPricesCustomerGroupIdTiersRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuGroupPricesCustomerGroupIdTiersHandler = app.openapi(
  getV1ProductsSkuGroupPricesCustomerGroupIdTiersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

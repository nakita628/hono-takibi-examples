import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigurableProductsSkuOptionsIdRoute,
  getV1ConfigurableProductsSkuOptionsIdRoute,
  putV1ConfigurableProductsSkuOptionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuOptionsIdHandler = app
  .openapi(deleteV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

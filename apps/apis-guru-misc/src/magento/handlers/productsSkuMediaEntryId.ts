import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsSkuMediaEntryIdRoute,
  getV1ProductsSkuMediaEntryIdRoute,
  putV1ProductsSkuMediaEntryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsSkuMediaEntryIdHandler = app
  .openapi(deleteV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })

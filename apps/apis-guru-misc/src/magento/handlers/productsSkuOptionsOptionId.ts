import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsSkuOptionsOptionIdRoute,
  getV1ProductsSkuOptionsOptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsSkuOptionsOptionIdHandler = app
  .openapi(deleteV1ProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

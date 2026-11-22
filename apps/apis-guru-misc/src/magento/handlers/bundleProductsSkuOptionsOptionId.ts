import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BundleProductsSkuOptionsOptionIdRoute,
  getV1BundleProductsSkuOptionsOptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundleProductsSkuOptionsOptionIdHandler = app
  .openapi(deleteV1BundleProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

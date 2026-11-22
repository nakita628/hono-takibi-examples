import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsSkuOptionsOptionIdChildrenChildSkuHandler = app.openapi(
  deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

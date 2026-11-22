import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1BundleProductsSkuLinksOptionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsSkuLinksOptionIdHandler = app.openapi(
  postV1BundleProductsSkuLinksOptionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProductsSkuDownloadableLinksRoute,
  postV1ProductsSkuDownloadableLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsSkuDownloadableLinksHandler = app
  .openapi(getV1ProductsSkuDownloadableLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuDownloadableLinksRoute, (c) => {
    throw new Error('Not implemented')
  })

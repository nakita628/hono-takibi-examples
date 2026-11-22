import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProductsSkuDownloadableLinksSamplesRoute,
  postV1ProductsSkuDownloadableLinksSamplesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsSkuDownloadableLinksSamplesHandler = app
  .openapi(getV1ProductsSkuDownloadableLinksSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuDownloadableLinksSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })

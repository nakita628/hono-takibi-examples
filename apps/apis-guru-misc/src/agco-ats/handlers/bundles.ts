import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2BundlesIDRoute,
  getApiV2BundlesIDRoute,
  getApiV2BundlesRoute,
  postApiV2BundlesRoute,
  putApiV2BundlesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundlesHandler = app
  .openapi(getApiV2BundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BundlesIDRoute, (c) => {
    throw new Error('Not implemented')
  })

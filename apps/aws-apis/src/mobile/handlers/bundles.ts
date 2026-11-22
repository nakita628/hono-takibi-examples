import { OpenAPIHono } from '@hono/zod-openapi'
import { getBundlesBundleIdRoute, getBundlesRoute, postBundlesBundleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bundlesHandler = app
  .openapi(getBundlesBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundlesBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })

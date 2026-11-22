import { OpenAPIHono } from '@hono/zod-openapi'
import { getBundleRecipientsRoute, postBundleRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleRecipientsHandler = app
  .openapi(getBundleRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundleRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getBundleDownloadsRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleDownloadsHandler = app.openapi(getBundleDownloadsRoute, (c) => {
  throw new Error('Not implemented')
})

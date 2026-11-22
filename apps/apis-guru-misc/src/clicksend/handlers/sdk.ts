import { OpenAPIHono } from '@hono/zod-openapi'
import { getSdkDownloadTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const sdkHandler = app.openapi(getSdkDownloadTypeRoute, (c) => {
  throw new Error('Not implemented')
})

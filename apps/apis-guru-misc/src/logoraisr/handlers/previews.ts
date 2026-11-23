import { OpenAPIHono } from '@hono/zod-openapi'
import { getPreviewsFileIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const previewsHandler = app.openapi(getPreviewsFileIdIndexRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1PreviewPurchaseOrderRoute, postApiV1PreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const previewHandler = app
  .openapi(postApiV1PreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PreviewPurchaseOrderRoute, (c) => {
    throw new Error('Not implemented')
  })

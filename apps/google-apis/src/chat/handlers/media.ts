import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1MediaResourceNameRoute, postV1ParentAttachmentsUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getV1MediaResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAttachmentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })

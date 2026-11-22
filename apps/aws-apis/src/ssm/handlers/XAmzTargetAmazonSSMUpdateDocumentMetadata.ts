import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateDocumentMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateDocumentMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateDocumentMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

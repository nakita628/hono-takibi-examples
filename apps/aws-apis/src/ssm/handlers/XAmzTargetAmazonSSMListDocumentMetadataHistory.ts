import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListDocumentMetadataHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListDocumentMetadataHistoryHandler = app.openapi(
  postXAmzTargetAmazonSSMListDocumentMetadataHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateDocumentHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

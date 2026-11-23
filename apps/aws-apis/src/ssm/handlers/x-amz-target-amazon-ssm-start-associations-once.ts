import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartAssociationsOnceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmStartAssociationsOnceHandler = app.openapi(
  postXAmzTargetAmazonSSMStartAssociationsOnceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

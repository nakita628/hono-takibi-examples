import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMStartAssociationsOnceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMStartAssociationsOnceHandler = app.openapi(
  postXAmzTargetAmazonSSMStartAssociationsOnceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

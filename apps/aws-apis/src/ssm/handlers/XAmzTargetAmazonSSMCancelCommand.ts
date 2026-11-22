import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCancelCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCancelCommandHandler = app.openapi(
  postXAmzTargetAmazonSSMCancelCommandRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

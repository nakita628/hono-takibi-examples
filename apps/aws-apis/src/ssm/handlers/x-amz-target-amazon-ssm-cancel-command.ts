import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCancelCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCancelCommandHandler = app.openapi(
  postXAmzTargetAmazonSSMCancelCommandRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

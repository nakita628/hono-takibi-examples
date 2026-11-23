import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMSendCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmSendCommandHandler = app.openapi(
  postXAmzTargetAmazonSSMSendCommandRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

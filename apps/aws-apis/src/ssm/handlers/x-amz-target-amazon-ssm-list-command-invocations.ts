import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListCommandInvocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListCommandInvocationsHandler = app.openapi(
  postXAmzTargetAmazonSSMListCommandInvocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

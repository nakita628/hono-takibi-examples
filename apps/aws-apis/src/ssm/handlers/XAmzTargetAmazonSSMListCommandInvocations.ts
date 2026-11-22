import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListCommandInvocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListCommandInvocationsHandler = app.openapi(
  postXAmzTargetAmazonSSMListCommandInvocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

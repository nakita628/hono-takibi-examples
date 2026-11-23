import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmPutResourcePolicyHandler = app.openapi(
  postXAmzTargetAmazonSSMPutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

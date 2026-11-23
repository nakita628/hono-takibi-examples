import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

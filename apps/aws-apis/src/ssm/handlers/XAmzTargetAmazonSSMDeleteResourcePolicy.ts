import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

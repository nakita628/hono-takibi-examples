import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMPutResourcePolicyHandler = app.openapi(
  postXAmzTargetAmazonSSMPutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

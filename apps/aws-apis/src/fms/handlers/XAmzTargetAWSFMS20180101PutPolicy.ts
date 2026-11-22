import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101PutPolicyHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

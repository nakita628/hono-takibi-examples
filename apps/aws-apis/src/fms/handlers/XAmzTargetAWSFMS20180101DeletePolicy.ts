import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DeletePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101DeletePolicyHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DeletePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

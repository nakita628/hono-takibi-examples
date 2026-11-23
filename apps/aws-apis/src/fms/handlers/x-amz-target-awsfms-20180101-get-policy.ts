import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101GetPolicyHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

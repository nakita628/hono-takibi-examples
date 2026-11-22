import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListPoliciesHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutAdminAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101PutAdminAccountHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutAdminAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

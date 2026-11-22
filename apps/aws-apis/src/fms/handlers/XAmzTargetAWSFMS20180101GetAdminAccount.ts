import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetAdminAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetAdminAccountHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetAdminAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

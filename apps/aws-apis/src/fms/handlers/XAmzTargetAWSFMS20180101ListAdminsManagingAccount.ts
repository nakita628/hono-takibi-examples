import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListAdminsManagingAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListAdminsManagingAccountHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListAdminsManagingAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

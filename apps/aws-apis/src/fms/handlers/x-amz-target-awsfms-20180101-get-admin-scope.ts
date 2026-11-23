import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetAdminScopeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101GetAdminScopeHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetAdminScopeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

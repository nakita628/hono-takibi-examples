import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutAppsListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101PutAppsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutAppsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

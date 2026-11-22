import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetAppsListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetAppsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetAppsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

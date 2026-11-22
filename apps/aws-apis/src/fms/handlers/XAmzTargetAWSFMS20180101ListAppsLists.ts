import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListAppsListsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListAppsListsHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListAppsListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

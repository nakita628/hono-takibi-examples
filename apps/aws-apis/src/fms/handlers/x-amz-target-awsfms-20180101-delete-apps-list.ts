import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DeleteAppsListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101DeleteAppsListHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DeleteAppsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

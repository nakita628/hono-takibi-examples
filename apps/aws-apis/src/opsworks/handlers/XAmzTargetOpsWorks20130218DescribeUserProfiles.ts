import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeUserProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeUserProfilesHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeUserProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

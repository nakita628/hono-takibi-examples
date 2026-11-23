import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeMyUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeMyUserProfileHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeMyUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

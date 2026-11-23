import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeCommandsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeCommandsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeCommandsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

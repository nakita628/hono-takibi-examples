import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeServiceErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeServiceErrorsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeServiceErrorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeOperatingSystemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeOperatingSystemsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeOperatingSystemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

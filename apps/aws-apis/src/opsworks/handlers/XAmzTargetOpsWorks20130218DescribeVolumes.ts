import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeVolumesHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeVolumesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

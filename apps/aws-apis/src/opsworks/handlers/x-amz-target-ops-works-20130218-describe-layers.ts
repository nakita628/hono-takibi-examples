import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeLayersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeLayersHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeLayersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

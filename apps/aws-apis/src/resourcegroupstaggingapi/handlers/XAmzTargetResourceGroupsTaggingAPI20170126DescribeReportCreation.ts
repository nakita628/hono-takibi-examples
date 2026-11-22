import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

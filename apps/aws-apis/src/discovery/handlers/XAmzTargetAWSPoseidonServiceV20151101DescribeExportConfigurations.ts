import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

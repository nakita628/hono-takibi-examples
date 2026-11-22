import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

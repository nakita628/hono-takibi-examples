import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101DescribeAgentsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

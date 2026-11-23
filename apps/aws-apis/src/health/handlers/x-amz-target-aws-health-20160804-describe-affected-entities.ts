import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHealth20160804DescribeAffectedEntitiesHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

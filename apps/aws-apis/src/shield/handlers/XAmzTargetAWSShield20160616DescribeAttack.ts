import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeAttackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DescribeAttackHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeAttackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

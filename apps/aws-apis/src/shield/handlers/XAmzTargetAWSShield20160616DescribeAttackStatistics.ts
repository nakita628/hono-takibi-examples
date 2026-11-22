import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeAttackStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DescribeAttackStatisticsHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeAttackStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

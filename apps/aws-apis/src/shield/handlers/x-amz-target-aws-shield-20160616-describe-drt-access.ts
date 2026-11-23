import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeDRTAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DescribeDrtAccessHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeDRTAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

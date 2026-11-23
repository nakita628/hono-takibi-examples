import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisassociateDRTLogBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DisassociateDrtLogBucketHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisassociateDRTLogBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

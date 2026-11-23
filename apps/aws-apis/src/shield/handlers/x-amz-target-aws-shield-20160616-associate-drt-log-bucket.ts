import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateDRTLogBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616AssociateDrtLogBucketHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateDRTLogBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

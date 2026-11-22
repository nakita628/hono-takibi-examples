import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateDRTLogBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616AssociateDRTLogBucketHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateDRTLogBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

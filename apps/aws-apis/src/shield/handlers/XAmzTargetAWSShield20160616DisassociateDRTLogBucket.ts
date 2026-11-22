import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisassociateDRTLogBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DisassociateDRTLogBucketHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisassociateDRTLogBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

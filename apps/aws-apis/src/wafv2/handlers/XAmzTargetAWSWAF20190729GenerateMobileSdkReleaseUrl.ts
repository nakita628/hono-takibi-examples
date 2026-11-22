import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

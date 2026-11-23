import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetMobileSdkReleaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetMobileSdkReleaseHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetMobileSdkReleaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

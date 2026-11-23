import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListMobileSdkReleasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListMobileSdkReleasesHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListMobileSdkReleasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

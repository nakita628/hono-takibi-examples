import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListAPIKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListApiKeysHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListAPIKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

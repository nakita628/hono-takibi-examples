import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListAPIKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListAPIKeysHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListAPIKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

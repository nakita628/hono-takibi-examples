import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateAPIKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729CreateApiKeyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateAPIKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

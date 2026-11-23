import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetDecryptedAPIKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetDecryptedApiKeyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetDecryptedAPIKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

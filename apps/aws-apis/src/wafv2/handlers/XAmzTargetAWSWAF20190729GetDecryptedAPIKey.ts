import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetDecryptedAPIKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetDecryptedAPIKeyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetDecryptedAPIKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

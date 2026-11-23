import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709PutWebhookHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutWebhookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyHandler = app.openapi(
  postXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

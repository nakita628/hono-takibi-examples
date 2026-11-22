import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyHandler = app.openapi(
  postXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobHandler = app.openapi(
  postXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

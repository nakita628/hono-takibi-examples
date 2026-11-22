import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

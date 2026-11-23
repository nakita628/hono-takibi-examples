import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

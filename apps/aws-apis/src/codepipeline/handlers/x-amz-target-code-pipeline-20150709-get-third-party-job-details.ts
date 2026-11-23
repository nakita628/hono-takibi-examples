import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709GetThirdPartyJobDetailsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

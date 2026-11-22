import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PollForThirdPartyJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PollForThirdPartyJobsRoute,
  (c) => {},
)

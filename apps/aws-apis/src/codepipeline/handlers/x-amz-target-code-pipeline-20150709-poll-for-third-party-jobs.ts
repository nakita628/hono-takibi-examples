import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PollForThirdPartyJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PollForThirdPartyJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

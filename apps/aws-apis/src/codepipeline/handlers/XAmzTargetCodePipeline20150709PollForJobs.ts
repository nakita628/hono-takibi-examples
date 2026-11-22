import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709PollForJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709PollForJobsHandler = app.openapi(
  postXAmzTargetCodePipeline20150709PollForJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709EnableStageTransitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709EnableStageTransitionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709EnableStageTransitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

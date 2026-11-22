import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709DisableStageTransitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709DisableStageTransitionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709DisableStageTransitionRoute,
  (c) => {},
)

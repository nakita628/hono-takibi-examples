import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709UpdateActionTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709UpdateActionTypeHandler = app.openapi(
  postXAmzTargetCodePipeline20150709UpdateActionTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

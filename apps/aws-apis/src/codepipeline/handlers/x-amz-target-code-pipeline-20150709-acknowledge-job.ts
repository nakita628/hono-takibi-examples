import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709AcknowledgeJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709AcknowledgeJobHandler = app.openapi(
  postXAmzTargetCodePipeline20150709AcknowledgeJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

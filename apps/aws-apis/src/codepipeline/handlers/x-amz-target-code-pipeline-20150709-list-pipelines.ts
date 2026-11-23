import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListPipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709ListPipelinesHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListPipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

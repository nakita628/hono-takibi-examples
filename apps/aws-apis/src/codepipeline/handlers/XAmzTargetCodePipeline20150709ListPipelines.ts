import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListPipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709ListPipelinesHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListPipelinesRoute,
  (c) => {},
)

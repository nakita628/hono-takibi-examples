import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListActionTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709ListActionTypesHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListActionTypesRoute,
  (c) => {},
)

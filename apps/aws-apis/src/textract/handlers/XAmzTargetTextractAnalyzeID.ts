import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractAnalyzeIDRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractAnalyzeIDHandler = app.openapi(
  postXAmzTargetTextractAnalyzeIDRoute,
  (c) => {},
)

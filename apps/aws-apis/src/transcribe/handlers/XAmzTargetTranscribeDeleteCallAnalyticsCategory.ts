import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeDeleteCallAnalyticsCategoryRoute,
  (c) => {},
)

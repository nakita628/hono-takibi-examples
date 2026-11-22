import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeUpdateCallAnalyticsCategoryRoute,
  (c) => {},
)

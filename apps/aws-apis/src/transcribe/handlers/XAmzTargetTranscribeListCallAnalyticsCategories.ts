import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListCallAnalyticsCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListCallAnalyticsCategoriesHandler = app.openapi(
  postXAmzTargetTranscribeListCallAnalyticsCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

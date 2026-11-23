import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeGetCallAnalyticsCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

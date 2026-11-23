import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeUpdateCallAnalyticsCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

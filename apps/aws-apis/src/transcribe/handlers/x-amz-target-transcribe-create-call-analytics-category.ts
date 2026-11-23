import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeCreateCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeCreateCallAnalyticsCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteCallAnalyticsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler = app.openapi(
  postXAmzTargetTranscribeDeleteCallAnalyticsCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

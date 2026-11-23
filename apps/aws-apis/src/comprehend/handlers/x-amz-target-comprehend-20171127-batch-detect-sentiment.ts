import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127BatchDetectSentimentHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectSentimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

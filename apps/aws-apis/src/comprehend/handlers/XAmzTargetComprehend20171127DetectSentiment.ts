import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DetectSentimentHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectSentimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

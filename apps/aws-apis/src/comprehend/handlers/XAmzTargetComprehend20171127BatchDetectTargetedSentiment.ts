import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127BatchDetectTargetedSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127BatchDetectTargetedSentimentHandler = app.openapi(
  postXAmzTargetComprehend20171127BatchDetectTargetedSentimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

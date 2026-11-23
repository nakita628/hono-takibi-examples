import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DetectTargetedSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DetectTargetedSentimentHandler = app.openapi(
  postXAmzTargetComprehend20171127DetectTargetedSentimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

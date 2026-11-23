import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDescribeLanguageModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeDescribeLanguageModelHandler = app.openapi(
  postXAmzTargetTranscribeDescribeLanguageModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

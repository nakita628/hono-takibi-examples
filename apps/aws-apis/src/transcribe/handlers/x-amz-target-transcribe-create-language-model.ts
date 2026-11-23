import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateLanguageModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeCreateLanguageModelHandler = app.openapi(
  postXAmzTargetTranscribeCreateLanguageModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateLanguageModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeCreateLanguageModelHandler = app.openapi(
  postXAmzTargetTranscribeCreateLanguageModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

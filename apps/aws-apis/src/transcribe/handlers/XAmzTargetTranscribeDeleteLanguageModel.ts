import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteLanguageModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteLanguageModelHandler = app.openapi(
  postXAmzTargetTranscribeDeleteLanguageModelRoute,
  (c) => {},
)

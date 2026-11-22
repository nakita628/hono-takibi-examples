import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListLanguageModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListLanguageModelsHandler = app.openapi(
  postXAmzTargetTranscribeListLanguageModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

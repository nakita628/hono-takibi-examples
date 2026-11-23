import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListLanguageModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListLanguageModelsHandler = app.openapi(
  postXAmzTargetTranscribeListLanguageModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

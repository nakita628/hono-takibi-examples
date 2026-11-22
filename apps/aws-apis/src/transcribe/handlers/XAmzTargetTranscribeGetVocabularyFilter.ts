import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeGetVocabularyFilterRoute,
  (c) => {},
)

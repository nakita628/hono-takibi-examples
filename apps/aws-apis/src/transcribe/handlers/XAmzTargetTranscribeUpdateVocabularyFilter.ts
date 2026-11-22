import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeUpdateVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeUpdateVocabularyFilterRoute,
  (c) => {},
)

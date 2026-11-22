import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListVocabularyFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListVocabularyFiltersHandler = app.openapi(
  postXAmzTargetTranscribeListVocabularyFiltersRoute,
  (c) => {},
)

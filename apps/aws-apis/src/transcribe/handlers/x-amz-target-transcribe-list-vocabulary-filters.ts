import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListVocabularyFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListVocabularyFiltersHandler = app.openapi(
  postXAmzTargetTranscribeListVocabularyFiltersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

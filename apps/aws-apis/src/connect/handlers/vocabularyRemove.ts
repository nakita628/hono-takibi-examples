import { OpenAPIHono } from '@hono/zod-openapi'
import { postVocabularyRemoveInstanceIdVocabularyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const vocabularyRemoveHandler = app.openapi(
  postVocabularyRemoveInstanceIdVocabularyIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

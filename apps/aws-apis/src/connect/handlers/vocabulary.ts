import { OpenAPIHono } from '@hono/zod-openapi'
import { getVocabularyInstanceIdVocabularyIdRoute, postVocabularyInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const vocabularyHandler = app
  .openapi(postVocabularyInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVocabularyInstanceIdVocabularyIdRoute, (c) => {
    throw new Error('Not implemented')
  })

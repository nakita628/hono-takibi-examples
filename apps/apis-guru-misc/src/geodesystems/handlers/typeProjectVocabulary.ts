import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectVocabularyHandler = app.openapi(
  getRepositorySearchTypeProjectVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

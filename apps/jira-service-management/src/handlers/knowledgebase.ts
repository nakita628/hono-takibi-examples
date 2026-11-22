import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestServicedeskapiKnowledgebaseArticleRoute } from '../routes'

const app = new OpenAPIHono()

export const knowledgebaseHandler = app.openapi(
  getRestServicedeskapiKnowledgebaseArticleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

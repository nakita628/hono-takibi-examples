import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminKnowledgeGraphNamespacesIdRoute,
  getApiV4AdminKnowledgeGraphNamespacesRoute,
  putApiV4AdminKnowledgeGraphNamespacesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const knowledgeGraphHandler = app
  .openapi(getApiV4AdminKnowledgeGraphNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminKnowledgeGraphNamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminKnowledgeGraphNamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

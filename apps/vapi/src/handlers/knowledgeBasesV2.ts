import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2KnowledgeBaseIdFileFileIdRoute,
  deleteV2KnowledgeBaseIdRoute,
  getV2KnowledgeBaseIdFileRoute,
  getV2KnowledgeBaseIdRoute,
  getV2KnowledgeBaseRoute,
  patchV2KnowledgeBaseIdRoute,
  postV2KnowledgeBaseIdFileFileIdRetryRoute,
  postV2KnowledgeBaseIdFileRoute,
  postV2KnowledgeBaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const knowledgeBasesV2Handler = app
  .openapi(postV2KnowledgeBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KnowledgeBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KnowledgeBaseIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KnowledgeBaseIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KnowledgeBaseIdFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KnowledgeBaseIdFileFileIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2KnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })

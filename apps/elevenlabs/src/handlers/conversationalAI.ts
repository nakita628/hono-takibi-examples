import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRoute,
  getV1ConvaiKnowledgeBaseCrawlRoute,
  postV1ConvaiKnowledgeBaseBulkMoveRoute,
  postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRoute,
  postV1ConvaiKnowledgeBaseCrawlRoute,
  postV1ConvaiKnowledgeBaseDocumentIdMoveRoute,
  postV1ConvaiKnowledgeBaseFolderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationalAIHandler = app
  .openapi(postV1ConvaiKnowledgeBaseCrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseCrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConvaiKnowledgeBaseCrawlCrawlJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseCrawlCrawlJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseDocumentIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConvaiKnowledgeBaseBulkMoveRoute, (c) => {
    throw new Error('Not implemented')
  })

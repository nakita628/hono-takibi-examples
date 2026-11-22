import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DocumentsDocumentIdRoute,
  postV1DocumentsDocumentIdBatchUpdateRoute,
  postV1DocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postV1DocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DocumentsDocumentIdBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })

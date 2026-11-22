import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesIndexUidDocumentsDocumentIdRoute,
  deleteIndexesIndexUidDocumentsRoute,
  getIndexesIndexUidDocumentsDocumentIdRoute,
  getIndexesIndexUidDocumentsRoute,
  postIndexesIndexUidDeleteBatchRoute,
  postIndexesIndexUidDocumentsDeleteRoute,
  postIndexesIndexUidDocumentsEditRoute,
  postIndexesIndexUidDocumentsFetchRoute,
  postIndexesIndexUidDocumentsRoute,
  putIndexesIndexUidDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postIndexesIndexUidDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidDocumentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

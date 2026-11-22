import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameDocumentsDocumentIdRoute,
  deleteCollectionsCollectionNameDocumentsRoute,
  getCollectionsCollectionNameDocumentsDocumentIdRoute,
  getCollectionsCollectionNameDocumentsExportRoute,
  getCollectionsCollectionNameDocumentsSearchRoute,
  patchCollectionsCollectionNameDocumentsDocumentIdRoute,
  patchCollectionsCollectionNameDocumentsRoute,
  postCollectionsCollectionNameDocumentsImportRoute,
  postCollectionsCollectionNameDocumentsRoute,
  postMultiSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postCollectionsCollectionNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameDocumentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameDocumentsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameDocumentsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMultiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

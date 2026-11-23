import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameDocumentsDocumentIdRoute,
  deleteCollectionsCollectionNameDocumentsRoute,
  deleteCollectionsCollectionNameRoute,
  getCollectionsCollectionNameDocumentsDocumentIdRoute,
  getCollectionsCollectionNameDocumentsExportRoute,
  getCollectionsCollectionNameDocumentsSearchRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  patchCollectionsCollectionNameDocumentsDocumentIdRoute,
  patchCollectionsCollectionNameDocumentsRoute,
  patchCollectionsCollectionNameRoute,
  postCollectionsCollectionNameDocumentsImportRoute,
  postCollectionsCollectionNameDocumentsRoute,
  postCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
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

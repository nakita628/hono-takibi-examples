import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocumentsDocumentIdProgressRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsDocumentIdSimilarsRoute,
  getDocumentsRoute,
  getDocumentsSubjectsRoute,
  postDocumentsDocumentIdRegeneratePreviewRoute,
  postDocumentsDocumentIdUseAsDraftRoute,
  postDocumentsDocumentIdUseAsRegularRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdRegeneratePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdSimilarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdUseAsDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdUseAsRegularRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsDocumentIdRoute,
  deleteDocumentsRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
  optionsDocumentsDocumentIdRoute,
  optionsDocumentsRoute,
  patchDocumentsDocumentIdRoute,
  postDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(deleteDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdRoute,
  getDocumentsChildObjectsIdRoute,
  getDocumentsDocumentTypeIdRoute,
  getDocumentsDocumentTypeRoute,
  getDocumentsDocumentTypeTypeIdTypeIdRoute,
  getDocumentsDownloadIdRoute,
  getDocumentsIdRoute,
  postDocumentsCloneIdRoute,
  postDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsCloneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentTypeTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDownloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

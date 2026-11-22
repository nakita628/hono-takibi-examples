import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdRoute,
  getDocumentLinksRoute,
  getDocumentsIdDownloadLinkRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  patchDocumentsIdRoute,
  postDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getDocumentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdDownloadLinkRoute, (c) => {
    throw new Error('Not implemented')
  })

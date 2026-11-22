import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute,
  getApiDocumentableTypeDocumentableIdDocumentsIdRoute,
  getApiDocumentableTypeDocumentableIdDocumentsRoute,
  getApiDocumentsIdDownloadRoute,
  getApiDocumentsIdRoute,
  getApiDocumentsRoute,
  postApiDocumentableTypeDocumentableIdDocumentsRoute,
  postApiDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentHandler = app
  .openapi(getApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDocumentableTypeDocumentableIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentableTypeDocumentableIdDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })

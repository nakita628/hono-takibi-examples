import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute,
  getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })

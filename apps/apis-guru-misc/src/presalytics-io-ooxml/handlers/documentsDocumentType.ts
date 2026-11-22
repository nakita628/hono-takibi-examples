import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocumentsDocumentTypeIdRoute,
  getDocumentsDocumentTypeRoute,
  getDocumentsDocumentTypeTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsDocumentTypeHandler = app
  .openapi(getDocumentsDocumentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentTypeTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

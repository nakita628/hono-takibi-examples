import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsDocumentIdRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

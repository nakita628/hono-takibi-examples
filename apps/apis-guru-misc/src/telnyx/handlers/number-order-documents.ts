import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberOrderDocumentsNumberOrderDocumentIdRoute,
  getNumberOrderDocumentsRoute,
  patchNumberOrderDocumentsNumberOrderDocumentIdRoute,
  postNumberOrderDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberOrderDocumentsHandler = app
  .openapi(getNumberOrderDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberOrderDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderDocumentsNumberOrderDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrderDocumentsNumberOrderDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

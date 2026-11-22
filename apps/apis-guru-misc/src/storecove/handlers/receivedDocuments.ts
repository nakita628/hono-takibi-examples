import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReceivedDocumentsGuidFormatRoute,
  postLegalEntitiesLegalEntityIdReceivedDocumentsRoute,
  postReceivedDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receivedDocumentsHandler = app
  .openapi(postLegalEntitiesLegalEntityIdReceivedDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceivedDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceivedDocumentsGuidFormatRoute, (c) => {
    throw new Error('Not implemented')
  })

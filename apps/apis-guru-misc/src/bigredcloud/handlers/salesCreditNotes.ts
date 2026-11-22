import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SalesCreditNotesIdRoute,
  getV1SalesCreditNotesIdRoute,
  getV1SalesCreditNotesRoute,
  postV1SalesCreditNotesRoute,
  putV1SalesCreditNotesBatchRoute,
  putV1SalesCreditNotesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesCreditNotesHandler = app
  .openapi(getV1SalesCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesCreditNotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

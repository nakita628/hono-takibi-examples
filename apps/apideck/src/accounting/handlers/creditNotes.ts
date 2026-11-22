import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCreditNotesIdRoute,
  getAccountingCreditNotesIdRoute,
  getAccountingCreditNotesRoute,
  patchAccountingCreditNotesIdRoute,
  postAccountingCreditNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditNotesHandler = app
  .openapi(getAccountingCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

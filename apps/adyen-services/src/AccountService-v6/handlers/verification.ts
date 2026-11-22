import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCheckAccountHolderRoute,
  postDeleteBankAccountsRoute,
  postDeleteLegalArrangementsRoute,
  postDeletePayoutMethodsRoute,
  postDeleteShareholdersRoute,
  postDeleteSignatoriesRoute,
  postGetUploadedDocumentsRoute,
  postUploadDocumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verificationHandler = app
  .openapi(postCheckAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteLegalArrangementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeletePayoutMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteShareholdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteSignatoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetUploadedDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })

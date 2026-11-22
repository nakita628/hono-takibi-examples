import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1QuotesIdRoute,
  getApiV1CreditInvitationKeyDownloadRoute,
  getApiV1QuoteInvitationKeyDownloadRoute,
  getApiV1QuotesCreateRoute,
  getApiV1QuotesIdActionRoute,
  getApiV1QuotesIdEditRoute,
  getApiV1QuotesIdRoute,
  getApiV1QuotesRoute,
  postApiV1QuotesBulkRoute,
  postApiV1QuotesIdUploadRoute,
  postApiV1QuotesRoute,
  putApiV1QuotesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getApiV1CreditInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuotesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QuoteInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QuotesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })

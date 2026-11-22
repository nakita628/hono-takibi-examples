import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1QuotesIdRoute,
  getV1QuotesIdRoute,
  getV1QuotesRoute,
  postV1QuotesCreateQuoteWithGeneratingReferenceRoute,
  postV1QuotesGenerateSaleInvoiceRoute,
  postV1QuotesRoute,
  putV1QuotesBatchRoute,
  putV1QuotesCloseIdRoute,
  putV1QuotesIdRoute,
  putV1QuotesReopenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quoteHandler = app
  .openapi(getV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesCloseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesCreateQuoteWithGeneratingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesGenerateSaleInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesReopenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

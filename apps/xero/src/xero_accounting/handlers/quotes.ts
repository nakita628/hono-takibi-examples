import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuotesQuoteIDAttachmentsAttachmentIDRoute,
  getQuotesQuoteIDAttachmentsFileNameRoute,
  getQuotesQuoteIDAttachmentsRoute,
  getQuotesQuoteIDHistoryRoute,
  getQuotesQuoteIDPdfRoute,
  getQuotesQuoteIDRoute,
  getQuotesRoute,
  postQuotesQuoteIDAttachmentsFileNameRoute,
  postQuotesQuoteIDRoute,
  postQuotesRoute,
  putQuotesQuoteIDAttachmentsFileNameRoute,
  putQuotesQuoteIDHistoryRoute,
  putQuotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })

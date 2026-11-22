import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuotesQuoteIdFinancePayablesPayableIdRoute,
  deleteQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  deleteQuotesQuoteIdRoute,
  getQuotesIdsRoute,
  getQuotesQuoteIdCustomFieldsRoute,
  getQuotesQuoteIdDatesRoute,
  getQuotesQuoteIdFinanceRoute,
  getQuotesQuoteIdInstructionsRoute,
  getQuotesQuoteIdRoute,
  postQuotesQuoteIdConfirmationSendRoute,
  postQuotesQuoteIdFinancePayablesRoute,
  postQuotesQuoteIdFinanceReceivablesRoute,
  postQuotesQuoteIdLanguageCombinationsRoute,
  postQuotesQuoteIdStartRoute,
  postQuotesQuoteIdTasksRoute,
  putQuotesQuoteIdCustomFieldsRoute,
  putQuotesQuoteIdFinancePayablesPayableIdRoute,
  putQuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  putQuotesQuoteIdInstructionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesClassicHandler = app
  .openapi(getQuotesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdConfirmationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdFinanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdFinancePayablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuotesQuoteIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdFinanceReceivablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuotesQuoteIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdLanguageCombinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })

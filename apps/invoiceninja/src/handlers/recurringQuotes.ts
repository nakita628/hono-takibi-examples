import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RecurringQuotesIdRoute,
  getApiV1RecurringQuotesCreateRoute,
  getApiV1RecurringQuotesIdActionRoute,
  getApiV1RecurringQuotesIdEditRoute,
  getApiV1RecurringQuotesIdRoute,
  getApiV1RecurringQuotesRoute,
  postApiV1RecurringQuotesBulkRoute,
  postApiV1RecurringQuotesRoute,
  putApiV1RecurringQuotesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringQuotesHandler = app
  .openapi(getApiV1RecurringQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringQuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringQuotesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringQuotesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })

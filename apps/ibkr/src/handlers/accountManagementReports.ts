import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1StatementsAvailableRoute,
  getGwApiV1TaxDocumentsAvailableRoute,
  getGwApiV1TradeConfirmationsAvailableRoute,
  postGwApiV1StatementsRoute,
  postGwApiV1TaxDocumentsRoute,
  postGwApiV1TradeConfirmationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountManagementReportsHandler = app
  .openapi(postGwApiV1StatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1TaxDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1TradeConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1StatementsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxDocumentsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TradeConfirmationsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })

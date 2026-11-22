import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConsentsConsentIdRoute,
  getV1AccountsAccountIdBalancesRoute,
  getV1AccountsAccountIdRoute,
  getV1AccountsAccountIdTransactionsRoute,
  getV1AccountsAccountIdTransactionsTransactionIdRoute,
  getV1AccountsRoute,
  getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
  getV1ConsentsConsentIdAuthorisationsRoute,
  getV1ConsentsConsentIdRoute,
  getV1ConsentsConsentIdStatusRoute,
  postV1ConsentsConsentIdAuthorisationsRoute,
  postV1ConsentsRoute,
  putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountInformationServiceAISHandler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConsentsConsentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

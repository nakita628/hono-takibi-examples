import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountHoldersIdBalanceAccountsRoute,
  getAccountHoldersIdRoute,
  getAccountHoldersIdTaxFormsRoute,
  getAccountHoldersIdTaxFormSummaryRoute,
  getAccountHoldersIdTransactionRulesRoute,
  patchAccountHoldersIdRoute,
  postAccountHoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHoldersHandler = app
  .openapi(postAccountHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountHoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountHoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountHoldersIdBalanceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountHoldersIdTaxFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountHoldersIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountHoldersIdTaxFormSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRoute,
  getCompaniesCompanyIdDataBankingTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataBankingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })

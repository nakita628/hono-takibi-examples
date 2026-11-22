import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountTransactionsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionCategoriesHandler = app
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

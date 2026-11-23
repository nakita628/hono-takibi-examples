import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute,
  getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceOverviewHandler = app
  .openapi(getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })

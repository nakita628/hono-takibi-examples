import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute,
  getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute,
  postBalanceTransfersRoute,
} from './routes'
import {
  getBalanceOverviewCompaniesCompanyAccountCodeBalancesRouteHandler,
  getBalanceOverviewMerchantsMerchantAccountCodeBalancesRouteHandler,
  postBalanceTransfersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute,
    getBalanceOverviewCompaniesCompanyAccountCodeBalancesRouteHandler,
  )
  .openapi(
    getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute,
    getBalanceOverviewMerchantsMerchantAccountCodeBalancesRouteHandler,
  )
  .openapi(postBalanceTransfersRoute, postBalanceTransfersRouteHandler)

export default app

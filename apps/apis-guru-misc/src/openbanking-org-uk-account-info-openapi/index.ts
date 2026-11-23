import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccessConsentsConsentIdRoute,
  getAccountAccessConsentsConsentIdRoute,
  getAccountsAccountIdBalancesRoute,
  getAccountsAccountIdBeneficiariesRoute,
  getAccountsAccountIdDirectDebitsRoute,
  getAccountsAccountIdOffersRoute,
  getAccountsAccountIdPartiesRoute,
  getAccountsAccountIdPartyRoute,
  getAccountsAccountIdProductRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdScheduledPaymentsRoute,
  getAccountsAccountIdStandingOrdersRoute,
  getAccountsAccountIdStatementsRoute,
  getAccountsAccountIdStatementsStatementIdFileRoute,
  getAccountsAccountIdStatementsStatementIdRoute,
  getAccountsAccountIdStatementsStatementIdTransactionsRoute,
  getAccountsAccountIdTransactionsRoute,
  getAccountsRoute,
  getBalancesRoute,
  getBeneficiariesRoute,
  getDirectDebitsRoute,
  getOffersRoute,
  getPartyRoute,
  getProductsRoute,
  getScheduledPaymentsRoute,
  getStandingOrdersRoute,
  getStatementsRoute,
  getTransactionsRoute,
  postAccountAccessConsentsRoute,
} from './routes'
import {
  deleteAccountAccessConsentsConsentIdRouteHandler,
  getAccountAccessConsentsConsentIdRouteHandler,
  getAccountsAccountIdBalancesRouteHandler,
  getAccountsAccountIdBeneficiariesRouteHandler,
  getAccountsAccountIdDirectDebitsRouteHandler,
  getAccountsAccountIdOffersRouteHandler,
  getAccountsAccountIdPartiesRouteHandler,
  getAccountsAccountIdPartyRouteHandler,
  getAccountsAccountIdProductRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsAccountIdScheduledPaymentsRouteHandler,
  getAccountsAccountIdStandingOrdersRouteHandler,
  getAccountsAccountIdStatementsRouteHandler,
  getAccountsAccountIdStatementsStatementIdFileRouteHandler,
  getAccountsAccountIdStatementsStatementIdRouteHandler,
  getAccountsAccountIdStatementsStatementIdTransactionsRouteHandler,
  getAccountsAccountIdTransactionsRouteHandler,
  getAccountsRouteHandler,
  getBalancesRouteHandler,
  getBeneficiariesRouteHandler,
  getDirectDebitsRouteHandler,
  getOffersRouteHandler,
  getPartyRouteHandler,
  getProductsRouteHandler,
  getScheduledPaymentsRouteHandler,
  getStandingOrdersRouteHandler,
  getStatementsRouteHandler,
  getTransactionsRouteHandler,
  postAccountAccessConsentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountAccessConsentsRoute, postAccountAccessConsentsRouteHandler)
  .openapi(
    deleteAccountAccessConsentsConsentIdRoute,
    deleteAccountAccessConsentsConsentIdRouteHandler,
  )
  .openapi(getAccountAccessConsentsConsentIdRoute, getAccountAccessConsentsConsentIdRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdBalancesRoute, getAccountsAccountIdBalancesRouteHandler)
  .openapi(getAccountsAccountIdBeneficiariesRoute, getAccountsAccountIdBeneficiariesRouteHandler)
  .openapi(getAccountsAccountIdDirectDebitsRoute, getAccountsAccountIdDirectDebitsRouteHandler)
  .openapi(getAccountsAccountIdOffersRoute, getAccountsAccountIdOffersRouteHandler)
  .openapi(getAccountsAccountIdPartiesRoute, getAccountsAccountIdPartiesRouteHandler)
  .openapi(getAccountsAccountIdPartyRoute, getAccountsAccountIdPartyRouteHandler)
  .openapi(getAccountsAccountIdProductRoute, getAccountsAccountIdProductRouteHandler)
  .openapi(
    getAccountsAccountIdScheduledPaymentsRoute,
    getAccountsAccountIdScheduledPaymentsRouteHandler,
  )
  .openapi(getAccountsAccountIdStandingOrdersRoute, getAccountsAccountIdStandingOrdersRouteHandler)
  .openapi(getAccountsAccountIdStatementsRoute, getAccountsAccountIdStatementsRouteHandler)
  .openapi(
    getAccountsAccountIdStatementsStatementIdRoute,
    getAccountsAccountIdStatementsStatementIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdStatementsStatementIdFileRoute,
    getAccountsAccountIdStatementsStatementIdFileRouteHandler,
  )
  .openapi(
    getAccountsAccountIdStatementsStatementIdTransactionsRoute,
    getAccountsAccountIdStatementsStatementIdTransactionsRouteHandler,
  )
  .openapi(getAccountsAccountIdTransactionsRoute, getAccountsAccountIdTransactionsRouteHandler)
  .openapi(getBalancesRoute, getBalancesRouteHandler)
  .openapi(getBeneficiariesRoute, getBeneficiariesRouteHandler)
  .openapi(getDirectDebitsRoute, getDirectDebitsRouteHandler)
  .openapi(getOffersRoute, getOffersRouteHandler)
  .openapi(getPartyRoute, getPartyRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(getScheduledPaymentsRoute, getScheduledPaymentsRouteHandler)
  .openapi(getStandingOrdersRoute, getStandingOrdersRouteHandler)
  .openapi(getStatementsRoute, getStatementsRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)

export default app

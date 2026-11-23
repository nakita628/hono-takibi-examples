import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccessConsentsConsentIdRoute,
  deleteSandboxSandboxIdRoute,
  getAccountAccessConsentsConsentIdRoute,
  getAccountsAccountIdBalancesRoute,
  getAccountsAccountIdBeneficiariesRoute,
  getAccountsAccountIdPartiesRoute,
  getAccountsAccountIdPartyRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdScheduledPaymentsRoute,
  getAccountsAccountIdStandingOrdersRoute,
  getAccountsAccountIdStatementsRoute,
  getAccountsAccountIdStatementsStatementIdFileRoute,
  getAccountsAccountIdStatementsStatementIdRoute,
  getAccountsAccountIdStatementsStatementIdTransactionsRoute,
  getAccountsAccountIdTransactionsRoute,
  getAccountsRoute,
  getPartyRoute,
  getSandboxSandboxIdRoute,
  postAccountAccessConsentsRoute,
  postSandboxRoute,
  putSandboxRoute,
} from './routes'
import {
  deleteAccountAccessConsentsConsentIdRouteHandler,
  deleteSandboxSandboxIdRouteHandler,
  getAccountAccessConsentsConsentIdRouteHandler,
  getAccountsAccountIdBalancesRouteHandler,
  getAccountsAccountIdBeneficiariesRouteHandler,
  getAccountsAccountIdPartiesRouteHandler,
  getAccountsAccountIdPartyRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsAccountIdScheduledPaymentsRouteHandler,
  getAccountsAccountIdStandingOrdersRouteHandler,
  getAccountsAccountIdStatementsRouteHandler,
  getAccountsAccountIdStatementsStatementIdFileRouteHandler,
  getAccountsAccountIdStatementsStatementIdRouteHandler,
  getAccountsAccountIdStatementsStatementIdTransactionsRouteHandler,
  getAccountsAccountIdTransactionsRouteHandler,
  getAccountsRouteHandler,
  getPartyRouteHandler,
  getSandboxSandboxIdRouteHandler,
  postAccountAccessConsentsRouteHandler,
  postSandboxRouteHandler,
  putSandboxRouteHandler,
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
  .openapi(getAccountsAccountIdPartiesRoute, getAccountsAccountIdPartiesRouteHandler)
  .openapi(getAccountsAccountIdPartyRoute, getAccountsAccountIdPartyRouteHandler)
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
  .openapi(getPartyRoute, getPartyRouteHandler)
  .openapi(postSandboxRoute, postSandboxRouteHandler)
  .openapi(putSandboxRoute, putSandboxRouteHandler)
  .openapi(deleteSandboxSandboxIdRoute, deleteSandboxSandboxIdRouteHandler)
  .openapi(getSandboxSandboxIdRoute, getSandboxSandboxIdRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAtmsRoute,
  getBranchesRoute,
  getBusinessCurrentAccountsRoute,
  getCommercialCreditCardsRoute,
  getPersonalCurrentAccountsRoute,
  getUnsecuredSmeLoansRoute,
  headAtmsRoute,
  headBranchesRoute,
  headBusinessCurrentAccountsRoute,
  headCommercialCreditCardsRoute,
  headPersonalCurrentAccountsRoute,
  headUnsecuredSmeLoansRoute,
} from './routes'
import {
  getAtmsRouteHandler,
  getBranchesRouteHandler,
  getBusinessCurrentAccountsRouteHandler,
  getCommercialCreditCardsRouteHandler,
  getPersonalCurrentAccountsRouteHandler,
  getUnsecuredSmeLoansRouteHandler,
  headAtmsRouteHandler,
  headBranchesRouteHandler,
  headBusinessCurrentAccountsRouteHandler,
  headCommercialCreditCardsRouteHandler,
  headPersonalCurrentAccountsRouteHandler,
  headUnsecuredSmeLoansRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAtmsRoute, getAtmsRouteHandler)
  .openapi(headAtmsRoute, headAtmsRouteHandler)
  .openapi(getBranchesRoute, getBranchesRouteHandler)
  .openapi(headBranchesRoute, headBranchesRouteHandler)
  .openapi(getBusinessCurrentAccountsRoute, getBusinessCurrentAccountsRouteHandler)
  .openapi(headBusinessCurrentAccountsRoute, headBusinessCurrentAccountsRouteHandler)
  .openapi(getCommercialCreditCardsRoute, getCommercialCreditCardsRouteHandler)
  .openapi(headCommercialCreditCardsRoute, headCommercialCreditCardsRouteHandler)
  .openapi(getPersonalCurrentAccountsRoute, getPersonalCurrentAccountsRouteHandler)
  .openapi(headPersonalCurrentAccountsRoute, headPersonalCurrentAccountsRouteHandler)
  .openapi(getUnsecuredSmeLoansRoute, getUnsecuredSmeLoansRouteHandler)
  .openapi(headUnsecuredSmeLoansRoute, headUnsecuredSmeLoansRouteHandler)

export default app

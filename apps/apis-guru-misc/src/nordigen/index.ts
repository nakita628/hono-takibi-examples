import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AgreementsEnduserIdIndexRoute,
  deleteApiV2PaymentsCreditorsIdIndexRoute,
  deleteApiV2PaymentsIdIndexRoute,
  deleteApiV2RequisitionsIdIndexRoute,
  getApiV2AccountsIdBalancesIndexRoute,
  getApiV2AccountsIdDetailsIndexRoute,
  getApiV2AccountsIdIndexRoute,
  getApiV2AccountsIdTransactionsIndexRoute,
  getApiV2AccountsPremiumIdTransactionsIndexRoute,
  getApiV2AgreementsEnduserIdIndexRoute,
  getApiV2AgreementsEnduserIndexRoute,
  getApiV2InstitutionsIdIndexRoute,
  getApiV2InstitutionsIndexRoute,
  getApiV2PaymentsAccountIndexRoute,
  getApiV2PaymentsCreditorsIdIndexRoute,
  getApiV2PaymentsCreditorsIndexRoute,
  getApiV2PaymentsFieldsInstitutionIdIndexRoute,
  getApiV2PaymentsIdIndexRoute,
  getApiV2PaymentsIndexRoute,
  getApiV2RequisitionsIdIndexRoute,
  getApiV2RequisitionsIndexRoute,
  postApiV2AgreementsEnduserIndexRoute,
  postApiV2PaymentsCreditorsIndexRoute,
  postApiV2PaymentsIndexRoute,
  postApiV2RequisitionsIndexRoute,
  postApiV2TokenNewIndexRoute,
  postApiV2TokenRefreshIndexRoute,
  putApiV2AgreementsEnduserIdAcceptIndexRoute,
} from './routes'
import {
  deleteApiV2AgreementsEnduserIdIndexRouteHandler,
  deleteApiV2PaymentsCreditorsIdIndexRouteHandler,
  deleteApiV2PaymentsIdIndexRouteHandler,
  deleteApiV2RequisitionsIdIndexRouteHandler,
  getApiV2AccountsIdBalancesIndexRouteHandler,
  getApiV2AccountsIdDetailsIndexRouteHandler,
  getApiV2AccountsIdIndexRouteHandler,
  getApiV2AccountsIdTransactionsIndexRouteHandler,
  getApiV2AccountsPremiumIdTransactionsIndexRouteHandler,
  getApiV2AgreementsEnduserIdIndexRouteHandler,
  getApiV2AgreementsEnduserIndexRouteHandler,
  getApiV2InstitutionsIdIndexRouteHandler,
  getApiV2InstitutionsIndexRouteHandler,
  getApiV2PaymentsAccountIndexRouteHandler,
  getApiV2PaymentsCreditorsIdIndexRouteHandler,
  getApiV2PaymentsCreditorsIndexRouteHandler,
  getApiV2PaymentsFieldsInstitutionIdIndexRouteHandler,
  getApiV2PaymentsIdIndexRouteHandler,
  getApiV2PaymentsIndexRouteHandler,
  getApiV2RequisitionsIdIndexRouteHandler,
  getApiV2RequisitionsIndexRouteHandler,
  postApiV2AgreementsEnduserIndexRouteHandler,
  postApiV2PaymentsCreditorsIndexRouteHandler,
  postApiV2PaymentsIndexRouteHandler,
  postApiV2RequisitionsIndexRouteHandler,
  postApiV2TokenNewIndexRouteHandler,
  postApiV2TokenRefreshIndexRouteHandler,
  putApiV2AgreementsEnduserIdAcceptIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiV2AccountsPremiumIdTransactionsIndexRoute,
    getApiV2AccountsPremiumIdTransactionsIndexRouteHandler,
  )
  .openapi(getApiV2AccountsIdIndexRoute, getApiV2AccountsIdIndexRouteHandler)
  .openapi(getApiV2AccountsIdBalancesIndexRoute, getApiV2AccountsIdBalancesIndexRouteHandler)
  .openapi(getApiV2AccountsIdDetailsIndexRoute, getApiV2AccountsIdDetailsIndexRouteHandler)
  .openapi(
    getApiV2AccountsIdTransactionsIndexRoute,
    getApiV2AccountsIdTransactionsIndexRouteHandler,
  )
  .openapi(getApiV2AgreementsEnduserIndexRoute, getApiV2AgreementsEnduserIndexRouteHandler)
  .openapi(postApiV2AgreementsEnduserIndexRoute, postApiV2AgreementsEnduserIndexRouteHandler)
  .openapi(
    deleteApiV2AgreementsEnduserIdIndexRoute,
    deleteApiV2AgreementsEnduserIdIndexRouteHandler,
  )
  .openapi(getApiV2AgreementsEnduserIdIndexRoute, getApiV2AgreementsEnduserIdIndexRouteHandler)
  .openapi(
    putApiV2AgreementsEnduserIdAcceptIndexRoute,
    putApiV2AgreementsEnduserIdAcceptIndexRouteHandler,
  )
  .openapi(getApiV2InstitutionsIndexRoute, getApiV2InstitutionsIndexRouteHandler)
  .openapi(getApiV2InstitutionsIdIndexRoute, getApiV2InstitutionsIdIndexRouteHandler)
  .openapi(getApiV2PaymentsIndexRoute, getApiV2PaymentsIndexRouteHandler)
  .openapi(postApiV2PaymentsIndexRoute, postApiV2PaymentsIndexRouteHandler)
  .openapi(getApiV2PaymentsAccountIndexRoute, getApiV2PaymentsAccountIndexRouteHandler)
  .openapi(getApiV2PaymentsCreditorsIndexRoute, getApiV2PaymentsCreditorsIndexRouteHandler)
  .openapi(postApiV2PaymentsCreditorsIndexRoute, postApiV2PaymentsCreditorsIndexRouteHandler)
  .openapi(
    deleteApiV2PaymentsCreditorsIdIndexRoute,
    deleteApiV2PaymentsCreditorsIdIndexRouteHandler,
  )
  .openapi(getApiV2PaymentsCreditorsIdIndexRoute, getApiV2PaymentsCreditorsIdIndexRouteHandler)
  .openapi(
    getApiV2PaymentsFieldsInstitutionIdIndexRoute,
    getApiV2PaymentsFieldsInstitutionIdIndexRouteHandler,
  )
  .openapi(deleteApiV2PaymentsIdIndexRoute, deleteApiV2PaymentsIdIndexRouteHandler)
  .openapi(getApiV2PaymentsIdIndexRoute, getApiV2PaymentsIdIndexRouteHandler)
  .openapi(getApiV2RequisitionsIndexRoute, getApiV2RequisitionsIndexRouteHandler)
  .openapi(postApiV2RequisitionsIndexRoute, postApiV2RequisitionsIndexRouteHandler)
  .openapi(deleteApiV2RequisitionsIdIndexRoute, deleteApiV2RequisitionsIdIndexRouteHandler)
  .openapi(getApiV2RequisitionsIdIndexRoute, getApiV2RequisitionsIdIndexRouteHandler)
  .openapi(postApiV2TokenNewIndexRoute, postApiV2TokenNewIndexRouteHandler)
  .openapi(postApiV2TokenRefreshIndexRoute, postApiV2TokenRefreshIndexRouteHandler)

export default app

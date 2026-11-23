import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DomainsDomainPrivacyRoute,
  deleteV1DomainsDomainRecordsTypeNameRoute,
  deleteV1DomainsDomainRoute,
  deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
  deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV1DomainsAgreementsRoute,
  getV1DomainsAvailableRoute,
  getV1DomainsDomainRecordsTypeNameRoute,
  getV1DomainsDomainRoute,
  getV1DomainsPurchaseSchemaTldRoute,
  getV1DomainsRoute,
  getV1DomainsSuggestRoute,
  getV1DomainsTldsRoute,
  getV2CustomersCustomerIdDomainsDomainActionsRoute,
  getV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
  getV2CustomersCustomerIdDomainsDomainRoute,
  getV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV2CustomersCustomerIdDomainsNotificationsOptInRoute,
  getV2CustomersCustomerIdDomainsNotificationsRoute,
  getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute,
  getV2DomainsMaintenancesMaintenanceIdRoute,
  getV2DomainsMaintenancesRoute,
  patchV1DomainsDomainContactsRoute,
  patchV1DomainsDomainRecordsRoute,
  patchV1DomainsDomainRoute,
  postV1DomainsAvailableRoute,
  postV1DomainsContactsValidateRoute,
  postV1DomainsDomainPrivacyPurchaseRoute,
  postV1DomainsDomainRenewRoute,
  postV1DomainsDomainTransferRoute,
  postV1DomainsDomainVerifyRegistrantEmailRoute,
  postV1DomainsPurchaseRoute,
  postV1DomainsPurchaseValidateRoute,
  postV2CustomersCustomerIdDomainsDomainRedeemRoute,
  postV2CustomersCustomerIdDomainsDomainTransferOutRoute,
  postV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute,
  putV1DomainsDomainRecordsRoute,
  putV1DomainsDomainRecordsTypeNameRoute,
  putV1DomainsDomainRecordsTypeRoute,
  putV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  putV2CustomersCustomerIdDomainsNotificationsOptInRoute,
} from './routes'
import {
  deleteV1DomainsDomainPrivacyRouteHandler,
  deleteV1DomainsDomainRecordsTypeNameRouteHandler,
  deleteV1DomainsDomainRouteHandler,
  deleteV2CustomersCustomerIdDomainsDomainActionsTypeRouteHandler,
  deleteV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  getV1DomainsAgreementsRouteHandler,
  getV1DomainsAvailableRouteHandler,
  getV1DomainsDomainRecordsTypeNameRouteHandler,
  getV1DomainsDomainRouteHandler,
  getV1DomainsPurchaseSchemaTldRouteHandler,
  getV1DomainsRouteHandler,
  getV1DomainsSuggestRouteHandler,
  getV1DomainsTldsRouteHandler,
  getV2CustomersCustomerIdDomainsDomainActionsRouteHandler,
  getV2CustomersCustomerIdDomainsDomainActionsTypeRouteHandler,
  getV2CustomersCustomerIdDomainsDomainRouteHandler,
  getV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  getV2CustomersCustomerIdDomainsNotificationsOptInRouteHandler,
  getV2CustomersCustomerIdDomainsNotificationsRouteHandler,
  getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRouteHandler,
  getV2DomainsMaintenancesMaintenanceIdRouteHandler,
  getV2DomainsMaintenancesRouteHandler,
  patchV1DomainsDomainContactsRouteHandler,
  patchV1DomainsDomainRecordsRouteHandler,
  patchV1DomainsDomainRouteHandler,
  postV1DomainsAvailableRouteHandler,
  postV1DomainsContactsValidateRouteHandler,
  postV1DomainsDomainPrivacyPurchaseRouteHandler,
  postV1DomainsDomainRenewRouteHandler,
  postV1DomainsDomainTransferRouteHandler,
  postV1DomainsDomainVerifyRegistrantEmailRouteHandler,
  postV1DomainsPurchaseRouteHandler,
  postV1DomainsPurchaseValidateRouteHandler,
  postV2CustomersCustomerIdDomainsDomainRedeemRouteHandler,
  postV2CustomersCustomerIdDomainsDomainTransferOutRouteHandler,
  postV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRouteHandler,
  putV1DomainsDomainRecordsRouteHandler,
  putV1DomainsDomainRecordsTypeNameRouteHandler,
  putV1DomainsDomainRecordsTypeRouteHandler,
  putV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  putV2CustomersCustomerIdDomainsNotificationsOptInRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1DomainsRoute, getV1DomainsRouteHandler)
  .openapi(getV1DomainsAgreementsRoute, getV1DomainsAgreementsRouteHandler)
  .openapi(getV1DomainsAvailableRoute, getV1DomainsAvailableRouteHandler)
  .openapi(postV1DomainsAvailableRoute, postV1DomainsAvailableRouteHandler)
  .openapi(postV1DomainsContactsValidateRoute, postV1DomainsContactsValidateRouteHandler)
  .openapi(postV1DomainsPurchaseRoute, postV1DomainsPurchaseRouteHandler)
  .openapi(getV1DomainsPurchaseSchemaTldRoute, getV1DomainsPurchaseSchemaTldRouteHandler)
  .openapi(postV1DomainsPurchaseValidateRoute, postV1DomainsPurchaseValidateRouteHandler)
  .openapi(getV1DomainsSuggestRoute, getV1DomainsSuggestRouteHandler)
  .openapi(getV1DomainsTldsRoute, getV1DomainsTldsRouteHandler)
  .openapi(deleteV1DomainsDomainRoute, deleteV1DomainsDomainRouteHandler)
  .openapi(getV1DomainsDomainRoute, getV1DomainsDomainRouteHandler)
  .openapi(patchV1DomainsDomainRoute, patchV1DomainsDomainRouteHandler)
  .openapi(patchV1DomainsDomainContactsRoute, patchV1DomainsDomainContactsRouteHandler)
  .openapi(deleteV1DomainsDomainPrivacyRoute, deleteV1DomainsDomainPrivacyRouteHandler)
  .openapi(postV1DomainsDomainPrivacyPurchaseRoute, postV1DomainsDomainPrivacyPurchaseRouteHandler)
  .openapi(patchV1DomainsDomainRecordsRoute, patchV1DomainsDomainRecordsRouteHandler)
  .openapi(putV1DomainsDomainRecordsRoute, putV1DomainsDomainRecordsRouteHandler)
  .openapi(putV1DomainsDomainRecordsTypeRoute, putV1DomainsDomainRecordsTypeRouteHandler)
  .openapi(
    deleteV1DomainsDomainRecordsTypeNameRoute,
    deleteV1DomainsDomainRecordsTypeNameRouteHandler,
  )
  .openapi(getV1DomainsDomainRecordsTypeNameRoute, getV1DomainsDomainRecordsTypeNameRouteHandler)
  .openapi(putV1DomainsDomainRecordsTypeNameRoute, putV1DomainsDomainRecordsTypeNameRouteHandler)
  .openapi(postV1DomainsDomainRenewRoute, postV1DomainsDomainRenewRouteHandler)
  .openapi(postV1DomainsDomainTransferRoute, postV1DomainsDomainTransferRouteHandler)
  .openapi(
    postV1DomainsDomainVerifyRegistrantEmailRoute,
    postV1DomainsDomainVerifyRegistrantEmailRouteHandler,
  )
  .openapi(
    deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute,
    deleteV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsForwardsFqdnRoute,
    getV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  )
  .openapi(
    postV2CustomersCustomerIdDomainsForwardsFqdnRoute,
    postV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  )
  .openapi(
    putV2CustomersCustomerIdDomainsForwardsFqdnRoute,
    putV2CustomersCustomerIdDomainsForwardsFqdnRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsNotificationsRoute,
    getV2CustomersCustomerIdDomainsNotificationsRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsNotificationsOptInRoute,
    getV2CustomersCustomerIdDomainsNotificationsOptInRouteHandler,
  )
  .openapi(
    putV2CustomersCustomerIdDomainsNotificationsOptInRoute,
    putV2CustomersCustomerIdDomainsNotificationsOptInRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute,
    getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRouteHandler,
  )
  .openapi(
    postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute,
    postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsDomainRoute,
    getV2CustomersCustomerIdDomainsDomainRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsDomainActionsRoute,
    getV2CustomersCustomerIdDomainsDomainActionsRouteHandler,
  )
  .openapi(
    deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
    deleteV2CustomersCustomerIdDomainsDomainActionsTypeRouteHandler,
  )
  .openapi(
    getV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
    getV2CustomersCustomerIdDomainsDomainActionsTypeRouteHandler,
  )
  .openapi(
    postV2CustomersCustomerIdDomainsDomainRedeemRoute,
    postV2CustomersCustomerIdDomainsDomainRedeemRouteHandler,
  )
  .openapi(
    postV2CustomersCustomerIdDomainsDomainTransferOutRoute,
    postV2CustomersCustomerIdDomainsDomainTransferOutRouteHandler,
  )
  .openapi(getV2DomainsMaintenancesRoute, getV2DomainsMaintenancesRouteHandler)
  .openapi(
    getV2DomainsMaintenancesMaintenanceIdRoute,
    getV2DomainsMaintenancesMaintenanceIdRouteHandler,
  )

export default app

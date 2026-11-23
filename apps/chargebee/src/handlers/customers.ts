import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomersCustomerIdContactsRoute,
  getCustomersCustomerIdCustomerEntitlementsRoute,
  getCustomersCustomerIdEmailLogsRoute,
  getCustomersCustomerIdHierarchyDetailRoute,
  getCustomersCustomerIdHierarchyRoute,
  getCustomersCustomerIdPaymentVouchersRoute,
  getCustomersCustomerIdRoute,
  getCustomersCustomerIdUpcomingInvoicesEstimateRoute,
  getCustomersRoute,
  postCustomersCustomerIdAddContactRoute,
  postCustomersCustomerIdAssignPaymentRoleRoute,
  postCustomersCustomerIdChangeBillingDateRoute,
  postCustomersCustomerIdClearPersonalDataRoute,
  postCustomersCustomerIdCollectPaymentRoute,
  postCustomersCustomerIdCopyCardRoute,
  postCustomersCustomerIdCreateSubscriptionForItemsEstimateRoute,
  postCustomersCustomerIdCreateSubscriptionQuoteForItemsRoute,
  postCustomersCustomerIdCreditCardRoute,
  postCustomersCustomerIdDeleteCardRoute,
  postCustomersCustomerIdDeleteContactRoute,
  postCustomersCustomerIdDeleteRelationshipRoute,
  postCustomersCustomerIdDeleteRoute,
  postCustomersCustomerIdImportForItemsRoute,
  postCustomersCustomerIdRecordExcessPaymentRoute,
  postCustomersCustomerIdRelationshipsRoute,
  postCustomersCustomerIdRoute,
  postCustomersCustomerIdSendPaymentRequestRoute,
  postCustomersCustomerIdSubscriptionForItemsRoute,
  postCustomersCustomerIdSwitchGatewayRoute,
  postCustomersCustomerIdUpdateBillingInfoRoute,
  postCustomersCustomerIdUpdateContactRoute,
  postCustomersCustomerIdUpdateHierarchySettingsRoute,
  postCustomersCustomerIdUpdatePaymentMethodRoute,
  postCustomersMergeRoute,
  postCustomersMoveRoute,
  postCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(postCustomersCustomerIdImportForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdSubscriptionForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdDeleteRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdDeleteContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAssignPaymentRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdUpdatePaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdClearPersonalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdRecordExcessPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdSendPaymentRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdUpdateHierarchySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdUpdateBillingInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdHierarchyDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdChangeBillingDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdAddContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdCollectPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdUpdateContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdCopyCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdSwitchGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdDeleteCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdEmailLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdUpcomingInvoicesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdCreateSubscriptionForItemsEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersCustomerIdCreateSubscriptionQuoteForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCustomerEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdPaymentVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })

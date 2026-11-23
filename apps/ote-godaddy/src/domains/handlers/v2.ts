import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
  deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV2CustomersCustomerIdDomainsDomainActionsRoute,
  getV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
  getV2CustomersCustomerIdDomainsDomainRoute,
  getV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV2CustomersCustomerIdDomainsNotificationsOptInRoute,
  getV2CustomersCustomerIdDomainsNotificationsRoute,
  getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute,
  getV2DomainsMaintenancesMaintenanceIdRoute,
  getV2DomainsMaintenancesRoute,
  postV2CustomersCustomerIdDomainsDomainRedeemRoute,
  postV2CustomersCustomerIdDomainsDomainTransferOutRoute,
  postV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute,
  putV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  putV2CustomersCustomerIdDomainsNotificationsOptInRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsForwardsFqdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdDomainsForwardsFqdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdDomainsForwardsFqdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsNotificationsOptInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdDomainsNotificationsOptInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsDomainActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsDomainActionsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdDomainsDomainRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdDomainsDomainTransferOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsMaintenancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsMaintenancesMaintenanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

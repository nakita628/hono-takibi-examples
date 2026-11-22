import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV2CustomersCustomerIdDomainsDomainRoute,
  getV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  getV2DomainsMaintenancesMaintenanceIdRoute,
  getV2DomainsMaintenancesRoute,
  postV2CustomersCustomerIdDomainsDomainRedeemRoute,
  postV2CustomersCustomerIdDomainsDomainTransferOutRoute,
  postV2CustomersCustomerIdDomainsForwardsFqdnRoute,
  putV2CustomersCustomerIdDomainsForwardsFqdnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
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
  .openapi(getV2CustomersCustomerIdDomainsDomainRoute, (c) => {
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
  getV2CustomersCustomerIdDomainsDomainActionsRoute,
  getV2CustomersCustomerIdDomainsDomainActionsTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(getV2CustomersCustomerIdDomainsDomainActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdDomainsDomainActionsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

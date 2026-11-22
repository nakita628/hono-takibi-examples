import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomersCustomerIdDomainsNotificationsOptInRoute,
  getV2CustomersCustomerIdDomainsNotificationsRoute,
  getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute,
  postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute,
  putV2CustomersCustomerIdDomainsNotificationsOptInRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute,
  deleteV4ProvisioningCustomersCustomerIdRoute,
  deleteV4ProvisioningWebhooksWebhookIdRoute,
  getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  getV4ProvisioningCustomersCustomerIdRoute,
  getV4ProvisioningCustomersCustomerIdUsersRoute,
  getV4ProvisioningCustomersRoute,
  getV4ProvisioningWebhooksEventTypesRoute,
  getV4ProvisioningWebhooksRoute,
  getV4ProvisioningWebhooksWebhookIdRoute,
  postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  postV4ProvisioningCustomersRoute,
  postV4ProvisioningWebhooksRoute,
  postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute,
  putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  putV4ProvisioningCustomersCustomerIdRoute,
  putV4ProvisioningWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const provisioningHandler = app
  .openapi(getV4ProvisioningCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })

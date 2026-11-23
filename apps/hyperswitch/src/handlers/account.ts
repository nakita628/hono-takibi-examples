import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccountIdBusinessProfileProfileIdRoute,
  deleteAccountAccountIdConnectorsMerchantConnectorIdRoute,
  getAccountAccountIdBusinessProfileProfileIdRoute,
  getAccountAccountIdBusinessProfileRoute,
  getAccountAccountIdConnectorsMerchantConnectorIdRoute,
  getAccountAccountIdConnectorsRoute,
  getAccountPaymentMethodsRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdRoute,
  postAccountAccountIdBusinessProfileRoute,
  postAccountAccountIdConnectorsMerchantConnectorIdRoute,
  postAccountAccountIdConnectorsRoute,
  postAccountAccountIdWebhooksMerchantConnectorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountAccountIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdConnectorsMerchantConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdConnectorsMerchantConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdConnectorsMerchantConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdWebhooksMerchantConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdBusinessProfileProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdBusinessProfileProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdBusinessProfileProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRoute, (c) => {
    throw new Error('Not implemented')
  })

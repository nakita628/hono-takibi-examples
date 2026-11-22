import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRoute,
  deleteStripeGatewayUserUserIdCardsCardIdRoute,
  getStripeGatewayDeveloperDeveloperIdAccountsRoute,
  getStripeGatewayUserUserIdCardsRoute,
  postStripeGatewayDeveloperDeveloperIdAccountsRoute,
  postStripeGatewayUserUserIdCardsCardIdRoute,
  postStripeGatewayUserUserIdCardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stripeGatewayProcessPaymentsAndRefundsHandler = app
  .openapi(getStripeGatewayDeveloperDeveloperIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStripeGatewayDeveloperDeveloperIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStripeGatewayUserUserIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStripeGatewayUserUserIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStripeGatewayUserUserIdCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStripeGatewayUserUserIdCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })

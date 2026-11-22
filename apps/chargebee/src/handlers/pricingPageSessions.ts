import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPricingPageSessionsCreateForExistingSubscriptionRoute,
  postPricingPageSessionsCreateForNewSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricingPageSessionsHandler = app
  .openapi(postPricingPageSessionsCreateForExistingSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingPageSessionsCreateForNewSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

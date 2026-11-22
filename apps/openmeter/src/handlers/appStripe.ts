import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1AppsIdStripeWebhookRoute,
  postApiV1StripeCheckoutSessionsRoute,
  putApiV1AppsIdStripeApiKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStripeHandler = app
  .openapi(putApiV1AppsIdStripeApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsIdStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StripeCheckoutSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })

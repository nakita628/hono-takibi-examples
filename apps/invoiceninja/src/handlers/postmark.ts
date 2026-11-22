import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1AppleConfirmPurchaseRoute,
  postApiV1AppleProcessWebhookRoute,
  postApiV1PostmarkWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postmarkHandler = app
  .openapi(postApiV1AppleConfirmPurchaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppleProcessWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PostmarkWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdWebhooksWebhookIdRoute,
  getMerchantsMerchantIdWebhooksRoute,
  getMerchantsMerchantIdWebhooksWebhookIdRoute,
  patchMerchantsMerchantIdWebhooksWebhookIdRoute,
  postMerchantsMerchantIdWebhooksRoute,
  postMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRoute,
  postMerchantsMerchantIdWebhooksWebhookIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooks__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })

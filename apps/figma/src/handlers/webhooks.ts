import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WebhooksWebhookIdRoute,
  getV2TeamsTeamIdWebhooksRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRequestsRoute,
  getV2WebhooksWebhookIdRoute,
  postV2WebhooksRoute,
  putV2WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

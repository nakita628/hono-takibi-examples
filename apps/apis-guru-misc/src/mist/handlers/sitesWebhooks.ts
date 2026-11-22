import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdWebhooksWebhookIdRoute,
  getApiV1SitesSiteIdWebhooksRoute,
  getApiV1SitesSiteIdWebhooksWebhookIdRoute,
  postApiV1SitesSiteIdWebhooksRoute,
  postApiV1SitesSiteIdWebhooksWebhookIdPingRoute,
  putApiV1SitesSiteIdWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWebhooksHandler = app
  .openapi(getApiV1SitesSiteIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })

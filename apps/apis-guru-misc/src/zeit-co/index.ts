import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsWebhooksIdRoute,
  getV1IntegrationsWebhooksRoute,
  getV4DomainsNameRoute,
  getV4DomainsRoute,
  postV1IntegrationsWebhooksRoute,
} from './routes'
import {
  deleteV1IntegrationsWebhooksIdRouteHandler,
  getV1IntegrationsWebhooksRouteHandler,
  getV4DomainsNameRouteHandler,
  getV4DomainsRouteHandler,
  postV1IntegrationsWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1IntegrationsWebhooksRoute, getV1IntegrationsWebhooksRouteHandler)
  .openapi(postV1IntegrationsWebhooksRoute, postV1IntegrationsWebhooksRouteHandler)
  .openapi(deleteV1IntegrationsWebhooksIdRoute, deleteV1IntegrationsWebhooksIdRouteHandler)
  .openapi(getV4DomainsRoute, getV4DomainsRouteHandler)
  .openapi(getV4DomainsNameRoute, getV4DomainsNameRouteHandler)

export default app

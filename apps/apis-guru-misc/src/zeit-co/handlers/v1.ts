import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1IntegrationsWebhooksIdRoute,
  getV1IntegrationsWebhooksRoute,
  postV1IntegrationsWebhooksRoute,
} from '../routes'

export const getV1IntegrationsWebhooksRouteHandler: RouteHandler<
  typeof getV1IntegrationsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationsWebhooksRouteHandler: RouteHandler<
  typeof postV1IntegrationsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1IntegrationsWebhooksIdRouteHandler: RouteHandler<
  typeof deleteV1IntegrationsWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

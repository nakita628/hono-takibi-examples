import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsWebhooksWebhookIDRoute,
  getEventsSandboxesRoute,
  getEventsSandboxesSandboxIDRoute,
  getEventsWebhooksRoute,
  getEventsWebhooksWebhookIDDeliveriesRoute,
  getEventsWebhooksWebhookIDRoute,
  getEventsWebhooksWebhookIDStatsRoute,
  patchEventsWebhooksWebhookIDRoute,
  postEventsWebhooksRoute,
} from '../routes'

export const getEventsSandboxesSandboxIDRouteHandler: RouteHandler<
  typeof getEventsSandboxesSandboxIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsSandboxesRouteHandler: RouteHandler<typeof getEventsSandboxesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEventsWebhooksRouteHandler: RouteHandler<typeof postEventsWebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEventsWebhooksRouteHandler: RouteHandler<typeof getEventsWebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEventsWebhooksWebhookIDRouteHandler: RouteHandler<
  typeof getEventsWebhooksWebhookIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventsWebhooksWebhookIDRouteHandler: RouteHandler<
  typeof patchEventsWebhooksWebhookIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsWebhooksWebhookIDRouteHandler: RouteHandler<
  typeof deleteEventsWebhooksWebhookIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsWebhooksWebhookIDDeliveriesRouteHandler: RouteHandler<
  typeof getEventsWebhooksWebhookIDDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsWebhooksWebhookIDStatsRouteHandler: RouteHandler<
  typeof getEventsWebhooksWebhookIDStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

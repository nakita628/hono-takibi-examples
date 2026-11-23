import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebhooksRegistrationsIdRoute,
  getWebhooksRegistrationsIdRoute,
  getWebhooksRegistrationsRoute,
  postWebhooksRegistrationsRoute,
} from '../routes'

export const getWebhooksRegistrationsRouteHandler: RouteHandler<
  typeof getWebhooksRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebhooksRegistrationsRouteHandler: RouteHandler<
  typeof postWebhooksRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhooksRegistrationsIdRouteHandler: RouteHandler<
  typeof deleteWebhooksRegistrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksRegistrationsIdRouteHandler: RouteHandler<
  typeof getWebhooksRegistrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

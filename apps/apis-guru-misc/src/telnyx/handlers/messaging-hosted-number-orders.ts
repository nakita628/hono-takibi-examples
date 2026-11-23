import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagingHostedNumberOrdersIdRoute,
  getMessagingHostedNumberOrdersRoute,
  postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
  postMessagingHostedNumberOrdersRoute,
} from '../routes'

export const getMessagingHostedNumberOrdersRouteHandler: RouteHandler<
  typeof getMessagingHostedNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagingHostedNumberOrdersRouteHandler: RouteHandler<
  typeof postMessagingHostedNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagingHostedNumberOrdersIdRouteHandler: RouteHandler<
  typeof getMessagingHostedNumberOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagingHostedNumberOrdersIdActionsFileUploadRouteHandler: RouteHandler<
  typeof postMessagingHostedNumberOrdersIdActionsFileUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

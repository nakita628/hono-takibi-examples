import type { RouteHandler } from '@hono/zod-openapi'
import type { postLinkDeliveryCreateRoute, postLinkDeliveryGetRoute } from '../routes'

export const postLinkDeliveryCreateRouteHandler: RouteHandler<
  typeof postLinkDeliveryCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLinkDeliveryGetRouteHandler: RouteHandler<
  typeof postLinkDeliveryGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

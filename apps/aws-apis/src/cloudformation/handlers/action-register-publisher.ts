import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRegisterPublisherRoute, postActionRegisterPublisherRoute } from '../routes'

export const getActionRegisterPublisherRouteHandler: RouteHandler<
  typeof getActionRegisterPublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterPublisherRouteHandler: RouteHandler<
  typeof postActionRegisterPublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

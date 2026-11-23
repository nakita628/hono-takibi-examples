import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStreamsStreamIdRoute,
  getStreamsRoute,
  getStreamsStreamIdEmailAddressRoute,
  getStreamsStreamIdMembersRoute,
  getStreamsStreamIdRoute,
  patchStreamsStreamIdRoute,
  postStreamsStreamIdDeleteTopicRoute,
} from '../routes'

export const getStreamsStreamIdMembersRouteHandler: RouteHandler<
  typeof getStreamsStreamIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsRouteHandler: RouteHandler<typeof getStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsStreamIdRouteHandler: RouteHandler<typeof getStreamsStreamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteStreamsStreamIdRouteHandler: RouteHandler<
  typeof deleteStreamsStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStreamsStreamIdRouteHandler: RouteHandler<
  typeof patchStreamsStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsStreamIdEmailAddressRouteHandler: RouteHandler<
  typeof getStreamsStreamIdEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStreamsStreamIdDeleteTopicRouteHandler: RouteHandler<
  typeof postStreamsStreamIdDeleteTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

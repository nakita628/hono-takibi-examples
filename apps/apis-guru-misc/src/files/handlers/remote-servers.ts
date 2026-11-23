import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRemoteServersIdRoute,
  getRemoteServersIdConfigurationFileRoute,
  getRemoteServersIdRoute,
  getRemoteServersRoute,
  patchRemoteServersIdRoute,
  postRemoteServersIdConfigurationFileRoute,
  postRemoteServersRoute,
} from '../routes'

export const getRemoteServersRouteHandler: RouteHandler<typeof getRemoteServersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRemoteServersRouteHandler: RouteHandler<typeof postRemoteServersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRemoteServersIdRouteHandler: RouteHandler<
  typeof deleteRemoteServersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRemoteServersIdRouteHandler: RouteHandler<typeof getRemoteServersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRemoteServersIdRouteHandler: RouteHandler<
  typeof patchRemoteServersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRemoteServersIdConfigurationFileRouteHandler: RouteHandler<
  typeof getRemoteServersIdConfigurationFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRemoteServersIdConfigurationFileRouteHandler: RouteHandler<
  typeof postRemoteServersIdConfigurationFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

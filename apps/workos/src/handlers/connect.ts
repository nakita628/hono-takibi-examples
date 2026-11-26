import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConnectApplicationsRoute,
  postConnectApplicationsRoute,
  getConnectApplicationsIdRoute,
  putConnectApplicationsIdRoute,
  deleteConnectApplicationsIdRoute,
  getConnectApplicationsIdClientSecretsRoute,
  postConnectApplicationsIdClientSecretsRoute,
  deleteConnectClientSecretsIdRoute,
} from '../routes'

export const getConnectApplicationsRouteHandler: RouteHandler<
  typeof getConnectApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectApplicationsRouteHandler: RouteHandler<
  typeof postConnectApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectApplicationsIdRouteHandler: RouteHandler<
  typeof getConnectApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectApplicationsIdRouteHandler: RouteHandler<
  typeof putConnectApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectApplicationsIdRouteHandler: RouteHandler<
  typeof deleteConnectApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectApplicationsIdClientSecretsRouteHandler: RouteHandler<
  typeof getConnectApplicationsIdClientSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectApplicationsIdClientSecretsRouteHandler: RouteHandler<
  typeof postConnectApplicationsIdClientSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectClientSecretsIdRouteHandler: RouteHandler<
  typeof deleteConnectClientSecretsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

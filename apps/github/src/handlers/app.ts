import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAppInstallationsInstallationIdRoute,
  deleteAppInstallationsInstallationIdSuspendedRoute,
  getAppHookConfigRoute,
  getAppHookDeliveriesDeliveryIdRoute,
  getAppHookDeliveriesRoute,
  getAppInstallationRequestsRoute,
  getAppInstallationsInstallationIdRoute,
  getAppInstallationsRoute,
  getAppRoute,
  patchAppHookConfigRoute,
  postAppHookDeliveriesDeliveryIdAttemptsRoute,
  postAppInstallationsInstallationIdAccessTokensRoute,
  putAppInstallationsInstallationIdSuspendedRoute,
} from '../routes'

export const getAppRouteHandler: RouteHandler<typeof getAppRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppHookConfigRouteHandler: RouteHandler<typeof getAppHookConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAppHookConfigRouteHandler: RouteHandler<typeof patchAppHookConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppHookDeliveriesRouteHandler: RouteHandler<
  typeof getAppHookDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppHookDeliveriesDeliveryIdRouteHandler: RouteHandler<
  typeof getAppHookDeliveriesDeliveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppHookDeliveriesDeliveryIdAttemptsRouteHandler: RouteHandler<
  typeof postAppHookDeliveriesDeliveryIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppInstallationRequestsRouteHandler: RouteHandler<
  typeof getAppInstallationRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppInstallationsRouteHandler: RouteHandler<
  typeof getAppInstallationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppInstallationsInstallationIdRouteHandler: RouteHandler<
  typeof getAppInstallationsInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppInstallationsInstallationIdRouteHandler: RouteHandler<
  typeof deleteAppInstallationsInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppInstallationsInstallationIdAccessTokensRouteHandler: RouteHandler<
  typeof postAppInstallationsInstallationIdAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppInstallationsInstallationIdSuspendedRouteHandler: RouteHandler<
  typeof putAppInstallationsInstallationIdSuspendedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppInstallationsInstallationIdSuspendedRouteHandler: RouteHandler<
  typeof deleteAppInstallationsInstallationIdSuspendedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

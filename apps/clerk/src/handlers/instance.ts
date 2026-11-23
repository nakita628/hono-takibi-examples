import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInstanceCommunicationRoute,
  getInstanceOauthApplicationSettingsRoute,
  getInstanceOrganizationSettingsRoute,
  getInstanceProtectRoute,
  getInstanceRoute,
  patchInstanceCommunicationRoute,
  patchInstanceOauthApplicationSettingsRoute,
  patchInstanceOrganizationSettingsRoute,
  patchInstanceProtectRoute,
  patchInstanceRestrictionsRoute,
  patchInstanceRoute,
  postInstanceChangeDomainRoute,
} from '../routes'

export const getInstanceRouteHandler: RouteHandler<typeof getInstanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInstanceRouteHandler: RouteHandler<typeof patchInstanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInstanceRestrictionsRouteHandler: RouteHandler<
  typeof patchInstanceRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstanceProtectRouteHandler: RouteHandler<typeof getInstanceProtectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchInstanceProtectRouteHandler: RouteHandler<
  typeof patchInstanceProtectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstanceCommunicationRouteHandler: RouteHandler<
  typeof getInstanceCommunicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInstanceCommunicationRouteHandler: RouteHandler<
  typeof patchInstanceCommunicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstanceOauthApplicationSettingsRouteHandler: RouteHandler<
  typeof getInstanceOauthApplicationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInstanceOauthApplicationSettingsRouteHandler: RouteHandler<
  typeof patchInstanceOauthApplicationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInstanceChangeDomainRouteHandler: RouteHandler<
  typeof postInstanceChangeDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstanceOrganizationSettingsRouteHandler: RouteHandler<
  typeof getInstanceOrganizationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInstanceOrganizationSettingsRouteHandler: RouteHandler<
  typeof patchInstanceOrganizationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

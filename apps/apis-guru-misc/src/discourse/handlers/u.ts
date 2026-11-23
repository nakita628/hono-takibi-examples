import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUByExternalExternalIdJsonRoute,
  getUByExternalProviderExternalIdJsonRoute,
  getUUsernameEmailsJsonRoute,
  getUUsernameJsonRoute,
  putUUsernameJsonRoute,
  putUUsernamePreferencesAvatarPickJsonRoute,
  putUUsernamePreferencesEmailJsonRoute,
  putUUsernamePreferencesUsernameJsonRoute,
} from '../routes'

export const getUByExternalExternalIdJsonRouteHandler: RouteHandler<
  typeof getUByExternalExternalIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUByExternalProviderExternalIdJsonRouteHandler: RouteHandler<
  typeof getUByExternalProviderExternalIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUUsernameJsonRouteHandler: RouteHandler<typeof getUUsernameJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUUsernameJsonRouteHandler: RouteHandler<typeof putUUsernameJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUUsernameEmailsJsonRouteHandler: RouteHandler<
  typeof getUUsernameEmailsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUUsernamePreferencesAvatarPickJsonRouteHandler: RouteHandler<
  typeof putUUsernamePreferencesAvatarPickJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUUsernamePreferencesEmailJsonRouteHandler: RouteHandler<
  typeof putUUsernamePreferencesEmailJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUUsernamePreferencesUsernameJsonRouteHandler: RouteHandler<
  typeof putUUsernamePreferencesUsernameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

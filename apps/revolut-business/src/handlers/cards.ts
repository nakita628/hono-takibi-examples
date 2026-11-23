import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCardsCardIdRoute,
  getCardsCardIdRoute,
  getCardsCardIdSensitiveDetailsRoute,
  getCardsRoute,
  patchCardsCardIdRoute,
  postCardsCardIdFreezeRoute,
  postCardsCardIdLockRoute,
  postCardsCardIdUnfreezeRoute,
  postCardsCardIdUnlockRoute,
  postCardsRoute,
  putCardsCardIdContactsRoute,
  putCardsCardIdReferencesRoute,
} from '../routes'

export const getCardsRouteHandler: RouteHandler<typeof getCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsRouteHandler: RouteHandler<typeof postCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdRouteHandler: RouteHandler<typeof getCardsCardIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCardsCardIdRouteHandler: RouteHandler<typeof patchCardsCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCardsCardIdRouteHandler: RouteHandler<typeof deleteCardsCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCardsCardIdContactsRouteHandler: RouteHandler<
  typeof putCardsCardIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCardsCardIdReferencesRouteHandler: RouteHandler<
  typeof putCardsCardIdReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdFreezeRouteHandler: RouteHandler<
  typeof postCardsCardIdFreezeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdUnfreezeRouteHandler: RouteHandler<
  typeof postCardsCardIdUnfreezeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdLockRouteHandler: RouteHandler<
  typeof postCardsCardIdLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardsCardIdUnlockRouteHandler: RouteHandler<
  typeof postCardsCardIdUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardsCardIdSensitiveDetailsRouteHandler: RouteHandler<
  typeof getCardsCardIdSensitiveDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

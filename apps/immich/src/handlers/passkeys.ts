import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePasskeysIdRoute,
  getPasskeysIdRoute,
  getPasskeysRoute,
  patchPasskeysIdRoute,
  postPasskeysAuthenticationFinishRoute,
  postPasskeysAuthenticationStartRoute,
  postPasskeysRegistrationFinishRoute,
  postPasskeysRegistrationStartRoute,
} from '../routes'

export const getPasskeysRouteHandler: RouteHandler<typeof getPasskeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasskeysAuthenticationFinishRouteHandler: RouteHandler<
  typeof postPasskeysAuthenticationFinishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasskeysAuthenticationStartRouteHandler: RouteHandler<
  typeof postPasskeysAuthenticationStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasskeysRegistrationFinishRouteHandler: RouteHandler<
  typeof postPasskeysRegistrationFinishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPasskeysRegistrationStartRouteHandler: RouteHandler<
  typeof postPasskeysRegistrationStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePasskeysIdRouteHandler: RouteHandler<typeof deletePasskeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPasskeysIdRouteHandler: RouteHandler<typeof getPasskeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPasskeysIdRouteHandler: RouteHandler<typeof patchPasskeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

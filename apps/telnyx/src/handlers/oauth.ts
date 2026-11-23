import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOauthClientsIdRoute,
  deleteOauthGrantsIdRoute,
  getOauthAuthorizeRoute,
  getOauthClientsIdRoute,
  getOauthClientsRoute,
  getOauthConsentConsentTokenRoute,
  getOauthGrantsIdRoute,
  getOauthGrantsRoute,
  getOauthJwksRoute,
  postOauthClientsRoute,
  postOauthGrantsRoute,
  postOauthIntrospectRoute,
  postOauthRegisterRoute,
  postOauthTokenRoute,
  putOauthClientsIdRoute,
} from '../routes'

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthClientsRouteHandler: RouteHandler<typeof getOauthClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthClientsRouteHandler: RouteHandler<typeof postOauthClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOauthClientsIdRouteHandler: RouteHandler<
  typeof deleteOauthClientsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthClientsIdRouteHandler: RouteHandler<typeof getOauthClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putOauthClientsIdRouteHandler: RouteHandler<typeof putOauthClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthConsentConsentTokenRouteHandler: RouteHandler<
  typeof getOauthConsentConsentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthGrantsRouteHandler: RouteHandler<typeof getOauthGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthGrantsRouteHandler: RouteHandler<typeof postOauthGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOauthGrantsIdRouteHandler: RouteHandler<
  typeof deleteOauthGrantsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthGrantsIdRouteHandler: RouteHandler<typeof getOauthGrantsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthIntrospectRouteHandler: RouteHandler<
  typeof postOauthIntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthJwksRouteHandler: RouteHandler<typeof getOauthJwksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRegisterRouteHandler: RouteHandler<typeof postOauthRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOauth2RegisterIdRoute,
  getOauth2AuthRoute,
  getOauth2DeviceVerifyRoute,
  getOauth2RegisterIdRoute,
  getOauth2SessionsLogoutRoute,
  postOauth2DeviceAuthRoute,
  postOauth2RegisterRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
  putOauth2RegisterIdRoute,
} from '../routes'

export const getOauth2AuthRouteHandler: RouteHandler<typeof getOauth2AuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2DeviceAuthRouteHandler: RouteHandler<
  typeof postOauth2DeviceAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2DeviceVerifyRouteHandler: RouteHandler<
  typeof getOauth2DeviceVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2RegisterRouteHandler: RouteHandler<typeof postOauth2RegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOauth2RegisterIdRouteHandler: RouteHandler<
  typeof deleteOauth2RegisterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2RegisterIdRouteHandler: RouteHandler<
  typeof getOauth2RegisterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOauth2RegisterIdRouteHandler: RouteHandler<
  typeof putOauth2RegisterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2RevokeRouteHandler: RouteHandler<typeof postOauth2RevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauth2SessionsLogoutRouteHandler: RouteHandler<
  typeof getOauth2SessionsLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2TokenRouteHandler: RouteHandler<typeof postOauth2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

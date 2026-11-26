import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthApplicationsRoute,
  postOauthApplicationsRoute,
  getOauthApplicationsOauthApplicationIdRoute,
  patchOauthApplicationsOauthApplicationIdRoute,
  deleteOauthApplicationsOauthApplicationIdRoute,
  putOauthApplicationsOauthApplicationIdLogoRoute,
  postOauthApplicationsOauthApplicationIdRotateSecretRoute,
  postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
  postOauthApplicationsAccessTokensVerifyRoute,
} from '../routes'

export const getOauthApplicationsRouteHandler: RouteHandler<
  typeof getOauthApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthApplicationsRouteHandler: RouteHandler<
  typeof postOauthApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthApplicationsOauthApplicationIdRouteHandler: RouteHandler<
  typeof getOauthApplicationsOauthApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOauthApplicationsOauthApplicationIdRouteHandler: RouteHandler<
  typeof patchOauthApplicationsOauthApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOauthApplicationsOauthApplicationIdRouteHandler: RouteHandler<
  typeof deleteOauthApplicationsOauthApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOauthApplicationsOauthApplicationIdLogoRouteHandler: RouteHandler<
  typeof putOauthApplicationsOauthApplicationIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthApplicationsOauthApplicationIdRotateSecretRouteHandler: RouteHandler<
  typeof postOauthApplicationsOauthApplicationIdRotateSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthApplicationsOauthApplicationIdRevokeTokenRouteHandler: RouteHandler<
  typeof postOauthApplicationsOauthApplicationIdRevokeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthApplicationsAccessTokensVerifyRouteHandler: RouteHandler<
  typeof postOauthApplicationsAccessTokensVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMobilePushCredentialsPushCredentialIdRoute,
  getMobilePushCredentialsPushCredentialIdRoute,
  getMobilePushCredentialsRoute,
  postMobilePushCredentialsRoute,
} from '../routes'

export const getMobilePushCredentialsRouteHandler: RouteHandler<
  typeof getMobilePushCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMobilePushCredentialsRouteHandler: RouteHandler<
  typeof postMobilePushCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMobilePushCredentialsPushCredentialIdRouteHandler: RouteHandler<
  typeof deleteMobilePushCredentialsPushCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMobilePushCredentialsPushCredentialIdRouteHandler: RouteHandler<
  typeof getMobilePushCredentialsPushCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

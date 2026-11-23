import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthGetConnectClientRoute,
  getOauthListConnectsRoute,
  getOauthListLoginsRoute,
  postOauthConnectCallbackClientNameRoute,
  postOauthConnectSlackCallbackRoute,
  postOauthConnectSlackInstanceRoute,
  postOauthLoginCallbackClientNameRoute,
  postOauthTestClientCredentialsRoute,
} from '../routes'

export const postOauthLoginCallbackClientNameRouteHandler: RouteHandler<
  typeof postOauthLoginCallbackClientNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthConnectSlackCallbackRouteHandler: RouteHandler<
  typeof postOauthConnectSlackCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthConnectSlackInstanceRouteHandler: RouteHandler<
  typeof postOauthConnectSlackInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthConnectCallbackClientNameRouteHandler: RouteHandler<
  typeof postOauthConnectCallbackClientNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthListLoginsRouteHandler: RouteHandler<typeof getOauthListLoginsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthListConnectsRouteHandler: RouteHandler<
  typeof getOauthListConnectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthGetConnectClientRouteHandler: RouteHandler<
  typeof getOauthGetConnectClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTestClientCredentialsRouteHandler: RouteHandler<
  typeof postOauthTestClientCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

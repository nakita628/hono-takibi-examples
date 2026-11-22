import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthenticationTokensTokenRoute,
  deleteCredentialsIdRoute,
  deletePasswordTokensIdRoute,
  getAuthenticationOptionsRoute,
  getAuthenticationTokensRoute,
  getAuthenticationTokensTokenRoute,
  getCredentialsIdRoute,
  getCredentialsRoute,
  getPasswordTokensIdRoute,
  getPasswordTokensRoute,
  postAuthenticationTokensRoute,
  postAuthenticationTokensTokenExchangeRoute,
  postCredentialsRoute,
  postPasswordTokensRoute,
  putAuthenticationOptionsRoute,
  putCredentialsIdRoute,
} from '../routes'

export const getAuthenticationOptionsRouteHandler: RouteHandler<
  typeof getAuthenticationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthenticationOptionsRouteHandler: RouteHandler<
  typeof putAuthenticationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticationTokensRouteHandler: RouteHandler<
  typeof getAuthenticationTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationTokensRouteHandler: RouteHandler<
  typeof postAuthenticationTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthenticationTokensTokenRouteHandler: RouteHandler<
  typeof deleteAuthenticationTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticationTokensTokenRouteHandler: RouteHandler<
  typeof getAuthenticationTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationTokensTokenExchangeRouteHandler: RouteHandler<
  typeof postAuthenticationTokensTokenExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCredentialsRouteHandler: RouteHandler<typeof getCredentialsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCredentialsRouteHandler: RouteHandler<typeof postCredentialsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCredentialsIdRouteHandler: RouteHandler<
  typeof deleteCredentialsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCredentialsIdRouteHandler: RouteHandler<typeof getCredentialsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCredentialsIdRouteHandler: RouteHandler<typeof putCredentialsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPasswordTokensRouteHandler: RouteHandler<typeof getPasswordTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPasswordTokensRouteHandler: RouteHandler<typeof postPasswordTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePasswordTokensIdRouteHandler: RouteHandler<
  typeof deletePasswordTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPasswordTokensIdRouteHandler: RouteHandler<
  typeof getPasswordTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

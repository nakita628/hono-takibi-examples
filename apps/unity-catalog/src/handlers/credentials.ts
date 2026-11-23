import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCredentialsNameRoute,
  getCredentialsNameRoute,
  getCredentialsRoute,
  patchCredentialsNameRoute,
  postCredentialsRoute,
} from '../routes'

export const postCredentialsRouteHandler: RouteHandler<typeof postCredentialsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCredentialsRouteHandler: RouteHandler<typeof getCredentialsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCredentialsNameRouteHandler: RouteHandler<typeof getCredentialsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCredentialsNameRouteHandler: RouteHandler<
  typeof patchCredentialsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCredentialsNameRouteHandler: RouteHandler<
  typeof deleteCredentialsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

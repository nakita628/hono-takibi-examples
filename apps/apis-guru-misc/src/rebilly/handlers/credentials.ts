import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCredentialsIdRoute,
  getCredentialsIdRoute,
  getCredentialsRoute,
  postCredentialsRoute,
  putCredentialsIdRoute,
} from '../routes'

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

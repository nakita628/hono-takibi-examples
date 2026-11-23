import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthKeysDeleteAuthKeyIdRoute,
  getAuthKeysRoute,
  getAuthKeysViewAuthKeyIdRoute,
  postAuthKeysAddUserIdRoute,
  postAuthKeysEditAuthKeyIdRoute,
  postAuthKeysRoute,
} from '../routes'

export const getAuthKeysRouteHandler: RouteHandler<typeof getAuthKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKeysRouteHandler: RouteHandler<typeof postAuthKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKeysAddUserIdRouteHandler: RouteHandler<
  typeof postAuthKeysAddUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKeysViewAuthKeyIdRouteHandler: RouteHandler<
  typeof getAuthKeysViewAuthKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKeysEditAuthKeyIdRouteHandler: RouteHandler<
  typeof postAuthKeysEditAuthKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthKeysDeleteAuthKeyIdRouteHandler: RouteHandler<
  typeof deleteAuthKeysDeleteAuthKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

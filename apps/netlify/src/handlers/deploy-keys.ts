import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDeployKeysKeyIdRoute,
  getDeployKeysKeyIdRoute,
  getDeployKeysRoute,
  postDeployKeysRoute,
} from '../routes'

export const getDeployKeysRouteHandler: RouteHandler<typeof getDeployKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeployKeysRouteHandler: RouteHandler<typeof postDeployKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployKeysKeyIdRouteHandler: RouteHandler<typeof getDeployKeysKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDeployKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteDeployKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

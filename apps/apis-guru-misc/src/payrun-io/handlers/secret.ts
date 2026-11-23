import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretSecretIdRoute,
  getSecretSecretIdRoute,
  putSecretSecretIdRoute,
} from '../routes'

export const deleteSecretSecretIdRouteHandler: RouteHandler<
  typeof deleteSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretSecretIdRouteHandler: RouteHandler<typeof getSecretSecretIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSecretSecretIdRouteHandler: RouteHandler<typeof putSecretSecretIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

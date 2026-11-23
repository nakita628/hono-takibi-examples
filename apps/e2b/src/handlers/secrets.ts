import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretsSecretIDRoute,
  getSecretsRoute,
  getSecretsSecretIDRoute,
  postSecretsRoute,
  postSecretsSecretIDRoute,
} from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsRouteHandler: RouteHandler<typeof postSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsSecretIDRouteHandler: RouteHandler<typeof getSecretsSecretIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSecretsSecretIDRouteHandler: RouteHandler<
  typeof postSecretsSecretIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecretsSecretIDRouteHandler: RouteHandler<
  typeof deleteSecretsSecretIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

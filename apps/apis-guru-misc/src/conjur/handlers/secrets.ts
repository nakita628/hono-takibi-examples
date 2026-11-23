import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSecretsAccountKindIdentifierRoute,
  getSecretsRoute,
  postSecretsAccountKindIdentifierRoute,
} from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsAccountKindIdentifierRouteHandler: RouteHandler<
  typeof getSecretsAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsAccountKindIdentifierRouteHandler: RouteHandler<
  typeof postSecretsAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

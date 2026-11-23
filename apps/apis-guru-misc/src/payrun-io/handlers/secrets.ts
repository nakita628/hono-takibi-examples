import type { RouteHandler } from '@hono/zod-openapi'
import type { getSecretsRoute, postSecretsRoute } from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsRouteHandler: RouteHandler<typeof postSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

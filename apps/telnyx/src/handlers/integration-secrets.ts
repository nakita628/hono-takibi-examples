import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIntegrationSecretsIdRoute,
  getIntegrationSecretsRoute,
  postIntegrationSecretsRoute,
} from '../routes'

export const getIntegrationSecretsRouteHandler: RouteHandler<
  typeof getIntegrationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntegrationSecretsRouteHandler: RouteHandler<
  typeof postIntegrationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIntegrationSecretsIdRouteHandler: RouteHandler<
  typeof deleteIntegrationSecretsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAutomatedDiscoveryConfigurationRoute,
  putAutomatedDiscoveryConfigurationRoute,
} from '../routes'

export const getAutomatedDiscoveryConfigurationRouteHandler: RouteHandler<
  typeof getAutomatedDiscoveryConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAutomatedDiscoveryConfigurationRouteHandler: RouteHandler<
  typeof putAutomatedDiscoveryConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

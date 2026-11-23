import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPositionConfigurationsResourceIdentifierResourceTypeRoute,
  getPositionConfigurationsRoute,
  putPositionConfigurationsResourceIdentifierResourceTypeRoute,
} from '../routes'

export const getPositionConfigurationsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof getPositionConfigurationsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPositionConfigurationsResourceIdentifierResourceTypeRouteHandler: RouteHandler<
  typeof putPositionConfigurationsResourceIdentifierResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPositionConfigurationsRouteHandler: RouteHandler<
  typeof getPositionConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

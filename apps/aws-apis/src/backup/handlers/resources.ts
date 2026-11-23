import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourcesIndexRoute,
  getResourcesResourceArnRecoveryPointsIndexRoute,
  getResourcesResourceArnRoute,
} from '../routes'

export const getResourcesResourceArnRouteHandler: RouteHandler<
  typeof getResourcesResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesIndexRouteHandler: RouteHandler<typeof getResourcesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getResourcesResourceArnRecoveryPointsIndexRouteHandler: RouteHandler<
  typeof getResourcesResourceArnRecoveryPointsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

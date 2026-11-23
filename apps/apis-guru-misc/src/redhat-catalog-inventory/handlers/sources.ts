import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSourcesIdRoute,
  getSourcesIdServiceInstancesRoute,
  getSourcesIdServiceInventoriesRoute,
  getSourcesIdServiceOfferingNodesRoute,
  getSourcesIdServiceOfferingsRoute,
  getSourcesIdServicePlansRoute,
  getSourcesIdTasksRoute,
  getSourcesRoute,
  patchSourcesIdIncrementalRefreshRoute,
  patchSourcesIdRefreshRoute,
} from '../routes'

export const getSourcesRouteHandler: RouteHandler<typeof getSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdRouteHandler: RouteHandler<typeof getSourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesIdIncrementalRefreshRouteHandler: RouteHandler<
  typeof patchSourcesIdIncrementalRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesIdRefreshRouteHandler: RouteHandler<
  typeof patchSourcesIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdServiceInstancesRouteHandler: RouteHandler<
  typeof getSourcesIdServiceInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdServiceInventoriesRouteHandler: RouteHandler<
  typeof getSourcesIdServiceInventoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdServiceOfferingNodesRouteHandler: RouteHandler<
  typeof getSourcesIdServiceOfferingNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdServiceOfferingsRouteHandler: RouteHandler<
  typeof getSourcesIdServiceOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdServicePlansRouteHandler: RouteHandler<
  typeof getSourcesIdServicePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdTasksRouteHandler: RouteHandler<typeof getSourcesIdTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

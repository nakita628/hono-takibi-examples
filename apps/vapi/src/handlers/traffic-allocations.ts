import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrafficAllocationsIdRoute,
  getTrafficAllocationsLatestRoute,
  getTrafficAllocationsMetricsRoute,
  getTrafficAllocationsRoute,
  postTrafficAllocationsRoute,
} from '../routes'

export const postTrafficAllocationsRouteHandler: RouteHandler<
  typeof postTrafficAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficAllocationsRouteHandler: RouteHandler<
  typeof getTrafficAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficAllocationsLatestRouteHandler: RouteHandler<
  typeof getTrafficAllocationsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficAllocationsMetricsRouteHandler: RouteHandler<
  typeof getTrafficAllocationsMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficAllocationsIdRouteHandler: RouteHandler<
  typeof getTrafficAllocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

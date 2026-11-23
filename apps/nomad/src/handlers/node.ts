import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNodeNodeIdAllocationsRoute,
  getNodeNodeIdRoute,
  postNodeNodeIdDrainRoute,
  postNodeNodeIdEligibilityRoute,
  postNodeNodeIdPurgeRoute,
} from '../routes'

export const getNodeNodeIdRouteHandler: RouteHandler<typeof getNodeNodeIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNodeNodeIdAllocationsRouteHandler: RouteHandler<
  typeof getNodeNodeIdAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNodeNodeIdDrainRouteHandler: RouteHandler<
  typeof postNodeNodeIdDrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNodeNodeIdEligibilityRouteHandler: RouteHandler<
  typeof postNodeNodeIdEligibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNodeNodeIdPurgeRouteHandler: RouteHandler<
  typeof postNodeNodeIdPurgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

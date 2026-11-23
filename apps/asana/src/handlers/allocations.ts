import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAllocationsAllocationGidRoute,
  getAllocationsAllocationGidRoute,
  getAllocationsRoute,
  postAllocationsRoute,
  putAllocationsAllocationGidRoute,
} from '../routes'

export const getAllocationsAllocationGidRouteHandler: RouteHandler<
  typeof getAllocationsAllocationGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAllocationsAllocationGidRouteHandler: RouteHandler<
  typeof putAllocationsAllocationGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAllocationsAllocationGidRouteHandler: RouteHandler<
  typeof deleteAllocationsAllocationGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAllocationsRouteHandler: RouteHandler<typeof getAllocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAllocationsRouteHandler: RouteHandler<typeof postAllocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

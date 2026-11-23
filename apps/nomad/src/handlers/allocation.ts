import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAllocationAllocIDRoute,
  getAllocationAllocIDServicesRoute,
  postAllocationAllocIDStopRoute,
} from '../routes'

export const getAllocationAllocIDRouteHandler: RouteHandler<
  typeof getAllocationAllocIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAllocationAllocIDServicesRouteHandler: RouteHandler<
  typeof getAllocationAllocIDServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAllocationAllocIDStopRouteHandler: RouteHandler<
  typeof postAllocationAllocIDStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

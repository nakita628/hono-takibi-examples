import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHotelsHotelIdRatePlansRatePlanIdRoute,
  getHotelsHotelIdRatePlansRoute,
  getHotelsHotelIdRoute,
  getHotelsRoute,
} from '../routes'

export const getHotelsRouteHandler: RouteHandler<typeof getHotelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHotelsHotelIdRouteHandler: RouteHandler<typeof getHotelsHotelIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHotelsHotelIdRatePlansRouteHandler: RouteHandler<
  typeof getHotelsHotelIdRatePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHotelsHotelIdRatePlansRatePlanIdRouteHandler: RouteHandler<
  typeof getHotelsHotelIdRatePlansRatePlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

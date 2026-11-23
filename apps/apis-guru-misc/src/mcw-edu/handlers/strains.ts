import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStrainsAllRoute,
  getStrainsChrStartStopMapKeyRoute,
  getStrainsRgdIdRoute,
} from '../routes'

export const getStrainsAllRouteHandler: RouteHandler<typeof getStrainsAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStrainsChrStartStopMapKeyRouteHandler: RouteHandler<
  typeof getStrainsChrStartStopMapKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStrainsRgdIdRouteHandler: RouteHandler<typeof getStrainsRgdIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

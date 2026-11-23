import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVirtualCircuitsIdRoute,
  getVirtualCircuitsIdEventsRoute,
  getVirtualCircuitsIdRoute,
  putVirtualCircuitsIdRoute,
} from '../routes'

export const getVirtualCircuitsIdEventsRouteHandler: RouteHandler<
  typeof getVirtualCircuitsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVirtualCircuitsIdRouteHandler: RouteHandler<
  typeof deleteVirtualCircuitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualCircuitsIdRouteHandler: RouteHandler<
  typeof getVirtualCircuitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVirtualCircuitsIdRouteHandler: RouteHandler<
  typeof putVirtualCircuitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

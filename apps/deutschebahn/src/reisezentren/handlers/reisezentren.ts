import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReisezentrenIdRoute,
  getReisezentrenLocLatLonDistRoute,
  getReisezentrenLocLatLonRoute,
  getReisezentrenRoute,
} from '../routes'

export const getReisezentrenRouteHandler: RouteHandler<typeof getReisezentrenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReisezentrenLocLatLonRouteHandler: RouteHandler<
  typeof getReisezentrenLocLatLonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReisezentrenLocLatLonDistRouteHandler: RouteHandler<
  typeof getReisezentrenLocLatLonDistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReisezentrenIdRouteHandler: RouteHandler<typeof getReisezentrenIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDealersCarRoute,
  getDealersCarUkRoute,
  getDealersHeavyEquipmentRoute,
  getDealersMotorcycleRoute,
  getDealersRvRoute,
} from '../routes'

export const getDealersCarRouteHandler: RouteHandler<typeof getDealersCarRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealersCarUkRouteHandler: RouteHandler<typeof getDealersCarUkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealersHeavyEquipmentRouteHandler: RouteHandler<
  typeof getDealersHeavyEquipmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealersMotorcycleRouteHandler: RouteHandler<
  typeof getDealersMotorcycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealersRvRouteHandler: RouteHandler<typeof getDealersRvRoute> = async (c) => {
  throw new Error('Not implemented')
}

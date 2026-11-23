import type { RouteHandler } from '@hono/zod-openapi'
import type { getFoodRoute, getFoodSearchRoute, postFoodSearchRoute } from '../routes'

export const getFoodRouteHandler: RouteHandler<typeof getFoodRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoodSearchRouteHandler: RouteHandler<typeof getFoodSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoodSearchRouteHandler: RouteHandler<typeof postFoodSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

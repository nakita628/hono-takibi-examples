import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1NutritionRoute } from '../routes'

export const getV1NutritionRouteHandler: RouteHandler<typeof getV1NutritionRoute> = async (c) => {
  throw new Error('Not implemented')
}

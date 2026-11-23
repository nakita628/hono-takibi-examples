import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFoodBrandedBarcodePhpRoute,
  getFoodBrandedNamePhpRoute,
  getFoodBrandedSearchPhpRoute,
  getFoodIngredientSearchPhpRoute,
} from '../routes'

export const getFoodBrandedBarcodePhpRouteHandler: RouteHandler<
  typeof getFoodBrandedBarcodePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoodBrandedNamePhpRouteHandler: RouteHandler<
  typeof getFoodBrandedNamePhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoodBrandedSearchPhpRouteHandler: RouteHandler<
  typeof getFoodBrandedSearchPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoodIngredientSearchPhpRouteHandler: RouteHandler<
  typeof getFoodIngredientSearchPhpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

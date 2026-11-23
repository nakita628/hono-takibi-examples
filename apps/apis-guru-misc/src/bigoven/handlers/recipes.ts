import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRecipesIdRoute,
  getRecipesRandomRoute,
  getRecipesRavesRoute,
  getRecipesRecentviewsRoute,
  getRecipesRoute,
  getRecipesTop25randomRoute,
} from '../routes'

export const getRecipesRouteHandler: RouteHandler<typeof getRecipesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecipesRandomRouteHandler: RouteHandler<typeof getRecipesRandomRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRecipesRavesRouteHandler: RouteHandler<typeof getRecipesRavesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecipesRecentviewsRouteHandler: RouteHandler<
  typeof getRecipesRecentviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecipesTop25randomRouteHandler: RouteHandler<
  typeof getRecipesTop25randomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecipesIdRouteHandler: RouteHandler<typeof getRecipesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

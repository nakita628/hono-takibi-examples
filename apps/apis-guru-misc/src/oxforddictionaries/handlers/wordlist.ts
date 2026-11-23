import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWordlistSourceLangFiltersAdvancedRoute,
  getWordlistSourceLangFiltersBasicRoute,
} from '../routes'

export const getWordlistSourceLangFiltersAdvancedRouteHandler: RouteHandler<
  typeof getWordlistSourceLangFiltersAdvancedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWordlistSourceLangFiltersBasicRouteHandler: RouteHandler<
  typeof getWordlistSourceLangFiltersBasicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

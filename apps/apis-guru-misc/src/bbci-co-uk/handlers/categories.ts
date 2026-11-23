import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCategoriesCategoryEpisodesRoute,
  getCategoriesCategoryHighlightsRoute,
  getCategoriesCategoryProgrammesRoute,
  getCategoriesCategoryRoute,
  getCategoriesRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryRouteHandler: RouteHandler<
  typeof getCategoriesCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryEpisodesRouteHandler: RouteHandler<
  typeof getCategoriesCategoryEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryHighlightsRouteHandler: RouteHandler<
  typeof getCategoriesCategoryHighlightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryProgrammesRouteHandler: RouteHandler<
  typeof getCategoriesCategoryProgrammesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

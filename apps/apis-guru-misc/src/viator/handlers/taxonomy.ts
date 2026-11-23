import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaxonomyCategoriesRoute,
  getTaxonomyDestinationsRoute,
  postTaxonomyAttractionsRoute,
} from '../routes'

export const postTaxonomyAttractionsRouteHandler: RouteHandler<
  typeof postTaxonomyAttractionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxonomyCategoriesRouteHandler: RouteHandler<
  typeof getTaxonomyCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxonomyDestinationsRouteHandler: RouteHandler<
  typeof getTaxonomyDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

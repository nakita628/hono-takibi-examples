import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaxonomiesExportTaxonomyIdRoute,
  getTaxonomiesRoute,
  getTaxonomiesTaxonomyTagsTaxonomyIdRoute,
  getTaxonomiesViewTaxonomyIdRoute,
  postTaxonomiesDisableTaxonomyIdRoute,
  postTaxonomiesEnableTaxonomyIdRoute,
  postTaxonomiesUpdateRoute,
} from '../routes'

export const getTaxonomiesRouteHandler: RouteHandler<typeof getTaxonomiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxonomiesViewTaxonomyIdRouteHandler: RouteHandler<
  typeof getTaxonomiesViewTaxonomyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaxonomiesEnableTaxonomyIdRouteHandler: RouteHandler<
  typeof postTaxonomiesEnableTaxonomyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaxonomiesDisableTaxonomyIdRouteHandler: RouteHandler<
  typeof postTaxonomiesDisableTaxonomyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaxonomiesUpdateRouteHandler: RouteHandler<
  typeof postTaxonomiesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxonomiesTaxonomyTagsTaxonomyIdRouteHandler: RouteHandler<
  typeof getTaxonomiesTaxonomyTagsTaxonomyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaxonomiesExportTaxonomyIdRouteHandler: RouteHandler<
  typeof getTaxonomiesExportTaxonomyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

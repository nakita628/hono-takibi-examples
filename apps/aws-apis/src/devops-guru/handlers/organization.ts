import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOrganizationHealthResourceCollectionRoute,
  postOrganizationHealthRoute,
  postOrganizationInsightsRoute,
  postOrganizationInsightsSearchRoute,
  postOrganizationOverviewRoute,
} from '../routes'

export const postOrganizationHealthRouteHandler: RouteHandler<
  typeof postOrganizationHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationOverviewRouteHandler: RouteHandler<
  typeof postOrganizationOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationHealthResourceCollectionRouteHandler: RouteHandler<
  typeof postOrganizationHealthResourceCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationInsightsRouteHandler: RouteHandler<
  typeof postOrganizationInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationInsightsSearchRouteHandler: RouteHandler<
  typeof postOrganizationInsightsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

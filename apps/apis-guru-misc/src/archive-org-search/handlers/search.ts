import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchV1FieldsRoute,
  getSearchV1OrganicRoute,
  getSearchV1ScrapeRoute,
} from '../routes'

export const getSearchV1FieldsRouteHandler: RouteHandler<typeof getSearchV1FieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchV1OrganicRouteHandler: RouteHandler<typeof getSearchV1OrganicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchV1ScrapeRouteHandler: RouteHandler<typeof getSearchV1ScrapeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSitesNearestOutputFormatRoute,
  getSitesNearOutputFormatRoute,
  getSitesSiteIDOutputFormatRoute,
  getSitesSiteIDSubsitesOutputFormatRoute,
  getSitesWithinOutputFormatRoute,
} from '../routes'

export const getSitesNearOutputFormatRouteHandler: RouteHandler<
  typeof getSitesNearOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSitesNearestOutputFormatRouteHandler: RouteHandler<
  typeof getSitesNearestOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSitesWithinOutputFormatRouteHandler: RouteHandler<
  typeof getSitesWithinOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSitesSiteIDOutputFormatRouteHandler: RouteHandler<
  typeof getSitesSiteIDOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSitesSiteIDSubsitesOutputFormatRouteHandler: RouteHandler<
  typeof getSitesSiteIDSubsitesOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

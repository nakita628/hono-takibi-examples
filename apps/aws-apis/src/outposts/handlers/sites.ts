import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSitesSiteIdRoute,
  getSitesRoute,
  getSitesSiteIdAddressAddressTypeRoute,
  getSitesSiteIdRoute,
  patchSitesSiteIdRackPhysicalPropertiesRoute,
  patchSitesSiteIdRoute,
  postSitesRoute,
  putSitesSiteIdAddressRoute,
} from '../routes'

export const postSitesRouteHandler: RouteHandler<typeof postSitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSitesRouteHandler: RouteHandler<typeof getSitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSitesSiteIdRouteHandler: RouteHandler<typeof deleteSitesSiteIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSitesSiteIdRouteHandler: RouteHandler<typeof getSitesSiteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSitesSiteIdRouteHandler: RouteHandler<typeof patchSitesSiteIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSitesSiteIdAddressAddressTypeRouteHandler: RouteHandler<
  typeof getSitesSiteIdAddressAddressTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSitesSiteIdAddressRouteHandler: RouteHandler<
  typeof putSitesSiteIdAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSitesSiteIdRackPhysicalPropertiesRouteHandler: RouteHandler<
  typeof patchSitesSiteIdRackPhysicalPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

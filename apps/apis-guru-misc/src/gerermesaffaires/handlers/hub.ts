import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHubBusinessGroupsIdMenusRoute,
  getHubMenusAllRoute,
  getHubMenusRoute,
  getHubSpacesSpaceIdMenusRoute,
  postHubDocumentsRoute,
  postHubPayslipsRoute,
  postHubSpacesSpaceIdDocumentsRoute,
  postHubSpacesSpaceIdPayslipsRoute,
} from '../routes'

export const getHubBusinessGroupsIdMenusRouteHandler: RouteHandler<
  typeof getHubBusinessGroupsIdMenusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubDocumentsRouteHandler: RouteHandler<typeof postHubDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHubMenusRouteHandler: RouteHandler<typeof getHubMenusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHubMenusAllRouteHandler: RouteHandler<typeof getHubMenusAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubPayslipsRouteHandler: RouteHandler<typeof postHubPayslipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubSpacesSpaceIdDocumentsRouteHandler: RouteHandler<
  typeof postHubSpacesSpaceIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHubSpacesSpaceIdMenusRouteHandler: RouteHandler<
  typeof getHubSpacesSpaceIdMenusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubSpacesSpaceIdPayslipsRouteHandler: RouteHandler<
  typeof postHubSpacesSpaceIdPayslipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

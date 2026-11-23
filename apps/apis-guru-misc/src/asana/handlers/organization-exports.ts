import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationExportsOrganizationExportGidRoute,
  postOrganizationExportsRoute,
} from '../routes'

export const postOrganizationExportsRouteHandler: RouteHandler<
  typeof postOrganizationExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationExportsOrganizationExportGidRouteHandler: RouteHandler<
  typeof getOrganizationExportsOrganizationExportGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

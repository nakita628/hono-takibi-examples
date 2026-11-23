import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCompaniesIdRoute,
  getCompaniesIdRoute,
  getCompaniesRoute,
  patchCompaniesIdRoute,
  patchCompaniesLinkUnlinkIdRoute,
  postCompaniesImportRoute,
  postCompaniesRoute,
} from '../routes'

export const getCompaniesRouteHandler: RouteHandler<typeof getCompaniesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesRouteHandler: RouteHandler<typeof postCompaniesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesImportRouteHandler: RouteHandler<
  typeof postCompaniesImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCompaniesLinkUnlinkIdRouteHandler: RouteHandler<
  typeof patchCompaniesLinkUnlinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCompaniesIdRouteHandler: RouteHandler<typeof deleteCompaniesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCompaniesIdRouteHandler: RouteHandler<typeof getCompaniesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCompaniesIdRouteHandler: RouteHandler<typeof patchCompaniesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

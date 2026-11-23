import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetaCompaniesCompanyIdConnectionsRoute,
  getMetaCompaniesCompanyIdSyncCommerceStatusRoute,
  getMetaCompaniesRoute,
  patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute,
  postMetaCompaniesCompanyIdConnectionsRoute,
  postMetaCompaniesCompanyIdSyncCommerceHistoricRoute,
  postMetaCompaniesSyncRoute,
} from '../routes'

export const getMetaCompaniesRouteHandler: RouteHandler<typeof getMetaCompaniesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMetaCompaniesSyncRouteHandler: RouteHandler<
  typeof postMetaCompaniesSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetaCompaniesCompanyIdConnectionsRouteHandler: RouteHandler<
  typeof getMetaCompaniesCompanyIdConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetaCompaniesCompanyIdConnectionsRouteHandler: RouteHandler<
  typeof postMetaCompaniesCompanyIdConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMetaCompaniesCompanyIdConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetaCompaniesCompanyIdSyncCommerceHistoricRouteHandler: RouteHandler<
  typeof postMetaCompaniesCompanyIdSyncCommerceHistoricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetaCompaniesCompanyIdSyncCommerceStatusRouteHandler: RouteHandler<
  typeof getMetaCompaniesCompanyIdSyncCommerceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

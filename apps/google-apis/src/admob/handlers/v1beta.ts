import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1betaAccountsRoute,
  getV1betaNameRoute,
  getV1betaParentAdSourcesRoute,
  getV1betaParentAdUnitsRoute,
  getV1betaParentAppsRoute,
  postV1betaParentMediationReportGenerateRoute,
  postV1betaParentNetworkReportGenerateRoute,
} from '../routes'

export const getV1betaAccountsRouteHandler: RouteHandler<typeof getV1betaAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentAdSourcesRouteHandler: RouteHandler<
  typeof getV1betaParentAdSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentAdUnitsRouteHandler: RouteHandler<
  typeof getV1betaParentAdUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentAppsRouteHandler: RouteHandler<
  typeof getV1betaParentAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentMediationReportGenerateRouteHandler: RouteHandler<
  typeof postV1betaParentMediationReportGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentNetworkReportGenerateRouteHandler: RouteHandler<
  typeof postV1betaParentNetworkReportGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

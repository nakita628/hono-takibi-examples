import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentCrawledUrlsRoute,
  getV1betaParentFindingsRoute,
  getV1betaParentFindingTypeStatsRoute,
  getV1betaParentScanConfigsRoute,
  getV1betaParentScanRunsRoute,
  patchV1betaNameRoute,
  postV1betaNameStartRoute,
  postV1betaNameStopRoute,
  postV1betaParentScanConfigsRoute,
} from '../routes'

export const deleteV1betaNameRouteHandler: RouteHandler<typeof deleteV1betaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1betaNameRouteHandler: RouteHandler<typeof patchV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameStartRouteHandler: RouteHandler<
  typeof postV1betaNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameStopRouteHandler: RouteHandler<typeof postV1betaNameStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaParentCrawledUrlsRouteHandler: RouteHandler<
  typeof getV1betaParentCrawledUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentFindingTypeStatsRouteHandler: RouteHandler<
  typeof getV1betaParentFindingTypeStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentFindingsRouteHandler: RouteHandler<
  typeof getV1betaParentFindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentScanConfigsRouteHandler: RouteHandler<
  typeof getV1betaParentScanConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentScanConfigsRouteHandler: RouteHandler<
  typeof postV1betaParentScanConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentScanRunsRouteHandler: RouteHandler<
  typeof getV1betaParentScanRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

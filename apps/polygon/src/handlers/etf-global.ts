import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEtfGlobalV1AnalyticsRoute,
  getEtfGlobalV1ConstituentsRoute,
  getEtfGlobalV1FundFlowsRoute,
  getEtfGlobalV1ProfilesRoute,
  getEtfGlobalV1TaxonomiesRoute,
} from '../routes'

export const getEtfGlobalV1AnalyticsRouteHandler: RouteHandler<
  typeof getEtfGlobalV1AnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfGlobalV1ConstituentsRouteHandler: RouteHandler<
  typeof getEtfGlobalV1ConstituentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfGlobalV1FundFlowsRouteHandler: RouteHandler<
  typeof getEtfGlobalV1FundFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfGlobalV1ProfilesRouteHandler: RouteHandler<
  typeof getEtfGlobalV1ProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfGlobalV1TaxonomiesRouteHandler: RouteHandler<
  typeof getEtfGlobalV1TaxonomiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

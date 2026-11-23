import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsInboxIdAutomationBlockersRoute,
  getStatsInboxIdEvaluatedVersionsRoute,
  getStatsInboxIdProcessingRoute,
  getStatsInboxIdRoute,
  getStatsInboxIdVolumeRoute,
  getStatsScopeAccuracyRoute,
  getStatsScopeStpRoute,
  getStatsUsageRoute,
  postStatsInboxIdBlueDotsRoute,
} from '../routes'

export const getStatsUsageRouteHandler: RouteHandler<typeof getStatsUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsInboxIdRouteHandler: RouteHandler<typeof getStatsInboxIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsInboxIdAutomationBlockersRouteHandler: RouteHandler<
  typeof getStatsInboxIdAutomationBlockersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStatsInboxIdBlueDotsRouteHandler: RouteHandler<
  typeof postStatsInboxIdBlueDotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsInboxIdEvaluatedVersionsRouteHandler: RouteHandler<
  typeof getStatsInboxIdEvaluatedVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsInboxIdProcessingRouteHandler: RouteHandler<
  typeof getStatsInboxIdProcessingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsInboxIdVolumeRouteHandler: RouteHandler<
  typeof getStatsInboxIdVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsScopeAccuracyRouteHandler: RouteHandler<
  typeof getStatsScopeAccuracyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsScopeStpRouteHandler: RouteHandler<typeof getStatsScopeStpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

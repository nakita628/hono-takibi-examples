import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamActivityRoute,
  getTeamCreditUsageHistoricalRoute,
  getTeamCreditUsageRoute,
  getTeamQueueStatusRoute,
  getTeamThreatProtectionRoute,
  getTeamTokenUsageHistoricalRoute,
  getTeamTokenUsageRoute,
  putTeamThreatProtectionRoute,
} from '../routes'

export const getTeamCreditUsageRouteHandler: RouteHandler<typeof getTeamCreditUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamCreditUsageHistoricalRouteHandler: RouteHandler<
  typeof getTeamCreditUsageHistoricalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamTokenUsageRouteHandler: RouteHandler<typeof getTeamTokenUsageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamTokenUsageHistoricalRouteHandler: RouteHandler<
  typeof getTeamTokenUsageHistoricalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamQueueStatusRouteHandler: RouteHandler<typeof getTeamQueueStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTeamActivityRouteHandler: RouteHandler<typeof getTeamActivityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamThreatProtectionRouteHandler: RouteHandler<
  typeof getTeamThreatProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTeamThreatProtectionRouteHandler: RouteHandler<
  typeof putTeamThreatProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

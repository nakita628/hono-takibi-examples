import type { RouteHandler } from '@hono/zod-openapi'
import type { getSafetyAlertsIdRoute, getSafetyCasesIdRoute } from '../routes'

export const getSafetyCasesIdRouteHandler: RouteHandler<typeof getSafetyCasesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSafetyAlertsIdRouteHandler: RouteHandler<typeof getSafetyAlertsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

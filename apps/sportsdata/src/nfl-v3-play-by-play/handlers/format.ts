import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatPlayByPlayDeltaSeasonWeekMinutesRoute,
  getFormatPlayByPlaySeasonWeekHometeamRoute,
  getFormatSimulatedPlayByPlayNumberofplaysRoute,
} from '../routes'

export const getFormatPlayByPlaySeasonWeekHometeamRouteHandler: RouteHandler<
  typeof getFormatPlayByPlaySeasonWeekHometeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatPlayByPlayDeltaSeasonWeekMinutesRouteHandler: RouteHandler<
  typeof getFormatPlayByPlayDeltaSeasonWeekMinutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatSimulatedPlayByPlayNumberofplaysRouteHandler: RouteHandler<
  typeof getFormatSimulatedPlayByPlayNumberofplaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

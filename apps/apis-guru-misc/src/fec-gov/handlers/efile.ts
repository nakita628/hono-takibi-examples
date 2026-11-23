import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEfileFilingsIndexRoute,
  getEfileReportsHouseSenateIndexRoute,
  getEfileReportsPacPartyIndexRoute,
  getEfileReportsPresidentialIndexRoute,
} from '../routes'

export const getEfileFilingsIndexRouteHandler: RouteHandler<
  typeof getEfileFilingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEfileReportsHouseSenateIndexRouteHandler: RouteHandler<
  typeof getEfileReportsHouseSenateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEfileReportsPacPartyIndexRouteHandler: RouteHandler<
  typeof getEfileReportsPacPartyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEfileReportsPresidentialIndexRouteHandler: RouteHandler<
  typeof getEfileReportsPresidentialIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

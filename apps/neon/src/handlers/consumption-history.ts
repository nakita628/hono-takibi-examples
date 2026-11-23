import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConsumptionHistoryAccountRoute,
  getConsumptionHistoryProjectsRoute,
} from '../routes'

export const getConsumptionHistoryAccountRouteHandler: RouteHandler<
  typeof getConsumptionHistoryAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConsumptionHistoryProjectsRouteHandler: RouteHandler<
  typeof getConsumptionHistoryProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

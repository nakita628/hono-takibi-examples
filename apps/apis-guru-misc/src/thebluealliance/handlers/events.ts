import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsYearKeysRoute,
  getEventsYearRoute,
  getEventsYearSimpleRoute,
} from '../routes'

export const getEventsYearRouteHandler: RouteHandler<typeof getEventsYearRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsYearKeysRouteHandler: RouteHandler<typeof getEventsYearKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEventsYearSimpleRouteHandler: RouteHandler<
  typeof getEventsYearSimpleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountRoute,
  getAccountUsageYearMonthTypeRoute,
  postAccountRoute,
  putAccountRoute,
} from '../routes'

export const getAccountRouteHandler: RouteHandler<typeof getAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountRouteHandler: RouteHandler<typeof postAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountRouteHandler: RouteHandler<typeof putAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountUsageYearMonthTypeRouteHandler: RouteHandler<
  typeof getAccountUsageYearMonthTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

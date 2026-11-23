import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSuperfundsRoute,
  getSuperfundsSuperFundIDRoute,
  postSuperfundsRoute,
  postSuperfundsSuperFundIDRoute,
} from '../routes'

export const getSuperfundsRouteHandler: RouteHandler<typeof getSuperfundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSuperfundsRouteHandler: RouteHandler<typeof postSuperfundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSuperfundsSuperFundIDRouteHandler: RouteHandler<
  typeof getSuperfundsSuperFundIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSuperfundsSuperFundIDRouteHandler: RouteHandler<
  typeof postSuperfundsSuperFundIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

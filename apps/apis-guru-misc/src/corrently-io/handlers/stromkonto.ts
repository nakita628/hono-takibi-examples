import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStromkontoBalancesRoute,
  getStromkontoChoicesRoute,
  postStromkontoLoginRoute,
  postStromkontoPrepareTransactionRoute,
  postStromkontoRegisterRoute,
} from '../routes'

export const getStromkontoBalancesRouteHandler: RouteHandler<
  typeof getStromkontoBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStromkontoChoicesRouteHandler: RouteHandler<
  typeof getStromkontoChoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStromkontoLoginRouteHandler: RouteHandler<
  typeof postStromkontoLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStromkontoPrepareTransactionRouteHandler: RouteHandler<
  typeof postStromkontoPrepareTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStromkontoRegisterRouteHandler: RouteHandler<
  typeof postStromkontoRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

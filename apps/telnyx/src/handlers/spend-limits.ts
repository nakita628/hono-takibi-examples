import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSpendLimitsProductRoute,
  getSpendLimitsRoute,
  patchSpendLimitsProductRoute,
  postSpendLimitsRoute,
} from '../routes'

export const getSpendLimitsRouteHandler: RouteHandler<typeof getSpendLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpendLimitsRouteHandler: RouteHandler<typeof postSpendLimitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpendLimitsProductRouteHandler: RouteHandler<
  typeof deleteSpendLimitsProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSpendLimitsProductRouteHandler: RouteHandler<
  typeof patchSpendLimitsProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

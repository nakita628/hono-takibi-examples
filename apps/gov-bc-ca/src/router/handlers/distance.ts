import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDistanceBetweenPairsOutputFormatRoute,
  postDistanceBetweenPairsOutputFormatRoute,
} from '../routes'

export const getDistanceBetweenPairsOutputFormatRouteHandler: RouteHandler<
  typeof getDistanceBetweenPairsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDistanceBetweenPairsOutputFormatRouteHandler: RouteHandler<
  typeof postDistanceBetweenPairsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatDfsSlatesByDateDateRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
} from '../routes'

export const getFormatDfsSlatesByDateDateRouteHandler: RouteHandler<
  typeof getFormatDfsSlatesByDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatPlayerGameProjectionStatsByDateDateRouteHandler: RouteHandler<
  typeof getFormatPlayerGameProjectionStatsByDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRouteHandler: RouteHandler<
  typeof getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute
> = async (c) => {
  throw new Error('Not implemented')
}

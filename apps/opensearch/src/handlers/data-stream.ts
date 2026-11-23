import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDataStreamNameRoute,
  getDataStreamNameRoute,
  getDataStreamNameStatsRoute,
  getDataStreamRoute,
  getDataStreamStatsRoute,
  putDataStreamNameRoute,
} from '../routes'

export const getDataStreamRouteHandler: RouteHandler<typeof getDataStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataStreamStatsRouteHandler: RouteHandler<typeof getDataStreamStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDataStreamNameRouteHandler: RouteHandler<
  typeof deleteDataStreamNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataStreamNameRouteHandler: RouteHandler<typeof getDataStreamNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDataStreamNameRouteHandler: RouteHandler<typeof putDataStreamNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDataStreamNameStatsRouteHandler: RouteHandler<
  typeof getDataStreamNameStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

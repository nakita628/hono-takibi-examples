import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInsightsIdRoute,
  getInsightsIdRoute,
  postInsightsRoute,
  postInsightsSearchRoute,
} from '../routes'

export const deleteInsightsIdRouteHandler: RouteHandler<typeof deleteInsightsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInsightsIdRouteHandler: RouteHandler<typeof getInsightsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInsightsRouteHandler: RouteHandler<typeof postInsightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInsightsSearchRouteHandler: RouteHandler<typeof postInsightsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

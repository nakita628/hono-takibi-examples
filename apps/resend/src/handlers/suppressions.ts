import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSuppressionsRoute,
  getSuppressionsRoute,
  postSuppressionsBatchAddRoute,
  postSuppressionsBatchRemoveRoute,
  getSuppressionsSuppressionRoute,
  deleteSuppressionsSuppressionRoute,
} from '../routes'

export const postSuppressionsRouteHandler: RouteHandler<typeof postSuppressionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSuppressionsRouteHandler: RouteHandler<typeof getSuppressionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSuppressionsBatchAddRouteHandler: RouteHandler<
  typeof postSuppressionsBatchAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSuppressionsBatchRemoveRouteHandler: RouteHandler<
  typeof postSuppressionsBatchRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSuppressionsSuppressionRouteHandler: RouteHandler<
  typeof getSuppressionsSuppressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSuppressionsSuppressionRouteHandler: RouteHandler<
  typeof deleteSuppressionsSuppressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

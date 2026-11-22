import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRefundsRefundIdRoute,
  postRefundsListRoute,
  postRefundsRefundIdRoute,
  postRefundsRoute,
} from '../routes'

export const postRefundsRouteHandler: RouteHandler<typeof postRefundsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRefundsRefundIdRouteHandler: RouteHandler<typeof getRefundsRefundIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRefundsRefundIdRouteHandler: RouteHandler<
  typeof postRefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRefundsListRouteHandler: RouteHandler<typeof postRefundsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

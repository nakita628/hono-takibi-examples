import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSignRequestsRoute,
  getSignRequestsSignRequestIdRoute,
  postSignRequestsRoute,
  postSignRequestsSignRequestIdCancelRoute,
  postSignRequestsSignRequestIdResendRoute,
} from '../routes'

export const postSignRequestsSignRequestIdCancelRouteHandler: RouteHandler<
  typeof postSignRequestsSignRequestIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignRequestsSignRequestIdResendRouteHandler: RouteHandler<
  typeof postSignRequestsSignRequestIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSignRequestsSignRequestIdRouteHandler: RouteHandler<
  typeof getSignRequestsSignRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSignRequestsRouteHandler: RouteHandler<typeof getSignRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignRequestsRouteHandler: RouteHandler<typeof postSignRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

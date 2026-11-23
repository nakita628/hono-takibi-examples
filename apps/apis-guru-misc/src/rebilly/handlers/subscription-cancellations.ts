import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionCancellationsIdRoute,
  getSubscriptionCancellationsIdRoute,
  getSubscriptionCancellationsRoute,
  postSubscriptionCancellationsRoute,
  putSubscriptionCancellationsIdRoute,
} from '../routes'

export const getSubscriptionCancellationsRouteHandler: RouteHandler<
  typeof getSubscriptionCancellationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionCancellationsRouteHandler: RouteHandler<
  typeof postSubscriptionCancellationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSubscriptionCancellationsIdRouteHandler: RouteHandler<
  typeof deleteSubscriptionCancellationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionCancellationsIdRouteHandler: RouteHandler<
  typeof getSubscriptionCancellationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubscriptionCancellationsIdRouteHandler: RouteHandler<
  typeof putSubscriptionCancellationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

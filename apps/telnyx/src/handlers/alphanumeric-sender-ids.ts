import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAlphanumericSenderIdsIdRoute,
  getAlphanumericSenderIdsIdRoute,
  getAlphanumericSenderIdsRoute,
  postAlphanumericSenderIdsRoute,
} from '../routes'

export const getAlphanumericSenderIdsRouteHandler: RouteHandler<
  typeof getAlphanumericSenderIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlphanumericSenderIdsRouteHandler: RouteHandler<
  typeof postAlphanumericSenderIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAlphanumericSenderIdsIdRouteHandler: RouteHandler<
  typeof deleteAlphanumericSenderIdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlphanumericSenderIdsIdRouteHandler: RouteHandler<
  typeof getAlphanumericSenderIdsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

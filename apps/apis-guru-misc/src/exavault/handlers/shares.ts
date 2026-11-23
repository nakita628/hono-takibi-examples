import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSharesIdRoute,
  getSharesIdRoute,
  getSharesRoute,
  patchSharesIdRoute,
  postSharesCompleteSendIdRoute,
  postSharesRoute,
} from '../routes'

export const getSharesRouteHandler: RouteHandler<typeof getSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesRouteHandler: RouteHandler<typeof postSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesCompleteSendIdRouteHandler: RouteHandler<
  typeof postSharesCompleteSendIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesIdRouteHandler: RouteHandler<typeof deleteSharesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesIdRouteHandler: RouteHandler<typeof getSharesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesIdRouteHandler: RouteHandler<typeof patchSharesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

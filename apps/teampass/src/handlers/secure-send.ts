import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecureSendRevokeRoute,
  getSecureSendListRoute,
  getSecureSendPolicyRoute,
  postSecureSendCreateRoute,
} from '../routes'

export const getSecureSendPolicyRouteHandler: RouteHandler<
  typeof getSecureSendPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecureSendCreateRouteHandler: RouteHandler<
  typeof postSecureSendCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecureSendListRouteHandler: RouteHandler<typeof getSecureSendListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSecureSendRevokeRouteHandler: RouteHandler<
  typeof deleteSecureSendRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

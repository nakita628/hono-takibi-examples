import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentApprovalRequestsRoute,
  patchV1NameRoute,
  postV1NameApproveRoute,
  postV1NameDismissRoute,
  postV1NameInvalidateRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameApproveRouteHandler: RouteHandler<typeof postV1NameApproveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameDismissRouteHandler: RouteHandler<typeof postV1NameDismissRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameInvalidateRouteHandler: RouteHandler<
  typeof postV1NameInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentApprovalRequestsRouteHandler: RouteHandler<
  typeof getV1ParentApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

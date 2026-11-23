import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1AccountsRoute,
  getV1NameRoute,
  getV1ParentAdminsRoute,
  getV1ParentInvitationsRoute,
  patchV1NameRoute,
  postV1AccountsRoute,
  postV1NameAcceptRoute,
  postV1NameDeclineRoute,
  postV1NameTransferRoute,
  postV1ParentAdminsRoute,
} from '../routes'

export const getV1AccountsRouteHandler: RouteHandler<typeof getV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsRouteHandler: RouteHandler<typeof postV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameAcceptRouteHandler: RouteHandler<typeof postV1NameAcceptRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameDeclineRouteHandler: RouteHandler<typeof postV1NameDeclineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameTransferRouteHandler: RouteHandler<typeof postV1NameTransferRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentAdminsRouteHandler: RouteHandler<typeof getV1ParentAdminsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentAdminsRouteHandler: RouteHandler<typeof postV1ParentAdminsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentInvitationsRouteHandler: RouteHandler<
  typeof getV1ParentInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1MediaResourceNameRoute,
  getV1NameRoute,
  getV1ParentMembersRoute,
  getV1ParentMessagesRoute,
  getV1ParentReactionsRoute,
  getV1SpacesFindDirectMessageRoute,
  getV1SpacesRoute,
  patchV1NameRoute,
  postV1NameCompleteImportRoute,
  postV1ParentAttachmentsUploadRoute,
  postV1ParentMembersRoute,
  postV1ParentMessagesRoute,
  postV1ParentReactionsRoute,
  postV1SpacesRoute,
  postV1SpacesSetupRoute,
  putV1NameRoute,
} from '../routes'

export const getV1MediaResourceNameRouteHandler: RouteHandler<
  typeof getV1MediaResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SpacesRouteHandler: RouteHandler<typeof getV1SpacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpacesRouteHandler: RouteHandler<typeof postV1SpacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SpacesFindDirectMessageRouteHandler: RouteHandler<
  typeof getV1SpacesFindDirectMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SpacesSetupRouteHandler: RouteHandler<typeof postV1SpacesSetupRoute> = async (
  c,
) => {
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

export const putV1NameRouteHandler: RouteHandler<typeof putV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCompleteImportRouteHandler: RouteHandler<
  typeof postV1NameCompleteImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentAttachmentsUploadRouteHandler: RouteHandler<
  typeof postV1ParentAttachmentsUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentMembersRouteHandler: RouteHandler<typeof getV1ParentMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentMembersRouteHandler: RouteHandler<
  typeof postV1ParentMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentMessagesRouteHandler: RouteHandler<
  typeof getV1ParentMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentMessagesRouteHandler: RouteHandler<
  typeof postV1ParentMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentReactionsRouteHandler: RouteHandler<
  typeof getV1ParentReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentReactionsRouteHandler: RouteHandler<
  typeof postV1ParentReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

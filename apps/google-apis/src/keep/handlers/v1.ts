import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1NotesRoute,
  postV1NotesRoute,
  postV1ParentPermissionsBatchCreateRoute,
  postV1ParentPermissionsBatchDeleteRoute,
} from '../routes'

export const getV1NotesRouteHandler: RouteHandler<typeof getV1NotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NotesRouteHandler: RouteHandler<typeof postV1NotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentPermissionsBatchCreateRouteHandler: RouteHandler<
  typeof postV1ParentPermissionsBatchCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentPermissionsBatchDeleteRouteHandler: RouteHandler<
  typeof postV1ParentPermissionsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

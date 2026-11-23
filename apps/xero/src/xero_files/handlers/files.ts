import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesFileIdAssociationsObjectIdRoute,
  deleteFilesFileIdRoute,
  getFilesFileIdAssociationsRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  postFilesFileIdAssociationsRoute,
  postFilesFolderIdRoute,
  postFilesRoute,
  putFilesFileIdRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdRouteHandler: RouteHandler<typeof getFilesFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFilesFileIdRouteHandler: RouteHandler<typeof putFilesFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesFileIdRouteHandler: RouteHandler<typeof deleteFilesFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFilesFolderIdRouteHandler: RouteHandler<typeof postFilesFolderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdContentRouteHandler: RouteHandler<
  typeof getFilesFileIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdAssociationsRouteHandler: RouteHandler<
  typeof getFilesFileIdAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesFileIdAssociationsRouteHandler: RouteHandler<
  typeof postFilesFileIdAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesFileIdAssociationsObjectIdRouteHandler: RouteHandler<
  typeof deleteFilesFileIdAssociationsObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

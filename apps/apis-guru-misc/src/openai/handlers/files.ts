import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesFileIdRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  postFilesRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesFileIdRouteHandler: RouteHandler<typeof deleteFilesFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdRouteHandler: RouteHandler<typeof getFilesFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdContentRouteHandler: RouteHandler<
  typeof getFilesFileIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

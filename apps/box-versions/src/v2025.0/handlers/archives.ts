import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteArchivesArchiveIdRoute,
  getArchivesRoute,
  postArchivesRoute,
  putArchivesArchiveIdRoute,
} from '../routes'

export const getArchivesRouteHandler: RouteHandler<typeof getArchivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postArchivesRouteHandler: RouteHandler<typeof postArchivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteArchivesArchiveIdRouteHandler: RouteHandler<
  typeof deleteArchivesArchiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putArchivesArchiveIdRouteHandler: RouteHandler<
  typeof putArchivesArchiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

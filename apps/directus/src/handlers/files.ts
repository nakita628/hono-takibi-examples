import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesIdRoute,
  deleteFilesRoute,
  getFilesIdRoute,
  getFilesRoute,
  patchFilesIdRoute,
  patchFilesRoute,
  postFilesRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilesRouteHandler: RouteHandler<typeof patchFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesRouteHandler: RouteHandler<typeof deleteFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesIdRouteHandler: RouteHandler<typeof getFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilesIdRouteHandler: RouteHandler<typeof patchFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesIdRouteHandler: RouteHandler<typeof deleteFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

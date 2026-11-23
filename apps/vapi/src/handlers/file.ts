import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFileIdRoute,
  getFileIdRoute,
  getFileRoute,
  patchFileIdRoute,
  postFileRoute,
} from '../routes'

export const postFileRouteHandler: RouteHandler<typeof postFileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileRouteHandler: RouteHandler<typeof getFileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileIdRouteHandler: RouteHandler<typeof getFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFileIdRouteHandler: RouteHandler<typeof patchFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFileIdRouteHandler: RouteHandler<typeof deleteFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFileUploadsIdIndexRoute,
  getFileUploadsIndexRoute,
  postFileUploadsIndexRoute,
} from '../routes'

export const getFileUploadsIndexRouteHandler: RouteHandler<
  typeof getFileUploadsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFileUploadsIndexRouteHandler: RouteHandler<
  typeof postFileUploadsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileUploadsIdIndexRouteHandler: RouteHandler<
  typeof getFileUploadsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

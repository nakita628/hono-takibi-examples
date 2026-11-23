import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFilesFileIdIndexRoute,
  getFilesFileIdVersionsIndexRoute,
  getFilesFileIdVersionsVersionIdIndexRoute,
  patchFilesFileIdIndexRoute,
} from '../routes'

export const getFilesFileIdIndexRouteHandler: RouteHandler<
  typeof getFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilesFileIdIndexRouteHandler: RouteHandler<
  typeof patchFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdVersionsIndexRouteHandler: RouteHandler<
  typeof getFilesFileIdVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdVersionsVersionIdIndexRouteHandler: RouteHandler<
  typeof getFilesFileIdVersionsVersionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExportsIdIndexRoute,
  getExportsIdIndexRoute,
  getExportsIndexRoute,
  patchExportsIdIndexRoute,
  postExportsIndexRoute,
  putExportsIdIndexRoute,
} from '../routes'

export const getExportsIndexRouteHandler: RouteHandler<typeof getExportsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsIndexRouteHandler: RouteHandler<typeof postExportsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteExportsIdIndexRouteHandler: RouteHandler<
  typeof deleteExportsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportsIdIndexRouteHandler: RouteHandler<typeof getExportsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchExportsIdIndexRouteHandler: RouteHandler<
  typeof patchExportsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putExportsIdIndexRouteHandler: RouteHandler<typeof putExportsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
